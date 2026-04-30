export const templates = [
  {
    id: "gestalt",
    title: "Анализ",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "figure", title: "Фигура сессии", placeholder: "Сегодня мы..." },
      { id: "metaphor", title: "Метафора", placeholder: "Сегодня мы..." },
      { id: "lastThought", title: "Последняя мысль", placeholder: "Клиент упомянул..." },
      { id: "accent", title: "Акцент", placeholder: "Не забыть, что..." },
      { id: "respect", title: "Учесть", placeholder: "Кстати, мы..." },
      { id: "startWith", title: "Начинаем с", placeholder: "Нужно сказать, что..." },
      { id: "supervisor", title: "К супервизору", placeholder: "Упомянуть, что..." },
    ],
  },
  {
    id: "cbt",
    title: "Анализ",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "situation", title: "Ситуация", placeholder: "Сегодня мы..." },
      { id: "firstThought", title: "Первые мысли", placeholder: "Клиент сказал..." },
      { id: "emotions", title: "Эмоции", placeholder: "Клиент упомянул..." },
      { id: "behaviour", title: "Поведение", placeholder: "Не забыть, что" },
      { id: "cognitive", title: "Когнитивные искажения", placeholder: "Важно упомянуть, что..." },
      { id: "alterThoughts", title: "Альтер мысли", placeholder: "Нужно сказать, что..." },
      { id: "homework", title: "Домашнее задание", placeholder: "Упомянуть, что..." },
      { id: "remember", title: "Учесть", placeholder: "Кстати, мы..." },
      { id: "supervisor", title: "К супервизору", placeholder: "Нужно сказать, что..." },
    ],
  },
    {
    id: "psycho",
    title: "Анализ",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "assotiation", title: "Ассоциации клиента", placeholder: "Сегодня мы..." },
      { id: "centralConflict", title: "Центральный конфликт", placeholder: "Клиент сказал..." },
      { id: "protextiveMechnisms", title: "Защитные механизмы", placeholder: "Клиент упомянул..." },
      { id: "transfer", title: "Перенос", placeholder: "Не забыть, что" },
      { id: "childExp", title: "Детский опыт", placeholder: "Важно упомянуть, что..." },
      { id: "Definition", title: "Трактовка", placeholder: "Нужно сказать, что..." },
      { id: "supervisor", title: "К супервизору", placeholder: "К супервизору" },
      
    ],
  },
  {
    id: "exist",
    title: "Анализ",
    description:
      "Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом.",
    sections: [
      { id: "Theme", title: "Тема, смысл", placeholder: "Сегодня мы..." },
      { id: "worries", title: "Переживание клиента", placeholder: "Клиент сказал..." },
      { id: "conflict", title: "Конфликт", placeholder: "Клиент упомянул..." },
      { id: "question", title: "Вопрос смысла", placeholder: "Не забыть, что" },
      { id: "restrains", title: "Ограничения", placeholder: "Важно упомянуть, что..." },
      { id: "opportunities", title: "Возможности выбора", placeholder: "Нужно сказать, что..." },
      { id: "arrow", title: "Направление следующей сесссии", placeholder: "Запомнить, что..." },
      
    ],
  },
  {
    id: "integrative",
    title: "Анализ",
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
      
    ],
  },
];

export function getTemplateByType(type) {
  return templates.find((t) => t.id === type) || templates[0];
}

