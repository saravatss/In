function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatDateLabel(isoDate) {
  if (!isoDate) return "—";

  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function formatAnalysisMessage({
  displayName,
  sections,
  formData,
  meta,
  telegramUsername,
}) {
  const username = telegramUsername?.replace(/^@/, "").trim();
  const lines = [
    "📋 <b>Анализ сессии</b>",
    "",
    `<b>Подход:</b> ${escapeHtml(displayName)}`,
    `<b>Клиент:</b> ${escapeHtml(meta?.clientName?.trim() || "—")}`,
    `<b>Дата:</b> ${escapeHtml(formatDateLabel(meta?.sessionDate))}`,
    username ? `<b>Telegram:</b> @${escapeHtml(username)}` : "",
    "",
    "———",
    "",
  ].filter(Boolean);

  sections.forEach((section) => {
    const text = formData[section.id]?.trim() || "—";
    lines.push(`<b>${escapeHtml(section.title)}</b>`);
    lines.push(escapeHtml(text));
    lines.push("");
  });

  return lines.join("\n").trim();
}
