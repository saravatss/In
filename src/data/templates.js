const DEFAULT_EXAMPLES = [
  "Клиент сегодня много говорил о чувстве тревоги...",
  "На сессии проявилась тема границ...",
];

function withMeta(section) {
  return {
    ...section,
    subtitle: section.subtitle || "Кратко опишите наблюдения по этому пункту",
    examples: section.examples || DEFAULT_EXAMPLES,
  };
}

export const templates = [
  {
    id: "gestalt",
    displayName: "Гештальт",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      {
        id: "figure",
        title: "Фигура сессии",
        subtitle: "То, с чем пришел клиент или главная тема сессии",
        placeholder: "Введите текст...",
        examples: [
          "Обида на мать",
          "Страх отвержения",
          "Желание поддержки",
          "Конфликт «должен — хочу»",
        ],
      },
      {
        id: "metaphor",
        title: "Метафора",
        subtitle: "Какой образ или метафора описывает сессию?",
        placeholder: "Сегодня мы...",
      },
      {
        id: "lastThought",
        title: "Последняя мысль",
        subtitle: "С чем клиент ушёл с сессии?",
        placeholder: "Клиент упомянул...",
      },
      {
        id: "accent",
        title: "Акцент",
        subtitle: "На что сделать акцент в следующий раз?",
        placeholder: "Не забыть, что...",
      },
      {
        id: "respect",
        title: "Учесть",
        subtitle: "Что важно учесть о клиенте?",
        placeholder: "Кстати, мы...",
      },
      {
        id: "startWith",
        title: "Начинаем с",
        subtitle: "С чего начать следующую сессию?",
        placeholder: "Нужно сказать, что...",
      },
      {
        id: "supervisor",
        title: "К супервизору",
        subtitle: "Что обсудить на супервизии?",
        placeholder: "Упомянуть, что...",
        examples: [
          "Сложно удерживать контакт, когда клиент уходит в рационализацию",
          "Хочу обсудить свой перенос на клиента",
        ],
      },
    ].map(withMeta),
  },
  {
    id: "cbt",
    displayName: "КПТ",
    overviewComplete: true,
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      {
        id: "situation",
        title: "Ситуация",
        placeholder: "Сегодня мы...",
        overviewDescription:
          "Кратко опишите контекст сессии: что происходило, какая ситуация стала фокусом работы.",
      },
      {
        id: "firstThought",
        title: "Первые мысли",
        placeholder: "Клиент сказал...",
        overviewDescription:
          "Зафиксируйте автоматические мысли клиента в момент ситуации или в её начале.",
      },
      {
        id: "emotions",
        title: "Эмоции",
        placeholder: "Клиент упомянул...",
        overviewDescription:
          "Отметьте эмоции и их интенсивность, которые клиент переживал в ситуации.",
      },
      {
        id: "behaviour",
        title: "Поведение",
        placeholder: "Не забыть, что",
        overviewDescription:
          "Опишите действия и реакции клиента — что он делал или избегал делать.",
      },
      {
        id: "cognitive",
        title: "Когнитивные искажения",
        placeholder: "Важно упомянуть, что...",
        overviewDescription:
          "Выделите паттерны мышления: катастрофизация, чтение мыслей, долженствование и др.",
      },
      {
        id: "alterThoughts",
        title: "Альтер мысли",
        placeholder: "Нужно сказать, что...",
        overviewDescription:
          "Сформулируйте более сбалансированные мысли, которые можно проверить на практике.",
      },
      {
        id: "homework",
        title: "Домашнее задание",
        placeholder: "Упомянуть, что...",
        overviewDescription:
          "Запишите задание между сессиями: упражнения, наблюдения или эксперименты.",
      },
      {
        id: "remember",
        title: "Учесть",
        placeholder: "Кстати, мы...",
        overviewDescription:
          "Что важно помнить о клиенте, триггерах и особенностях на следующих встречах.",
      },
      {
        id: "supervisor",
        title: "К супервизору",
        placeholder: "Нужно сказать, что...",
        overviewDescription:
          "Вопросы и сомнения, которые стоит обсудить с супервизором.",
      },
    ].map(withMeta),
  },
  {
    id: "psycho",
    displayName: "Психоанализ",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "assotiation", title: "Ассоциации клиента", placeholder: "Сегодня мы..." },
      { id: "centralConflict", title: "Центральный конфликт", placeholder: "Клиент сказал..." },
      {
        id: "protextiveMechnisms",
        title: "Защитные механизмы",
        placeholder: "Клиент упомянул...",
      },
      { id: "transfer", title: "Перенос", placeholder: "Не забыть, что" },
      { id: "childExp", title: "Детский опыт", placeholder: "Важно упомянуть, что..." },
      { id: "Definition", title: "Трактовка", placeholder: "Нужно сказать, что..." },
      { id: "supervisor", title: "К супервизору", placeholder: "К супервизору" },
    ].map(withMeta),
  },
  {
    id: "exist",
    displayName: "Экзистенциальная терапия",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "Theme", title: "Тема, смысл", placeholder: "Сегодня мы..." },
      { id: "worries", title: "Переживание клиента", placeholder: "Клиент сказал..." },
      { id: "conflict", title: "Конфликт", placeholder: "Клиент упомянул..." },
      { id: "question", title: "Вопрос смысла", placeholder: "Не забыть, что" },
      { id: "restrains", title: "Ограничения", placeholder: "Важно упомянуть, что..." },
      {
        id: "opportunities",
        title: "Возможности выбора",
        placeholder: "Нужно сказать, что...",
      },
      {
        id: "arrow",
        title: "Направление следующей сессии",
        placeholder: "Запомнить, что...",
      },
    ].map(withMeta),
  },
  {
    id: "integrative",
    displayName: "Интегративная терапия",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "themeClient", title: "Тема клиента", placeholder: "Сегодня мы..." },
      { id: "level", title: "Уровень проблемы", placeholder: "Клиент сказал..." },
      { id: "pattern", title: "Паттерн", placeholder: "Клиент упомянул..." },
      { id: "transfer", title: "Перенос", placeholder: "Не забыть, что" },
      { id: "resourses", title: "Ресурсы клиента", placeholder: "Важно упомянуть, что..." },
      { id: "interventions", title: "Интервенция", placeholder: "Нужно сказать, что..." },
      { id: "planWork", title: "План работы", placeholder: "Запомнить, что..." },
      { id: "thoughts", title: "Мысли", placeholder: "Упомянуть, что..." },
    ].map(withMeta),
  },
];

export function getTemplateByType(type) {
  return templates.find((t) => t.id === type) || templates[0];
}
