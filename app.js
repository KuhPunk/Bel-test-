"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const storageKeys = {
    tests: "bel-mini-tests",
    stats: "bel-mini-stats",
    rules: "bel-mini-rules",
  };
  const THEME_KEY = "bel-mini-theme";
  const telegram = window.Telegram?.WebApp ?? null;

  const BASE_RULES = [
    {
      id: "rule-1",
      title: "Мяккасць і цвёрдасць зычных",
      body:
        "У беларускай мове мяккасць больш паслядоўная: перад е, ё, ю, я, і ўсе зычныя становяцца мяккімі, акрамя ж, ч, ш, р.",
    },
    {
      id: "rule-2",
      title: "Літара «ў»",
      body:
        "Нескладовае ў пішацца пасля галоснай і не можа стаяць у пачатку слова. Напрыклад, «маўчанне», «йўнуць».",
    },
    {
      id: "rule-3",
      title: "Гукавое спалучэнне «дз» і «дж»",
      body:
        "Спалучэнні «дз» і «дж» лічацца адным гукам і пры пераносе не раздзяляюцца: «дзе-ці», але «пад-жыць».",
    },
    {
      id: "rule-4",
      title: "Акання і яканне",
      body:
        "У ненаціскным становішчы літары «о» і «е» перадаюць гук «а»: «гарадок» вымаўляецца як «гарадок».",
    },
  ];

  const state = {
    tests: load(storageKeys.tests, []),
    stats: load(storageKeys.stats, []),
    customRules: load(storageKeys.rules, []),
    draft: {
      questions: [],
      updated: null,
    },
    activeSession: null,
    theme: loadTheme(),
    telegramUser: telegram?.initDataUnsafe?.user ?? null,
    isTelegram: Boolean(telegram),
  };

  const dom = {
    tabs: document.querySelectorAll(".tab-link"),
    panels: document.querySelectorAll(".tab-panel"),
    rulesList: document.getElementById("rulesList"),
    ruleForm: document.getElementById("ruleForm"),
    ruleTitle: document.getElementById("ruleTitle"),
    ruleBody: document.getElementById("ruleBody"),
    questionForm: document.getElementById("questionForm"),
    testMetaForm: document.getElementById("testMetaForm"),
    authorNick: document.getElementById("authorNick"),
    testTitle: document.getElementById("testTitle"),
    testDescription: document.getElementById("testDescription"),
    questionText: document.getElementById("questionText"),
    correctAnswer: document.getElementById("correctAnswer"),
    wrongAnswers: document.getElementById("wrongAnswers"),
    draftCount: document.getElementById("draftCount"),
    draftUpdated: document.getElementById("draftUpdated"),
    draftQuestions: document.getElementById("draftQuestions"),
    saveTestBtn: document.getElementById("saveTestBtn"),
    testsList: document.getElementById("testsList"),
    testPlayer: document.getElementById("testPlayer"),
    statsList: document.getElementById("statsList"),
    toast: document.getElementById("toast"),
    themeToggle: document.getElementById("themeToggle"),
  };

  init();

  function init() {
    initTelegramBridge();
    applyTheme(state.theme);
    setupTabs();
    bindForms();
    renderRules();
    renderDraft();
    renderTests();
    renderStats();
  }

  function load(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (_err) {
      return fallback;
    }
  }

  function save(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  function setupTabs() {
    dom.tabs.forEach((btn) =>
      btn.addEventListener("click", () => {
        const target = btn.dataset.tab;
        dom.tabs.forEach((tab) => tab.classList.toggle("active", tab === btn));
        dom.panels.forEach((panel) =>
          panel.classList.toggle("active", panel.id === target)
        );
      })
    );
  }

  function bindForms() {
    dom.ruleForm.addEventListener("submit", handleRuleSubmit);
    dom.questionForm.addEventListener("submit", handleQuestionSubmit);
    dom.saveTestBtn.addEventListener("click", publishTest);

    dom.draftQuestions.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-remove-question]");
      if (!btn) return;
      const id = btn.dataset.removeQuestion;
      state.draft.questions = state.draft.questions.filter((q) => q.id !== id);
      state.draft.updated = Date.now();
      renderDraft();
    });

    dom.testsList.addEventListener("click", (event) => {
      const btn = event.target.closest("[data-test-id]");
      if (!btn) return;
      const test = state.tests.find((item) => item.id === btn.dataset.testId);
      if (test) {
        startSession(test);
      }
    });

    dom.testPlayer.addEventListener("click", (event) => {
      const answerBtn = event.target.closest("[data-answer-index]");
      if (answerBtn) {
        handleAnswer(Number(answerBtn.dataset.answerIndex));
        return;
      }

      if (event.target.matches("[data-close-player]")) {
        state.activeSession = null;
        renderTestPlayer();
      }
    });

    dom.themeToggle?.addEventListener("click", toggleTheme);

    if (state.telegramUser?.username && !dom.authorNick.value) {
      dom.authorNick.placeholder = `@${state.telegramUser.username}`;
    }
  }

  function handleRuleSubmit(event) {
    event.preventDefault();
    const title = dom.ruleTitle.value.trim();
    const body = dom.ruleBody.value.trim();
    if (!title || !body) {
      toast("Заполните оба поля");
      return;
    }

    state.customRules.unshift({
      id: uid(),
      title,
      body,
      createdAt: Date.now(),
      isCustom: true,
    });
    save(storageKeys.rules, state.customRules);
    dom.ruleForm.reset();
    renderRules();
    toast("Правило добавлено");
  }

  function renderRules() {
    const items = [...BASE_RULES, ...state.customRules];
    if (!items.length) {
      dom.rulesList.innerHTML =
        '<p class="card muted">Пока правил нет. Добавьте своё!</p>';
      return;
    }

    dom.rulesList.innerHTML = items
      .map(
        (rule) => `
        <article class="card rule-card">
          <span class="rule-tag">
            ${rule.isCustom ? "пользовательские правила" : "базовое правило"}
          </span>
          <h3>${escapeHtml(rule.title)}</h3>
          <p>${escapeHtml(rule.body)}</p>
        </article>
      `
      )
      .join("");
  }

  function handleQuestionSubmit(event) {
    event.preventDefault();
    const text = dom.questionText.value.trim();
    const correct = dom.correctAnswer.value.trim();
    const wrongInput = dom.wrongAnswers.value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);

    if (!text || !correct || wrongInput.length === 0) {
      toast("Добавьте вопрос и минимум один неправильный ответ");
      return;
    }

    const answers = shuffle([correct, ...wrongInput]);
    const correctIndex = answers.indexOf(correct);

    state.draft.questions.push({
      id: uid(),
      text,
      answers,
      correctIndex,
    });
    state.draft.updated = Date.now();

    dom.questionForm.reset();
    renderDraft();
    toast("Вопрос добавлен");
  }

  function renderDraft() {
    dom.draftCount.textContent = state.draft.questions.length;
    dom.draftUpdated.textContent = state.draft.updated
      ? formatDate(state.draft.updated)
      : "—";

    if (state.draft.questions.length === 0) {
      dom.draftQuestions.innerHTML =
        '<li class="muted">Добавьте первый вопрос, чтобы начать</li>';
    } else {
      dom.draftQuestions.innerHTML = state.draft.questions
        .map(
          (question, index) => `
          <li class="draft-item">
            <strong>${index + 1}. ${escapeHtml(question.text)}</strong>
            <p>${question.answers.length} вариантов ответа</p>
            <button type="button" class="secondary-btn" data-remove-question="${
              question.id
            }">
              Удалить
            </button>
          </li>
        `
        )
        .join("");
    }

    validatePublishState();
  }

  function validatePublishState() {
    const canPublish =
      state.draft.questions.length > 0 &&
      Boolean(dom.authorNick.value.trim()) &&
      Boolean(dom.testTitle.value.trim());

    dom.saveTestBtn.disabled = !canPublish;
  }

  ["input", "keyup"].forEach((evtName) => {
    dom.authorNick.addEventListener(evtName, validatePublishState);
    dom.testTitle.addEventListener(evtName, validatePublishState);
  });

  function publishTest(event) {
    event.preventDefault();
    if (dom.saveTestBtn.disabled) {
      toast("Заполните данные и добавьте вопрос");
      return;
    }

    const test = {
      id: uid(),
      title: dom.testTitle.value.trim(),
      description: dom.testDescription.value.trim(),
      nickname:
        dom.authorNick.value.trim() ||
        state.telegramUser?.username ||
        state.telegramUser?.first_name ||
        "telegram-user",
      createdAt: Date.now(),
      questions: state.draft.questions.map((q) => ({ ...q })),
    };

    state.tests.unshift(test);
    save(storageKeys.tests, state.tests);

    state.draft.questions = [];
    state.draft.updated = null;
    dom.testMetaForm.reset();
    renderDraft();
    renderTests();
    validatePublishState();
    toast("Тест опубликован");
  }

  function renderTests() {
    if (!state.tests.length) {
      dom.testsList.innerHTML =
        '<p class="card muted">Пока нет пользовательских тестов</p>';
      return;
    }

    dom.testsList.innerHTML = state.tests
      .map(
        (test) => `
        <article class="card test-card">
          <h3>${escapeHtml(test.title)}</h3>
          ${
            test.description
              ? `<p>${escapeHtml(test.description)}</p>`
              : "<p class=\"muted\">Описание отсутствует</p>"
          }
          <footer>
            <span>@${escapeHtml(test.nickname)}</span>
            <span>${formatDate(test.createdAt)}</span>
          </footer>
          <button class="primary-btn" data-test-id="${test.id}">
            Пройти (${test.questions.length})
          </button>
        </article>
      `
      )
      .join("");
  }

  function startSession(test) {
    state.activeSession = {
      test,
      index: 0,
      correct: 0,
      participant: "",
      started: false,
      startTime: null,
      completed: false,
    };
    renderTestPlayer();
    toast(`Тест «${test.title}» готов к запуску`);
  }

  function renderTestPlayer() {
    if (!state.activeSession) {
      dom.testPlayer.classList.add("hidden");
      dom.testPlayer.innerHTML = "";
      return;
    }

    dom.testPlayer.classList.remove("hidden");
    const session = state.activeSession;

    if (!session.started) {
      const defaultName =
        session.participant ||
        state.telegramUser?.username ||
        state.telegramUser?.first_name ||
        "";
      dom.testPlayer.innerHTML = `
        <div class="question-block">
          <p class="chip">Автор @${escapeHtml(session.test.nickname)}</p>
          <h3>${escapeHtml(session.test.title)}</h3>
          <p>Введите своё имя и приступайте к ${session.test.questions.length} вопросам.</p>
          <form id="participantForm" class="form-card">
            <label class="form-field">
              <span>Ваш ник</span>
              <input type="text" id="participantName" placeholder="Например, @belarus_fan" value="${escapeHtml(
                defaultName
              )}" />
            </label>
            <button class="primary-btn">Начать тест</button>
          </form>
        </div>
      `;

      const form = dom.testPlayer.querySelector("#participantForm");
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = form.querySelector("#participantName");
        session.participant =
          input.value.trim() ||
          state.telegramUser?.username ||
          state.telegramUser?.first_name ||
          "Аноним";
        session.started = true;
        session.startTime = Date.now();
        renderTestPlayer();
      });
      return;
    }

    if (session.completed) {
      const duration = formatDuration(session.durationMs);
      dom.testPlayer.innerHTML = `
        <div class="question-block">
          <p class="chip">Результат сохранён</p>
          <h3>${escapeHtml(session.test.title)}</h3>
          <p>Правильных ответов: ${session.correct} из ${
        session.test.questions.length
      } (${Math.round((session.correct / session.test.questions.length) * 100)}%)</p>
          <p>Время прохождения: ${duration}</p>
          <button class="secondary-btn" data-close-player>Закрыть</button>
        </div>
      `;
      return;
    }

    const question = session.test.questions[session.index];
    dom.testPlayer.innerHTML = `
      <div class="question-block">
        <div class="draft-head">
          <span class="chip">Вопрос ${session.index + 1}/${
      session.test.questions.length
    }</span>
          <span>${escapeHtml(session.participant)}</span>
        </div>
        <h3>${escapeHtml(question.text)}</h3>
        <div class="answer-list">
          ${question.answers
            .map(
              (answer, idx) => `
              <button class="answer-btn" data-answer-index="${idx}">
                ${escapeHtml(answer)}
              </button>
            `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function handleAnswer(index) {
    const session = state.activeSession;
    if (!session || !session.started || session.completed) return;

    const question = session.test.questions[session.index];
    if (index === question.correctIndex) {
      session.correct += 1;
    }

    session.index += 1;
    if (session.index >= session.test.questions.length) {
      finalizeSession();
    } else {
      renderTestPlayer();
    }
  }

  function finalizeSession() {
    const session = state.activeSession;
    session.completed = true;
    session.durationMs = Date.now() - session.startTime;
    const total = session.test.questions.length;
    const percent = Math.round((session.correct / total) * 100);

    const record = {
      id: uid(),
      testId: session.test.id,
      testTitle: session.test.title,
      author: session.test.nickname,
      participant: session.participant,
      correct: session.correct,
      total,
      percent,
      durationMs: session.durationMs,
      createdAt: Date.now(),
    };

    state.stats.unshift(record);
    save(storageKeys.stats, state.stats);
    renderStats();
    renderTestPlayer();
    toast("Статистика обновлена");
  }

  function renderStats() {
    if (!state.stats.length) {
      dom.statsList.innerHTML =
        '<p class="card muted">Ещё нет прохождений тестов</p>';
      return;
    }

    dom.statsList.innerHTML = state.stats
      .map(
        (item) => `
        <article class="card stat-card">
          <div class="stat-meta">
            <strong>${escapeHtml(item.testTitle)}</strong>
            <span>Автор @${escapeHtml(item.author)} • Участник ${escapeHtml(
          item.participant
        )}</span>
          </div>
          <div class="chip">${item.correct}/${item.total}</div>
          <div class="chip">${item.percent}%</div>
          <div class="chip">${formatDuration(item.durationMs)}</div>
          <span>${formatDate(item.createdAt)}</span>
        </article>
      `
      )
      .join("");
  }

  function toast(message) {
    dom.toast.textContent = message;
    dom.toast.classList.add("visible");
    clearTimeout(dom.toast._timer);
    dom.toast._timer = setTimeout(() => {
      dom.toast.classList.remove("visible");
    }, 2600);
  }

  function toggleTheme() {
    const nextTheme = state.theme === "light" ? "dark" : "light";
    applyTheme(nextTheme);
    if (telegram?.HapticFeedback) {
      telegram.HapticFeedback.impactOccurred("medium");
    }
  }

  function applyTheme(theme, force = false) {
    const normalized = theme === "dark" ? "dark" : "light";
    if (!force && normalized === state.theme) {
      // still refresh UI in case of Telegram event
    }
    state.theme = normalized;
    document.body.dataset.theme = state.theme;
    dom.themeToggle?.setAttribute("aria-pressed", state.theme === "dark");
    if (dom.themeToggle) {
      dom.themeToggle.textContent =
        state.theme === "dark" ? "Дзённая тэма" : "Ночная тэма";
    }
    saveTheme(state.theme);
    if (telegram) {
      const bgColor = state.theme === "dark" ? "#0f1719" : "#f2f1ed";
      telegram.setBackgroundColor(bgColor);
      telegram.setHeaderColor(bgColor);
    }
  }

  function loadTheme() {
    const stored = localStorage.getItem(THEME_KEY);
    return stored === "dark" || stored === "light" ? stored : "light";
  }

  function saveTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
  }

  function initTelegramBridge() {
    if (!telegram) return;
    telegram.ready();
    telegram.expand();
    telegram.disableVerticalSwipes?.();
    if (telegram.colorScheme) {
      state.theme = telegram.colorScheme === "dark" ? "dark" : "light";
    }
    applyTheme(state.theme, true);

    telegram.onEvent("themeChanged", () => {
      applyTheme(telegram.colorScheme === "dark" ? "dark" : "light", true);
    });

    if (state.telegramUser?.username) {
      dom.authorNick.value = dom.authorNick.value || state.telegramUser.username;
    }
  }

  function shuffle(list) {
    const copy = [...list];
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function uid() {
    if (window.crypto?.randomUUID) return crypto.randomUUID();
    return `id-${Date.now().toString(36)}-${Math.random()
      .toString(16)
      .slice(2)}`;
  }

  function formatDate(timestamp) {
    return new Intl.DateTimeFormat("ru-RU", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp));
  }

  function formatDuration(ms) {
    const seconds = Math.max(1, Math.round(ms / 1000));
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m > 0 ? `${m} мин ${s} с` : `${s} с`;
  }

  function escapeHtml(value) {
    const safe = String(value ?? "");
    return safe
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }
});

