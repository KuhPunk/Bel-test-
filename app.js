"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const RULE_SECTIONS = [
    {
      id: "phonetics",
      title: "Фанетыка",
      tagline: "Правілы вымаўлення і напісання гукаў",
      rules: [
        {
          title: "Акане",
          body: "У ненаціскных складах пасля цвёрдых зычных на месцы «о» і «а» вымаўляецца [а]: вада [вада], гара [гара].",
        },
        {
          title: "Дзеканне і цеканне",
          body: "Зычныя «д» і «т» перад мяккімі зычнымі і галоснямі «е», «ё», «і», «ю», «я» змякчаюцца і вымаўляюцца як [дз'] і [ц']: дзень, цётка.",
        },
        {
          title: "Якане",
          body: "У ненаціскных складах пасля мяккіх зычных на месцы «е» і «я» вымаўляецца [я]: вясна [вясна], зямля [зямля].",
        },
        {
          title: "Чаргаванне галосных",
          body: "У беларускай мове назіраецца чаргаванне о/а: нос - насы, воз - вазы.",
        },
        {
          title: "Чаргаванне зычных",
          body: "Зычныя г, к, х чаргуюцца з ж, ч, ш: нага - ножка, рука - ручка, муха - мушка.",
        },
        {
          title: "Апострафаванне",
          body: "Апостраф ставіцца пасля зычных перад я, ю, е, ё: сям'я, п'ю, аб'ява, з'езд.",
        },
        {
          title: "Падоўжаныя зычныя",
          body: "У беларускай мове падоўжваюцца зычныя дж, дз, ч: ноччу, дожджу, пяццю.",
        },
        {
          title: "Спалучэнне шч",
          body: "Спалучэнне шч пішацца ў словах: шчыры, шчупак, шчодры, шчыт.",
        },
        {
          title: "Ў нескладовае",
          body: "Літара ў нескладовае пішацца пасля галосных: праўда, воўк, каўбаса.",
        },
        {
          title: "Мяккі знак",
          body: "Мяккі знак пішацца для абазначэння мяккасці зычных: конь, дзень, восень.",
        },
      ],
    },
    {
      id: "morphology",
      title: "Марфалогія",
      tagline: "Словазмяненне і часціны мовы",
      rules: [
        {
          title: "Назоўнік",
          body: "Назоўнікі маюць род, лік і склон. Прыклад: дом (м.р.), хата (ж.р.), акно (ср.р.).",
        },
        {
          title: "Родны склон множнага ліку",
          body: "У родным склоне множнага ліку назоўнікі маюць канчаткі -аў, -оў: дамоў, сталоў, хлопцаў.",
        },
        {
          title: "Прыметнік",
          body: "Прыметнікі пагаджаюцца з назоўнікамі ў родзе, ліку і склоне: добры чалавек, добрая справа.",
        },
        {
          title: "Ступені параўнання",
          body: "Прыметнікі маюць ступені параўнання: вялікі - большы - найбольшы.",
        },
        {
          title: "Дзеяслоў",
          body: "Дзеясловы змяняюцца па часах, асобах і ліках: я чытаю, ты чытаеш, ён чытае.",
        },
        {
          title: "Дзеепрыметнік",
          body: "Дзеепрыметнікі абазначаюць прымету па дзеянні: чытаючы, прачытаны, пісаны.",
        },
        {
          title: "Дзеепрыслоўе",
          body: "Дзеепрыслоўі абазначаюць дадатковае дзеянне: чытаючы, прачытаўшы, ідучы.",
        },
        {
          title: "Займеннік",
          body: "Займеннікі ўказваюць на прадметы: я, ты, ён, яна, яно, мы, вы, яны.",
        },
        {
          title: "Лічэбнік",
          body: "Лічэбнікі абазначаюць колькасць: адзін, два, тры, чатыры, пяць.",
        },
        {
          title: "Прыслоўе",
          body: "Прыслоўі абазначаюць прымету дзеяння: хутка, добра, весела, далёка.",
        },
      ],
    },
    {
      id: "syntax",
      title: "Сінтаксіс",
      tagline: "Будова сказаў і словазлучэнняў",
      rules: [
        {
          title: "Просты сказ",
          body: "Просты сказ складаецца з дзейніка і выказніка: Сонца свеціць.",
        },
        {
          title: "Складаны сказ",
          body: "Складаны сказ складаецца з некалькіх простых: Сонца зайшло, і стала цёмна.",
        },
        {
          title: "Даданы член сказа",
          body: "Даданы член сказа адасабляецца коскамі: Хлопчык, які чытаў кнігу, быў вельмі разумны.",
        },
        {
          title: "Звароты",
          body: "Звароты адасабляюцца коскамі: Дзеці, ідзіце дадому!",
        },
        {
          title: "Аднародныя члены",
          body: "Аднародныя члены злучаюцца злучнікамі і коскамі: Я люблю чытаць, пісаць і малюнкі.",
        },
        {
          title: "Прамая мова",
          body: "Прамая мова бярэцца ў двукоссі: Ён сказаў: «Я прыйду заўтра».",
        },
        {
          title: "Ускосная мова",
          body: "Ускосная мова перадае чужую мову: Ён сказаў, што прыйдзе заўтра.",
        },
        {
          title: "Словазлучэнне",
          body: "Словазлучэнне - гэта спалучэнне двух або больш слоў: чытаць кнігу, добры чалавек.",
        },
        {
          title: "Кіраванне",
          body: "Кіраванне - гэта тып сувязі, калі галоўнае слова патрабуе пэўнага склону: чытаць кнігу (В.с.).",
        },
        {
          title: "Дапасаванне",
          body: "Дапасаванне - гэта тып сувязі, калі залежнае слова пагаджаецца з галоўным: добры чалавек.",
        },
      ],
    },
  ];
  
  const ACHIEVEMENTS = [
    {
      id: "rule-author",
      icon: "📝",
      title: "Аўтар правіла",
      description: "Дадайце сваё першае правіла",
    },
    {
      id: "rule-collector",
      icon: "📚",
      title: "Калекцыянер",
      description: "Дадайце 5 правілаў",
    },
    {
      id: "test-builder",
      icon: "🏗️",
      title: "Канструктар",
      description: "Стварыце свой першы тэст",
    },
    {
      id: "test-architect",
      icon: "🎯",
      title: "Архітэктар",
      description: "Стварыце тэст з 5+ пытаннямі",
    },
    {
      id: "test-mentor",
      icon: "👨‍🏫",
      title: "Настаўнік",
      description: "Апублікуйце 3 тэсты",
    },
    {
      id: "first-test-pass",
      icon: "🎓",
      title: "Першы крок",
      description: "Прайдзіце свой першы тэст",
    },
    {
      id: "perfect-score",
      icon: "💯",
      title: "Ідэальны вынік",
      description: "Атрымайце 100% у тэсце",
    },
    {
      id: "quick-run",
      icon: "⚡",
      title: "Хуткі бег",
      description: "Прайдзіце тэст менш чым за 30 секунд",
    },
    {
      id: "stat-keeper",
      icon: "📊",
      title: "Статыстык",
      description: "Прайдзіце 5 тэстаў",
    },
    {
      id: "marathon-runner",
      icon: "🏃",
      title: "Марафонец",
      description: "Прайдзіце тэст з 8+ пытаннямі",
    },
    {
      id: "category-creator",
      icon: "🗂️",
      title: "Стваральнік катэгорый",
      description: "Стварыце сваю катэгорыю правілаў",
    },
    {
      id: "category-curator",
      icon: "🎨",
      title: "Куратар",
      description: "Стварыце 3 катэгорыі",
    },
    {
      id: "polyglot",
      icon: "🌍",
      title: "Паліглот",
      description: "Наведайце ўсе базавыя катэгорыі",
    },
    {
      id: "draft-master",
      icon: "✍️",
      title: "Майстар чарнавікоў",
      description: "Дадайце 10 пытанняў у чарнавікі",
    },
    {
      id: "night-owl",
      icon: "🦉",
      title: "Начная сава",
      description: "Выкарыстайце цёмную тэму",
    },
  ];
  
  const storageKeys = {
    tests: "bel-mini-tests",
    stats: "bel-mini-stats",
    rules: "bel-mini-rules",
    ruleSections: "bel-mini-rule-sections",
    achievements: "bel-mini-achievements",
    metrics: "bel-mini-metrics",
    users: "bel-mini-users",
    auth: "bel-mini-auth"
  };
  
  const THEME_KEY = "bel-mini-theme";
  const ADMIN_KEY = "belarus_admin_2024";
  const telegram = window.Telegram?.WebApp ?? null;

  // Инициализация данных
  const userSectionsFromStorage = load(storageKeys.ruleSections, []);
  const normalizedUserSections = Array.isArray(userSectionsFromStorage)
    ? userSectionsFromStorage.map((section) => ({
        ...section,
        id: section?.id || generateSectionId(section?.title || "custom"),
        title: section?.title || "Катэгорыя",
        tagline: section?.tagline || "Пользовательская катэгорыя",
        rules: Array.isArray(section?.rules) ? section.rules : [],
        isCustom: true,
      }))
    : [];
  
  const bootSections = [...RULE_SECTIONS, ...normalizedUserSections];
  const initialCustomRules = load(storageKeys.rules, [])
    .map((rule) => normalizeCustomRule(rule, bootSections))
    .filter(Boolean);
  
  const defaultRuleCategory = RULE_SECTIONS[0]?.id || "phonetics";
  const defaultMetrics = {
    visitedSections: [],
    draftQuestionsAdded: 0,
    darkModeUsed: false,
  };
  
  const storedAchievements = load(storageKeys.achievements, []);
  const storedMetrics = load(storageKeys.metrics, defaultMetrics);
  
  const metrics = {
    visitedSections: Array.isArray(storedMetrics?.visitedSections)
      ? storedMetrics.visitedSections
      : [],
    draftQuestionsAdded:
      typeof storedMetrics?.draftQuestionsAdded === "number"
        ? storedMetrics.draftQuestionsAdded
        : 0,
    darkModeUsed: Boolean(storedMetrics?.darkModeUsed),
  };

  const state = {
    tests: load(storageKeys.tests, []),
    stats: load(storageKeys.stats, []),
    customRules: initialCustomRules,
    userSections: normalizedUserSections,
    draft: {
      questions: [],
      updated: null,
    },
    activeSession: null,
    theme: loadTheme(),
    telegramUser: telegram?.initDataUnsafe?.user ?? null,
    isTelegram: Boolean(telegram),
    ruleCategory: defaultRuleCategory,
    achievementsUnlocked: Array.isArray(storedAchievements)
      ? storedAchievements
      : [],
    metrics,
    currentUser: null,
    users: load(storageKeys.users, []),
    isAuthenticated: false,
  };

  // Сохранение начальных данных
  save(storageKeys.rules, state.customRules);
  save(storageKeys.ruleSections, state.userSections);
  save(storageKeys.achievements, state.achievementsUnlocked);
  save(storageKeys.metrics, state.metrics);

  const dom = {
    tabs: document.querySelectorAll(".tab-link"),
    panels: document.querySelectorAll(".tab-panel"),
    rulesList: document.getElementById("rulesList"),
    ruleForm: document.getElementById("ruleForm"),
    ruleTitle: document.getElementById("ruleTitle"),
    ruleBody: document.getElementById("ruleBody"),
    ruleTabs: document.getElementById("ruleTabs"),
    rulesSubtitle: document.getElementById("rulesSubtitle"),
    ruleCategorySelect: document.getElementById("ruleCategorySelect"),
    ruleCategoryNew: document.getElementById("ruleCategoryNew"),
    createCategoryBtn: document.getElementById("createCategoryBtn"),
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
    achievementsList: document.getElementById("achievementsList"),
    toast: document.getElementById("toast"),
    themeToggle: document.getElementById("themeToggle"),
    logoutBtn: document.getElementById("logoutBtn"),
  };

  init();

  function init() {
    // Применяем тему сразу при загрузке
    applyTheme(state.theme, true);
    
    initAuth();
    
    if (state.isAuthenticated) {
      initApp();
    }
  }

  function initAuth() {
    const savedUser = load(storageKeys.auth, null);
    if (savedUser) {
      state.currentUser = savedUser;
      state.isAuthenticated = true;
      showAppContent();
    } else {
      showAuthSection();
    }
    
    setupAuthHandlers();
  }

  function setupAuthHandlers() {
    // Переключение между вкладками входа и регистрации
    document.querySelectorAll('.auth-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const target = e.target.dataset.authTab;
        document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
        
        e.target.classList.add('active');
        document.getElementById(`${target}Form`).classList.add('active');
        
        // Сбрасываем поля при переключении вкладок
        if (target === 'register') {
          document.getElementById('registerRole').value = '';
          document.getElementById('studentFields').style.display = 'none';
          document.getElementById('teacherFields').style.display = 'none';
        } else {
          // Сбрасываем форму входа
          document.getElementById('loginForm').reset();
        }
      });
    });

    // Переключение полей при выборе роли
    document.getElementById('registerRole').addEventListener('change', (e) => {
      const role = e.target.value;
      document.getElementById('studentFields').style.display = role === 'student' ? 'block' : 'none';
      document.getElementById('teacherFields').style.display = role === 'teacher' ? 'block' : 'none';
    });

    // Обработчики форм
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    
    console.log('registerForm найдена:', !!registerForm); // Debug
    console.log('loginForm найдена:', !!loginForm); // Debug
    
    if (registerForm) {
      registerForm.addEventListener('submit', handleRegister);
      console.log('Обработчик регистрации привязан'); // Debug
      
      // Дополнительный обработчик на кнопку
      const registerBtn = registerForm.querySelector('button[type="submit"]');
      if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
          console.log('Клик по кнопке регистрации'); // Debug
          const role = document.getElementById('registerRole').value;
          console.log('Роль при клике:', role); // Debug
        });
      }
    }
    
    if (loginForm) {
      loginForm.addEventListener('submit', handleLogin);
      console.log('Обработчик входа привязан'); // Debug
    }
    
    // Обработчики администратора
    document.getElementById('adminLoginBtn').addEventListener('click', showAdminLogin);
    document.getElementById('confirmAdminLogin').addEventListener('click', handleAdminLogin);
    document.querySelector('[data-close-modal]').addEventListener('click', () => {
      document.getElementById('adminLoginModal').classList.add('hidden');
    });
    
    // Обработчик выхода
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Обработчик темы
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
  }

  function handleRegister(e) {
    e.preventDefault();
    console.log('handleRegister вызвана'); // Debug
    
    const role = document.getElementById('registerRole').value;
    console.log('Выбранная роль:', role); // Debug
    
    if (!role) {
      toast('Выберите роль');
      return;
    }
    
    if (role === 'student') {
      console.log('Вызов registerStudent'); // Debug
      registerStudent();
    } else if (role === 'teacher') {
      console.log('Вызов registerTeacher'); // Debug
      registerTeacher();
    }
  }

  function registerStudent() {
    const firstName = document.getElementById('studentFirstName').value.trim();
    const lastName = document.getElementById('studentLastName').value.trim();
    const group = document.getElementById('studentGroup').value.trim();
    
    console.log('Регистрация ученика:', { firstName, lastName, group }); // Debug
    
    if (!firstName) {
      toast('Введите имя ученика');
      return;
    }
    
    if (!lastName) {
      toast('Введите фамилию ученика');
      return;
    }
    
    if (!group) {
      toast('Введите номер группы');
      return;
    }
    
    const student = {
      id: uid(),
      role: 'student',
      firstName,
      lastName,
      group,
      createdAt: Date.now(),
      results: []
    };
    
    state.users.push(student);
    saveUsers();
    
    state.currentUser = student;
    state.isAuthenticated = true;
    save(storageKeys.auth, student);
    
    showAppContent();
    initApp();
    toast(`Ученик ${firstName} ${lastName} зарегистрирован`);
  }

  function registerTeacher() {
    const username = document.getElementById('teacherUsername').value.trim();
    const password = document.getElementById('teacherPassword').value.trim();
    
    console.log('Регистрация учителя:', { username, password }); // Debug
    
    if (!username) {
      toast('Введите имя пользователя');
      return;
    }
    
    if (!password) {
      toast('Введите пароль');
      return;
    }
    
    // Проверка уникальности имени пользователя
    const existingUser = state.users.find(u => u.username === username);
    if (existingUser) {
      toast('Имя пользователя уже занято');
      return;
    }
    
    const teacher = {
      id: uid(),
      role: 'teacher',
      username,
      password,
      createdAt: Date.now()
    };
    
    state.users.push(teacher);
    saveUsers();
    
    state.currentUser = teacher;
    state.isAuthenticated = true;
    save(storageKeys.auth, teacher);
    
    showAppContent();
    initApp();
    toast(`Учитель ${username} зарегистрирован`);
  }

  function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    
    if (!username) {
      toast('Введите имя пользователя');
      return;
    }
    
    if (!password) {
      toast('Введите пароль');
      return;
    }
    
    const user = state.users.find(u => u.username === username && u.password === password);
    
    if (user) {
      state.currentUser = user;
      state.isAuthenticated = true;
      save(storageKeys.auth, user);
      showAppContent();
      initApp();
      toast(`Добро пожаловать, ${user.role === 'teacher' ? user.username : user.firstName}!`);
    } else {
      toast('Неверное имя пользователя или пароль');
    }
  }

  function handleAdminLogin() {
    const key = document.getElementById('adminKey').value;
    
    if (!key) {
      toast('Введите секретный ключ');
      return;
    }
    
    if (key === ADMIN_KEY) {
      const admin = {
        id: 'admin',
        role: 'admin',
        username: 'admin',
        isAdmin: true
      };
      
      state.currentUser = admin;
      state.isAuthenticated = true;
      save(storageKeys.auth, admin);
      
      document.getElementById('adminLoginModal').classList.add('hidden');
      showAppContent();
      initApp();
      toast('Вход администратора выполнен');
    } else {
      toast('Неверный секретный ключ');
    }
  }

  function showAdminLogin() {
    document.getElementById('adminLoginModal').classList.remove('hidden');
    document.getElementById('adminKey').value = '';
    document.getElementById('adminKey').focus();
  }

  function showAuthSection() {
    document.getElementById('authSection').style.display = 'block';
    document.querySelector('.app-shell').style.display = 'none';
    if (dom.logoutBtn) {
      dom.logoutBtn.style.display = 'none';
    }
    
    // Сбрасываем все формы
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    if (loginForm) loginForm.reset();
    if (registerForm) registerForm.reset();
    
    // Скрываем поля регистрации
    document.getElementById('studentFields').style.display = 'none';
    document.getElementById('teacherFields').style.display = 'none';
    
    // Активируем вкладку входа
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector('[data-auth-tab="login"]').classList.add('active');
    document.getElementById('loginForm').classList.add('active');
  }

  function showAppContent() {
    document.getElementById('authSection').style.display = 'none';
    document.querySelector('.app-shell').style.display = 'block';
    if (dom.logoutBtn) {
      dom.logoutBtn.style.display = 'block';
    }
  }

  function logout() {
    state.currentUser = null;
    state.isAuthenticated = false;
    save(storageKeys.auth, null);
    
    // Очищаем панели администратора и учителя
    const adminPanel = document.querySelector('.admin-panel');
    const teacherResults = document.querySelector('.teacher-results');
    if (adminPanel) adminPanel.remove();
    if (teacherResults) teacherResults.remove();
    
    showAuthSection();
    toast('Вы вышли из системы');
  }

  function saveUsers() {
    save(storageKeys.users, state.users);
  }

  function initApp() {
    initTelegramBridge();
    populateRuleCategorySelect();
    renderRuleTabs();
    recordSectionVisit(state.ruleCategory);
    setupTabs();
    bindForms();
    renderRules();
    renderDraft();
    renderTests();
    renderStats();
    renderAchievements();
    
    // Показываем специальный контент в зависимости от роли
    if (state.currentUser.role === 'admin') {
      renderAdminPanel();
    } else if (state.currentUser.role === 'teacher') {
      renderTeacherResults();
    }
  }

  // ... остальные функции без изменений (renderAdminPanel, renderTeacherResults, etc.)

  function renderAdminPanel() {
    const teachers = state.users.filter(u => u.role === 'teacher');
    const students = state.users.filter(u => u.role === 'student');
    
    const adminHTML = `
      <div class="admin-panel">
        <h2>Панель администратора</h2>
        
        <div class="admin-section">
          <h3>Учителя (${teachers.length})</h3>
          <div class="user-list">
            ${teachers.map(teacher => `
              <div class="user-card">
                <div class="user-info">
                  <h4>${teacher.username}</h4>
                  <p>Зарегистрирован: ${formatDate(teacher.createdAt)}</p>
                  <p><strong>Пароль:</strong> ${teacher.password}</p>
                </div>
                <div class="user-actions">
                  <button class="secondary-btn" data-delete-user="${teacher.id}">Удалить</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="admin-section">
          <h3>Ученики (${students.length})</h3>
          <div class="user-list">
            ${students.map(student => `
              <div class="user-card">
                <div class="user-info">
                  <h4>${student.firstName} ${student.lastName}</h4>
                  <p>Группа: ${student.group}</p>
                  <p>Тестов пройдено: ${student.results?.length || 0}</p>
                </div>
                <div class="user-actions">
                  <button class="secondary-btn" data-view-results="${student.id}">Результаты</button>
                  <button class="secondary-btn" data-delete-user="${student.id}">Удалить</button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    const appShell = document.querySelector('.app-shell');
    const existingAdminPanel = appShell.querySelector('.admin-panel');
    if (existingAdminPanel) {
      existingAdminPanel.remove();
    }
    appShell.insertAdjacentHTML('afterbegin', adminHTML);
    
    // Добавляем обработчики для кнопок администратора
    document.querySelectorAll('[data-delete-user]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const userId = e.target.dataset.deleteUser;
        deleteUser(userId);
      });
    });
    
    document.querySelectorAll('[data-view-results]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const studentId = e.target.dataset.viewResults;
        viewStudentResults(studentId);
      });
    });
  }

  function renderTeacherResults() {
    const students = state.users.filter(u => u.role === 'student');
    
    const groups = {};
    students.forEach(student => {
      if (!groups[student.group]) {
        groups[student.group] = [];
      }
      groups[student.group].push(student);
    });
    
    const sortedGroups = Object.keys(groups).sort();
    
    const resultsHTML = `
      <div class="teacher-results">
        <h2>Результаты учеников</h2>
        ${sortedGroups.map(group => `
          <div class="student-group">
            <div class="group-header">Группа ${group}</div>
            <div class="student-results">
              ${groups[group].map(student => `
                <div class="student-result">
                  <div class="student-name">${student.firstName} ${student.lastName}</div>
                  <div class="student-stats">
                    <span>Тестов: ${student.results?.length || 0}</span>
                    <span>Средний результат: ${calculateAverageScore(student)}%</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
    
    const appShell = document.querySelector('.app-shell');
    const existingResults = appShell.querySelector('.teacher-results');
    if (existingResults) {
      existingResults.remove();
    }
    appShell.insertAdjacentHTML('afterbegin', resultsHTML);
  }

  function calculateAverageScore(student) {
    if (!student.results || student.results.length === 0) return 0;
    const total = student.results.reduce((sum, result) => sum + result.percent, 0);
    return Math.round(total / student.results.length);
  }

  function deleteUser(userId) {
    if (confirm('Вы уверены, что хотите удалить этого пользователя?')) {
      state.users = state.users.filter(u => u.id !== userId);
      
      // Если удаляем текущего пользователя, разлогиниваем
      if (state.currentUser && state.currentUser.id === userId) {
        logout();
      }
      
      saveUsers();
      
      // Перерисовываем панель администратора если мы админ
      if (state.currentUser && state.currentUser.role === 'admin') {
        renderAdminPanel();
      }
      
      toast('Пользователь удален');
    }
  }

  function viewStudentResults(studentId) {
    const student = state.users.find(u => u.id === studentId);
    if (student && student.results) {
      const resultsText = student.results.map(r => 
        `${r.testTitle}: ${r.percent}% (${r.score}/${r.total}) - ${formatDate(r.date)}`
      ).join('\n');
      
      alert(`Результаты ${student.firstName} ${student.lastName}:\n\n${resultsText}`);
    } else {
      alert('У этого ученика пока нет результатов тестов');
    }
  }

  // ОСТАВШИЕСЯ ФУНКЦИИ БЕЗ ИЗМЕНЕНИЙ
  // ... (load, save, setupTabs, bindForms, handleRuleSubmit, renderRules, etc.)

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
    if (!state.isAuthenticated) return;
    
    if (dom.ruleForm) dom.ruleForm.addEventListener("submit", handleRuleSubmit);
    if (dom.questionForm) dom.questionForm.addEventListener("submit", handleQuestionSubmit);
    if (dom.saveTestBtn) dom.saveTestBtn.addEventListener("click", publishTest);
    
    if (dom.createCategoryBtn) {
      dom.createCategoryBtn.addEventListener("click", () => {
        const rawName = dom.ruleCategoryNew?.value?.trim();
        if (!rawName) {
          toast("Введите название категории");
          return;
        }
        const sectionId = createCustomCategory(rawName);
        if (sectionId) {
          if (dom.ruleCategoryNew) dom.ruleCategoryNew.value = "";
          setRuleCategory(sectionId);
        }
      });
    }
    
    if (dom.ruleTabs) {
      dom.ruleTabs.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-rule-section]");
        if (!btn) return;
        setRuleCategory(btn.dataset.ruleSection);
      });
    }
    
    if (dom.ruleCategorySelect) {
      dom.ruleCategorySelect.addEventListener("change", (event) => {
        setRuleCategory(event.target.value);
      });
    }

    if (dom.draftQuestions) {
      dom.draftQuestions.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-remove-question]");
        if (!btn) return;
        const id = btn.dataset.removeQuestion;
        state.draft.questions = state.draft.questions.filter((q) => q.id !== id);
        state.draft.updated = Date.now();
        renderDraft();
      });
    }

    if (dom.testsList) {
      dom.testsList.addEventListener("click", (event) => {
        const btn = event.target.closest("[data-test-id]");
        if (!btn) return;
        const test = state.tests.find((item) => item.id === btn.dataset.testId);
        if (test) {
          startSession(test);
        }
      });
    }

    if (dom.testPlayer) {
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
    }

    // Валидация формы публикации теста
    if (dom.authorNick && dom.testTitle) {
      ["input", "keyup"].forEach((evtName) => {
        dom.authorNick.addEventListener(evtName, validatePublishState);
        dom.testTitle.addEventListener(evtName, validatePublishState);
      });
    }
  }

  function handleRuleSubmit(event) {
    event.preventDefault();
    const title = dom.ruleTitle.value.trim();
    const body = dom.ruleBody.value.trim();
    let category =
      dom.ruleCategorySelect?.value ||
      state.ruleCategory ||
      defaultRuleCategory;
    const newCategoryName = dom.ruleCategoryNew?.value
      ? dom.ruleCategoryNew.value.trim()
      : "";
    if (newCategoryName) {
      const createdId = createCustomCategory(newCategoryName);
      if (createdId) {
        category = createdId;
      }
      if (dom.ruleCategoryNew) dom.ruleCategoryNew.value = "";
    }
    if (!title || !body) {
      toast("Заполните оба поля");
      return;
    }
    if (!hasRuleSection(category)) {
      toast("Выберите категорию");
      return;
    }

    state.customRules.unshift({
      id: uid(),
      title,
      body,
      createdAt: Date.now(),
      isCustom: true,
      category,
    });
    save(storageKeys.rules, state.customRules);
    dom.ruleForm.reset();
    if (dom.ruleCategorySelect) {
      dom.ruleCategorySelect.value = category;
    }
    dom.ruleTitle?.focus();
    setRuleCategory(category);
    renderRules();
    unlockAchievement("rule-author");
    if (state.customRules.length >= 5) {
      unlockAchievement("rule-collector");
    }
    toast("Правило добавлено");
  }

  function renderRules() {
    const section = getRuleSection(state.ruleCategory) ?? RULE_SECTIONS[0];
    if (!section) {
      dom.rulesList.innerHTML =
        '<p class="card muted">Правила недаступны. Перазагрузіце старонку.</p>';
      return;
    }
    if (dom.rulesSubtitle) {
      dom.rulesSubtitle.textContent =
        section.tagline || "Сістэматызаваныя правілы";
    }
    const custom = state.customRules.filter(
      (rule) => rule.category === section.id
    );
    const baseRules = Array.isArray(section.rules) ? section.rules : [];
    const items = [...baseRules, ...custom];
    if (!items.length) {
      dom.rulesList.innerHTML =
        '<p class="card muted">Пакуль правілаў няма. Дадайце сваё!</p>';
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
    incrementDraftQuestionMetric();

    dom.questionForm.reset();
    renderDraft();
    toast("Вопрос добавлен");
  }

  function renderDraft() {
    if (!dom.draftCount || !dom.draftUpdated || !dom.draftQuestions) return;
    
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
    if (!dom.saveTestBtn) return;
    
    const canPublish =
      state.draft.questions.length > 0 &&
      Boolean(dom.authorNick.value.trim()) &&
      Boolean(dom.testTitle.value.trim());

    dom.saveTestBtn.disabled = !canPublish;
  }

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
    unlockAchievement("test-builder");
    if (test.questions.length >= 5) {
      unlockAchievement("test-architect");
    }
    if (state.tests.length >= 3) {
      unlockAchievement("test-mentor");
    }

    state.draft.questions = [];
    state.draft.updated = null;
    dom.testMetaForm.reset();
    renderDraft();
    renderTests();
    validatePublishState();
    toast("Тест опубликован");
  }

  function renderTests() {
    if (!dom.testsList) return;
    
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
      participant: state.currentUser.role === 'student' 
        ? `${state.currentUser.firstName} ${state.currentUser.lastName}`
        : "",
      started: false,
      startTime: null,
      completed: false,
    };
    renderTestPlayer();
    toast(`Тест «${test.title}» готов к запуску`);
  }

  function renderTestPlayer() {
    if (!dom.testPlayer) return;
    
    if (!state.activeSession) {
      dom.testPlayer.classList.add("hidden");
      dom.testPlayer.innerHTML = "";
      return;
    }

    dom.testPlayer.classList.remove("hidden");
    const session = state.activeSession;

    if (!session.started) {
      const defaultName = session.participant || 
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
              )}" ${state.currentUser.role === 'student' ? 'readonly' : ''} />
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
    
    // Сохраняем результат для ученика
    if (state.currentUser?.role === 'student') {
      const studentResult = {
        testId: session.test.id,
        testTitle: session.test.title,
        score: session.correct,
        total: total,
        percent: percent,
        date: Date.now()
      };
      
      if (!state.currentUser.results) {
        state.currentUser.results = [];
      }
      
      state.currentUser.results.push(studentResult);
      
      // Обновляем пользователя в общем списке
      const userIndex = state.users.findIndex(u => u.id === state.currentUser.id);
      if (userIndex !== -1) {
        state.users[userIndex] = state.currentUser;
        saveUsers();
      }
      
      // Обновляем текущего пользователя в localStorage
      save(storageKeys.auth, state.currentUser);
    }
    
    // Разблокируем достижения
    if (state.stats.length === 1) {
      unlockAchievement("first-test-pass");
    }
    if (percent === 100) {
      unlockAchievement("perfect-score");
    }
    if (session.durationMs <= 30000) {
      unlockAchievement("quick-run");
    }
    if (state.stats.length >= 5) {
      unlockAchievement("stat-keeper");
    }
    if (record.total >= 8) {
      unlockAchievement("marathon-runner");
    }
    
    renderStats();
    renderTestPlayer();
    toast("Статистика обновлена");
  }

  function renderStats() {
    if (!dom.statsList) return;
    
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
    if (!dom.toast) return;
    
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
    if (nextTheme === "dark" && !state.metrics.darkModeUsed) {
      state.metrics.darkModeUsed = true;
      saveMetrics();
      unlockAchievement("night-owl");
    }
    if (telegram?.HapticFeedback) {
      telegram.HapticFeedback.impactOccurred("medium");
    }
  }

  function applyTheme(theme, force = false) {
    const normalized = theme === "dark" ? "dark" : "light";
    if (!force && normalized === state.theme) {
      return;
    }
    state.theme = normalized;
    document.body.dataset.theme = state.theme;
    if (dom.themeToggle) {
      dom.themeToggle.setAttribute("aria-pressed", state.theme === "dark");
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

    if (state.telegramUser?.username && dom.authorNick) {
      dom.authorNick.value = dom.authorNick.value || state.telegramUser.username;
    }
  }

  function populateRuleCategorySelect() {
    if (!dom.ruleCategorySelect) return;
    dom.ruleCategorySelect.innerHTML = getAllSections()
      .map(
        (section) => `<option value="${section.id}">${section.title}</option>`
      )
      .join("");
    dom.ruleCategorySelect.value = state.ruleCategory;
  }

  function renderRuleTabs() {
    if (!dom.ruleTabs) return;
    const sections = getAllSections();
    dom.ruleTabs.innerHTML = sections.map((section) => {
      const isActive = section.id === state.ruleCategory;
      const total = getRuleCountForSection(section.id);
      return `
        <button
          type="button"
          class="rule-tab-btn"
          data-rule-section="${section.id}"
          aria-pressed="${isActive}"
        >
          ${section.title} · ${total}
        </button>
      `;
    }).join("");
  }

  function renderAchievements() {
    if (!dom.achievementsList) return;
    dom.achievementsList.innerHTML = ACHIEVEMENTS.map((achievement) => {
      const unlocked = state.achievementsUnlocked.includes(achievement.id);
      return `
        <article class="achievement-card ${
          unlocked ? "unlocked" : ""
        }" data-achievement="${achievement.id}">
          <div class="achievement-icon">${achievement.icon}</div>
          <div class="achievement-meta">
            <h4>${achievement.title}</h4>
            <p>${achievement.description}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  function unlockAchievement(id) {
    if (!id || state.achievementsUnlocked.includes(id)) return;
    state.achievementsUnlocked.push(id);
    saveAchievements();
    renderAchievements();
    const achievement = ACHIEVEMENTS.find((item) => item.id === id);
    if (achievement) {
      toast(`Достижение: ${achievement.title}`);
    }
  }

  function createCustomCategory(rawTitle) {
    const title = rawTitle?.trim();
    if (!title) return null;
    const existing = getAllSections().find(
      (section) => section.title.toLowerCase() === title.toLowerCase()
    );
    if (existing) {
      toast("Категория уже существует");
      return existing.id;
    }
    const id = generateSectionId(title);
    const newSection = {
      id,
      title,
      tagline: "Пользовательская катэгорыя",
      rules: [],
      isCustom: true,
    };
    state.userSections.push(newSection);
    saveUserSections();
    populateRuleCategorySelect();
    renderRuleTabs();
    unlockAchievement("category-creator");
    if (state.userSections.length >= 3) {
      unlockAchievement("category-curator");
    }
    toast(`Категория «${title}» создана`);
    return id;
  }

  function recordSectionVisit(sectionId) {
    if (!sectionId) return;
    if (!state.metrics.visitedSections.includes(sectionId)) {
      state.metrics.visitedSections.push(sectionId);
      saveMetrics();
    }
    const baseIds = RULE_SECTIONS.map((section) => section.id);
    if (baseIds.every((id) => state.metrics.visitedSections.includes(id))) {
      unlockAchievement("polyglot");
    }
  }

  function incrementDraftQuestionMetric() {
    state.metrics.draftQuestionsAdded += 1;
    saveMetrics();
    if (state.metrics.draftQuestionsAdded >= 10) {
      unlockAchievement("draft-master");
    }
  }

  function getAllSections() {
    return [...RULE_SECTIONS, ...state.userSections];
  }

  function getRuleCountForSection(sectionId) {
    const section = getRuleSection(sectionId);
    const baseCount = Array.isArray(section?.rules) ? section.rules.length : 0;
    return baseCount + countCustomRulesInSection(sectionId);
  }

  function countCustomRulesInSection(sectionId) {
    return state.customRules.filter((rule) => rule.category === sectionId)
      .length;
  }

  function saveUserSections() {
    save(storageKeys.ruleSections, state.userSections);
  }

  function saveAchievements() {
    save(storageKeys.achievements, state.achievementsUnlocked);
  }

  function saveMetrics() {
    save(storageKeys.metrics, state.metrics);
  }

  function generateSectionId(title) {
    const base = slugify(title || "category");
    let candidate = `cat-${base}`;
    let suffix = 1;
    while (hasRuleSection(candidate)) {
      candidate = `cat-${base}-${suffix}`;
      suffix += 1;
    }
    return candidate;
  }

  function setRuleCategory(categoryId) {
    const next = hasRuleSection(categoryId) ? categoryId : defaultRuleCategory;
    if (!next) return;
    if (dom.ruleCategorySelect) {
      dom.ruleCategorySelect.value = next;
    }
    if (state.ruleCategory === next) {
      renderRules();
      recordSectionVisit(next);
      return;
    }
    state.ruleCategory = next;
    renderRuleTabs();
    renderRules();
    recordSectionVisit(next);
  }

  function hasRuleSection(sectionId) {
    return getAllSections().some((section) => section.id === sectionId);
  }

  function getRuleSection(sectionId) {
    return getAllSections().find((section) => section.id === sectionId);
  }

  function normalizeCustomRule(rule, sectionPool) {
    if (!rule) return null;
    const availableSections = Array.isArray(sectionPool)
      ? sectionPool
      : getAllSections();
    const fallback =
      availableSections[0]?.id || RULE_SECTIONS[0]?.id || defaultRuleCategory;
    const category = availableSections.some(
      (section) => section.id === rule.category
    )
      ? rule.category
      : fallback;
    return {
      ...rule,
      category,
      isCustom: true,
    };
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

  function slugify(value) {
    return (
      value
        .toString()
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9а-яё]+/giu, "-")
        .replace(/^-+|-+$/g, "") || "section"
    );
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