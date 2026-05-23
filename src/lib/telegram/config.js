/**
 * Telegram Bot — конфигурация
 *
 * Добавьте переменные в файл `.env.local` в корне проекта:
 *
 *   TELEGRAM_BOT_TOKEN=123456789:AA...your_bot_token
 *   TELEGRAM_CHAT_ID=123456789
 *
 * TELEGRAM_BOT_TOKEN — токен бота от @BotFather
 * TELEGRAM_CHAT_ID   — chat_id чата/канала, куда бот отправляет анализ
 *                      (бот должен быть добавлен в этот чат)
 *
 * Для личных сообщений пользователю по @username: пользователь должен
 * сначала написать боту /start, затем chat_id можно получить через getUpdates.
 */

export function getTelegramConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  return {
    botToken,
    chatId,
    isConfigured: Boolean(botToken && chatId),
  };
}
