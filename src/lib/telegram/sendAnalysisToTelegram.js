import { getTelegramConfig } from "./config";
import { formatAnalysisMessage } from "./formatAnalysisMessage";

const TELEGRAM_API_BASE = "https://api.telegram.org";
const REQUEST_TIMEOUT_MS = 8000;

export async function sendAnalysisToTelegram(payload) {
  const { botToken, chatId, isConfigured } = getTelegramConfig();

  if (!isConfigured) {
    return {
      ok: false,
      error:
        "Telegram не настроен. Добавьте TELEGRAM_BOT_TOKEN и TELEGRAM_CHAT_ID в .env.local",
    };
  }

  const telegramUsername = payload.telegramUsername?.trim();
  if (!telegramUsername) {
    return {
      ok: false,
      error: "Укажите Telegram-никнейм для отправки",
    };
  }

  const message = formatAnalysisMessage({
    ...payload,
    telegramUsername,
  });

  try {
    const response = await fetch(
      `${TELEGRAM_API_BASE}/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
        }),
        signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      }
    );

    const raw = await response.text();
    let data = null;

    try {
      data = raw ? JSON.parse(raw) : null;
    } catch {
      return {
        ok: false,
        error: "Telegram вернул некорректный ответ",
      };
    }

    if (!response.ok || !data?.ok) {
      return {
        ok: false,
        error: data?.description || "Не удалось отправить сообщение в Telegram",
      };
    }

    return {
      ok: true,
      messageId: data.result?.message_id,
    };
  } catch (error) {
    const isTimeout =
      error?.name === "TimeoutError" ||
      error?.name === "AbortError" ||
      error?.code === "UND_ERR_CONNECT_TIMEOUT";

    if (isTimeout) {
      return {
        ok: false,
        error:
          "Не удалось подключиться к Telegram API (таймаут). Проверьте интернет или VPN.",
      };
    }

    return {
      ok: false,
      error: "Ошибка сети при обращении к Telegram API",
    };
  }
}
