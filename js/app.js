const campaigns = [
  {
    id: 1,
    title: "Алихан, 8 лет",
    text: "Сбор на операцию и послеоперационную реабилитацию.",
    category: "medical children urgent",
    goal: 8500000,
    raised: 5100000,
    status: "Срочно"
  },
  {
    id: 2,
    title: "Продукты для одиноких пенсионеров",
    text: "Покупка продуктовых наборов для пожилых людей в трудной ситуации.",
    category: "social",
    goal: 1200000,
    raised: 860000,
    status: "Активно"
  },
  {
    id: 3,
    title: "Слуховой аппарат для Аяжан",
    text: "Необходима адресная помощь на медицинское устройство.",
    category: "medical children",
    goal: 2400000,
    raised: 1780000,
    status: "Активно"
  },
  {
    id: 4,
    title: "Лекарства для ребёнка с редким заболеванием",
    text: "Сбор на дорогостоящее лечение и ежемесячную терапию.",
    category: "medical children urgent",
    goal: 6300000,
    raised: 2400000,
    status: "Срочно"
  },
  {
    id: 5,
    title: "Школьные наборы для детей",
    text: "Помощь семьям перед учебным годом: рюкзаки, канцтовары, форма.",
    category: "children social",
    goal: 1500000,
    raised: 980000,
    status: "Активно"
  },
  {
    id: 6,
    title: "Помощь семье после пожара",
    text: "Срочный сбор на базовые вещи, жильё и одежду.",
    category: "social urgent",
    goal: 3000000,
    raised: 1370000,
    status: "Срочно"
  }
];

const successStories = [
  {
    name: "Алина, 7 лет",
    story: "Собраны средства на операцию на сердце и курс восстановления.",
    sum: "4 200 000 ₸",
    result: "Помощь оказана",
    tag: "Медицина"
  },
  {
    name: "Анонимно",
    story: "Семья получила помощь на реабилитацию ребёнка после тяжёлого лечения.",
    sum: "1 000 000 ₸",
    result: "Помощь оказана",
    tag: "Реабилитация"
  },
  {
    name: "Арман, 68 лет",
    story: "Оплачены лекарства и обследования после инсульта.",
    sum: "680 000 ₸",
    result: "Помощь оказана",
    tag: "Социальная помощь"
  },
  {
    name: "Жанель, 14 лет",
    story: "Оплачены занятия с психологом и поддерживающая программа.",
    sum: "350 000 ₸",
    result: "Поддержка завершена",
    tag: "Подростки"
  }
];

const volunteerTasks = [
  {
    title: "Купить продукты пенсионеру",
    text: "Нужен волонтёр для адресной покупки и доставки продуктов.",
    status: "Доступно",
    className: "status-open"
  },
  {
    title: "Отвезти лекарства",
    text: "Требуется помощь с доставкой лекарств после выписки.",
    status: "Выполняется",
    className: "status-progress"
  },
  {
    title: "Помочь ребёнку с уроками",
    text: "Онлайн-поддержка по школьной программе 2 раза в неделю.",
    status: "Доступно",
    className: "status-open"
  },
  {
    title: "Сбор вещей для семьи",
    text: "Сортировка и упаковка одежды и предметов первой необходимости.",
    status: "Выполнено",
    className: "status-done"
  }
];

const ngoData = [
  {
    name: "Красный Полумесяц Казахстана",
    type: "social",
    direction: "Гуманитарная и социальная помощь",
    contacts: "Горячая линия / официальный сайт / региональные филиалы"
  },
  {
    name: "Фонд «Қазақстан халқына»",
    type: "medical social children",
    direction: "Лечение, поддержка, социальные проекты",
    contacts: "Официальная заявка через сайт фонда"
  },
  {
    name: "Фонд «Аяла»",
    type: "children medical",
    direction: "Помощь детям и медицинские проекты",
    contacts: "Контакты фонда и социальные программы"
  },
  {
    name: "Фонд «Дара»",
    type: "education children",
    direction: "Образование и развитие детей",
    contacts: "Партнёрские и образовательные программы"
  },
  {
    name: "Фонд «Болашақ»",
    type: "education social",
    direction: "Социальные и образовательные инициативы",
    contacts: "Программы развития и инклюзии"
  },
  {
    name: "Добровольное общество «Милосердие»",
    type: "children medical social",
    direction: "Помощь детям и семьям",
    contacts: "Обращение через каналы фонда"
  }
];

const teenStories = [
  {
    title: "Меня буллили, но я справился",
    text: "Я долго боялся говорить, но после разговора со взрослым мне стало легче."
  },
  {
    title: "Как я поговорила с мамой",
    text: "Сначала было страшно, но честный разговор оказался началом изменений."
  },
  {
    title: "Я думал, что я один",
    text: "Когда я увидел, что другие тоже проходят через это, стало легче просить помощь."
  }
];

const teenTests = {
  anxiety: {
    title: "Тест: уровень тревожности",
    resultType: "score",
    questions: [
      {
        q: "Ты часто переживаешь даже без понятной причины?",
        options: [
          { text: "Редко", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Часто", score: 3 }
        ]
      },
      {
        q: "Тебе сложно расслабиться?",
        options: [
          { text: "Почти нет", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Да, часто", score: 3 }
        ]
      },
      {
        q: "Ты часто прокручиваешь плохие сценарии в голове?",
        options: [
          { text: "Редко", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Почти постоянно", score: 3 }
        ]
      }
    ]
  },
  burnout: {
    title: "Тест: есть ли выгорание?",
    resultType: "score",
    questions: [
      {
        q: "Ты чувствуешь постоянную усталость?",
        options: [
          { text: "Нет", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Да", score: 3 }
        ]
      },
      {
        q: "Тебя перестало радовать то, что раньше нравилось?",
        options: [
          { text: "Нет", score: 1 },
          { text: "Немного", score: 2 },
          { text: "Да, сильно", score: 3 }
        ]
      },
      {
        q: "Становится тяжело даже начать простые дела?",
        options: [
          { text: "Редко", score: 1 },
          { text: "Бывает", score: 2 },
          { text: "Очень часто", score: 3 }
        ]
      }
    ]
  },
  support: {
    title: "Тест: нужна ли мне помощь?",
    resultType: "score",
    questions: [
      {
        q: "Ты часто чувствуешь, что не справляешься один?",
        options: [
          { text: "Редко", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Да", score: 3 }
        ]
      },
      {
        q: "Тебе трудно говорить о своих чувствах с близкими?",
        options: [
          { text: "Нет", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Да", score: 3 }
        ]
      },
      {
        q: "Бывает, что хочется просто исчезнуть от проблем?",
        options: [
          { text: "Нет", score: 1 },
          { text: "Иногда", score: 2 },
          { text: "Да", score: 3 }
        ]
      }
    ]
  }
};

function formatMoney(value) {
  return value.toLocaleString("ru-RU") + " ₸";
}

function createCampaignCard(item) {
  const percent = Math.min(100, Math.round((item.raised / item.goal) * 100));
  return `
    <article class="card-item">
      <div class="card-top">
        <span class="card-tag">${item.status}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.text}</p>
      <div class="progress-wrap">
        <div class="progress-meta">
          <span>Собрано: ${formatMoney(item.raised)}</span>
          <strong>${percent}%</strong>
        </div>
        <div class="progress">
          <div class="progress-bar" style="width:${percent}%"></div>
        </div>
        <div class="progress-meta">
          <span>Цель: ${formatMoney(item.goal)}</span>
        </div>
      </div>
      <div class="card-actions">
        <button class="btn-mini">Помочь</button>
        <button class="btn-mini">Поделиться</button>
      </div>
    </article>
  `;
}

function createSuccessCard(item) {
  return `
    <article class="card-item">
      <div class="card-top">
        <span class="card-tag">${item.tag}</span>
      </div>
      <h3 class="card-title">${item.name}</h3>
      <p class="card-text">${item.story}</p>
      <div class="progress-meta">
        <span>Собрано</span>
        <strong>${item.sum}</strong>
      </div>
      <div class="analysis-result result-safe">
        ✅ ${item.result}
      </div>
    </article>
  `;
}

function createTaskCard(item) {
  return `
    <article class="card-item">
      <div class="card-top">
        <span class="status-pill ${item.className}">${item.status}</span>
      </div>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.text}</p>
      <div class="card-actions">
        <button class="btn-mini">Откликнуться</button>
      </div>
    </article>
  `;
}

function createNgoCard(item) {
  return `
    <article class="card-item">
      <div class="card-top">
        <span class="card-tag">${item.direction}</span>
      </div>
      <h3 class="card-title">${item.name}</h3>
      <p class="card-text"><strong>Направление:</strong> ${item.direction}</p>
      <p class="card-text"><strong>Контакты:</strong> ${item.contacts}</p>
      <div class="card-actions">
        <button class="btn-mini">Связаться</button>
        <button class="btn-mini">Подробнее</button>
      </div>
    </article>
  `;
}

function createTeenStoryCard(item) {
  return `
    <article class="card-item">
      <span class="card-tag">Анонимная история</span>
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.text}</p>
    </article>
  `;
}

function renderHomePreviews() {
  const featuredCampaigns = document.getElementById("featuredCampaigns");
  const successStoriesPreview = document.getElementById("successStoriesPreview");

  if (featuredCampaigns) {
    featuredCampaigns.innerHTML = campaigns.slice(0, 3).map(createCampaignCard).join("");
  }

  if (successStoriesPreview) {
    successStoriesPreview.innerHTML = successStories.slice(0, 3).map(createSuccessCard).join("");
  }
}

function renderCampaigns(filter = "all") {
  const grid = document.getElementById("campaignsGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? campaigns
    : campaigns.filter(item => item.category.includes(filter));

  grid.innerHTML = filtered.map(createCampaignCard).join("");
}

function renderSuccessStories() {
  const grid = document.getElementById("successStoriesGrid");
  if (!grid) return;
  grid.innerHTML = successStories.map(createSuccessCard).join("");
}

function renderTasks() {
  const grid = document.getElementById("tasksGrid");
  if (!grid) return;
  grid.innerHTML = volunteerTasks.map(createTaskCard).join("");
}

function renderNgos(filter = "all") {
  const grid = document.getElementById("ngoGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? ngoData
    : ngoData.filter(item => item.type.includes(filter));

  grid.innerHTML = filtered.map(createNgoCard).join("");
}

function renderTeenStories() {
  const grid = document.getElementById("teenStoriesGrid");
  if (!grid) return;
  grid.innerHTML = teenStories.map(createTeenStoryCard).join("");
}

function setupNavToggle() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("navMenu");
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

function setupCampaignFilters() {
  const buttons = document.querySelectorAll("[data-filter]");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCampaigns(btn.dataset.filter);
    });
  });
}

function setupNgoFilters() {
  const buttons = document.querySelectorAll("[data-ngo-filter]");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderNgos(btn.dataset.ngoFilter);
    });
  });
}

function analyzeFraudText(text) {
  const lower = text.toLowerCase();

  const dangerWords = [
    "срочно", "спасите", "последний шанс", "умрет",
    "только на карту", "без документов", "скиньте на карту"
  ];
  const warningWords = [
    "операция", "очень срочно", "помогите", "прямо сейчас", "тяжелая ситуация"
  ];

  let dangerScore = 0;
  let warningScore = 0;

  dangerWords.forEach(word => {
    if (lower.includes(word)) dangerScore += 2;
  });

  warningWords.forEach(word => {
    if (lower.includes(word)) warningScore += 1;
  });

  const bigAmountRegex = /\d{7,}/g;
  if (bigAmountRegex.test(lower)) warningScore += 2;

  if (lower.includes("карта")) warningScore += 1;
  if (lower.includes("нет документов")) dangerScore += 3;
  if (lower.length < 20) warningScore += 1;

  if (dangerScore >= 4) {
    return {
      className: "result-danger",
      title: "🔴 Риск мошенничества",
      text: "В тексте много тревожных признаков: эмоциональное давление, отсутствие подтверждений или подозрительные реквизиты. Нужна дополнительная ручная проверка."
    };
  }

  if (warningScore >= 3 || dangerScore >= 2) {
    return {
      className: "result-warning",
      title: "🟡 Требует проверки",
      text: "Обнаружены неоднозначные признаки. Перед переводом средств проверьте документы, реквизиты, прозрачность отчётности и подтверждения."
    };
  }

  return {
    className: "result-safe",
    title: "🟢 Надёжный / низкий риск",
    text: "Явных тревожных признаков мало. Но перед пожертвованием всё равно проверьте документы и официальный способ перевода."
  };
}

function setupFraudChecker() {
  const btn = document.getElementById("checkFraudBtn");
  const clearBtn = document.getElementById("clearFraudBtn");
  const input = document.getElementById("fraudInput");
  const result = document.getElementById("fraudResult");

  if (!btn || !input || !result) return;

  btn.addEventListener("click", () => {
    const text = input.value.trim();

    if (!text) {
      result.className = "analysis-result result-warning";
      result.innerHTML = "<strong>🟡 Введите текст для проверки.</strong>";
      result.classList.remove("hidden");
      return;
    }

    const analysis = analyzeFraudText(text);
    result.className = `analysis-result ${analysis.className}`;
    result.innerHTML = `<strong>${analysis.title}</strong><br>${analysis.text}`;
    result.classList.remove("hidden");
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      result.classList.add("hidden");
    });
  }

  const complaintForm = document.getElementById("complaintForm");
  if (complaintForm) {
    complaintForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Жалоба отправлена.");
      complaintForm.reset();
    });
  }
}

function setupVolunteerForms() {
  const volunteerForm = document.getElementById("volunteerForm");
  const sponsorForm = document.getElementById("sponsorForm");

  if (volunteerForm) {
    volunteerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Заявка волонтёра отправлена.");
      volunteerForm.reset();
    });
  }

  if (sponsorForm) {
    sponsorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Заявка спонсора отправлена.");
      sponsorForm.reset();
    });
  }
}

function setupTeenChat() {
  const input = document.getElementById("teenInput");
  const btn = document.getElementById("sendTeenMessage");
  const chat = document.getElementById("teenChat");
  const alertBox = document.getElementById("teenAlertBox");

  if (!input || !btn || !chat) return;

  const riskPhrases = [
    "не хочу жить",
    "меня бьют",
    "я боюсь",
    "хочу умереть",
    "мне страшно",
    "не вижу смысла жить"
  ];

  function getBotReply(text) {
    const lower = text.toLowerCase();

    if (riskPhrases.some(phrase => lower.includes(phrase))) {
      if (alertBox) alertBox.classList.remove("hidden");
      return "Я очень серьёзно отношусь к тому, что ты написал(а). Ты не должен(на) оставаться с этим один(одна). Пожалуйста, обратись за срочной помощью прямо сейчас.";
    }

    if (lower.includes("трев") || lower.includes("стресс")) {
      return "Похоже, тебе сейчас очень тяжело. Давай начнём с простого: назови одну вещь, которая давит сильнее всего.";
    }

    if (lower.includes("школ")) {
      return "Проблемы в школе правда могут сильно выматывать. Хочешь, попробуем вместе разложить ситуацию на части?";
    }

    if (lower.includes("семь")) {
      return "Когда дома тяжело, это особенно больно. Ты можешь рассказать столько, сколько тебе безопасно.";
    }

    if (lower.includes("один") || lower.includes("одиноче")) {
      return "Ты не один(одна), даже если сейчас так ощущается. Иногда первый шаг — просто написать это вслух, и ты уже его сделал(а).";
    }

    return "Я тебя слышу. Ты не обязан(а) справляться со всем в одиночку. Можешь рассказать чуть подробнее?";
  }

  btn.addEventListener("click", () => {
    const value = input.value.trim();
    if (!value) return;

    chat.insertAdjacentHTML(
      "beforeend",
      `<div class="chat-message user">${value}</div>`
    );

    const reply = getBotReply(value);

    setTimeout(() => {
      chat.insertAdjacentHTML(
        "beforeend",
        `<div class="chat-message bot">${reply}</div>`
      );
      chat.scrollTop = chat.scrollHeight;
    }, 300);

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
  });
}

function setupTeenButtons() {
  const buttons = document.querySelectorAll(".emotion-btn");
  const input = document.getElementById("teenInput");
  if (!buttons.length || !input) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      input.value = btn.textContent.trim();
      input.focus();
    });
  });
}

function renderQuiz(testKey) {
  const quizBox = document.getElementById("quizBox");
  const title = document.getElementById("quizTitle");
  const questionsEl = document.getElementById("quizQuestions");
  const submitBtn = document.getElementById("submitQuizBtn");
  const result = document.getElementById("quizResult");

  if (!quizBox || !title || !questionsEl || !submitBtn || !result) return;

  const test = teenTests[testKey];
  if (!test) return;

  title.textContent = test.title;
  result.classList.add("hidden");

  questionsEl.innerHTML = test.questions.map((question, index) => `
    <div class="quiz-question">
      <h4>${index + 1}. ${question.q}</h4>
      <div class="quiz-options">
        ${question.options.map((opt, optIndex) => `
          <label class="quiz-option">
            <input type="radio" name="q${index}" value="${opt.score}" />
            <span>${opt.text}</span>
          </label>
        `).join("")}
      </div>
    </div>
  `).join("");

  submitBtn.classList.remove("hidden");
  submitBtn.onclick = () => {
    let total = 0;
    let answered = 0;

    test.questions.forEach((_, index) => {
      const checked = document.querySelector(`input[name="q${index}"]:checked`);
      if (checked) {
        total += Number(checked.value);
        answered += 1;
      }
    });

    if (answered !== test.questions.length) {
      result.className = "analysis-result result-warning";
      result.innerHTML = "<strong>🟡 Ответьте на все вопросы.</strong>";
      result.classList.remove("hidden");
      return;
    }

    let message = "";
    let className = "result-safe";

    if (total <= 4) {
      className = "result-safe";
      message = "🟢 Уровень напряжения сейчас невысокий. Но всё равно важно отдыхать и замечать своё состояние.";
    } else if (total <= 7) {
      className = "result-warning";
      message = "🟡 Есть признаки, что тебе непросто. Возможно, стоит поговорить с близким взрослым, психологом или наставником.";
    } else {
      className = "result-danger";
      message = "🔴 Похоже, тебе сейчас действительно тяжело. Пожалуйста, не оставайся с этим один(одна): обратись к взрослому, школьному психологу или на линию доверия.";
    }

    result.className = `analysis-result ${className}`;
    result.innerHTML = `<strong>Результат</strong><br>${message}`;
    result.classList.remove("hidden");
  };
}

function setupTeenTests() {
  const buttons = document.querySelectorAll("[data-test]");
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      renderQuiz(btn.dataset.test);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupNavToggle();
  renderHomePreviews();
  renderCampaigns();
  renderSuccessStories();
  renderTasks();
  renderNgos();
  renderTeenStories();

  setupCampaignFilters();
  setupNgoFilters();
  setupFraudChecker();
  setupVolunteerForms();
  setupTeenChat();
  setupTeenButtons();
  setupTeenTests();
});
