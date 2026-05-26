export function getTelegramConfig() {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  return {
    botToken,
    chatId,
    isConfigured: Boolean(botToken && chatId),
  };
}
