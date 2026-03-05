export const templates = [
  {
    id: "cbt",
    title: "Мысли",
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
];

export function getTemplateByType(type) {
  return templates.find((t) => t.id === type) || templates[0];
}