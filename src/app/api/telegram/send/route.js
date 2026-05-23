import { sendAnalysisToTelegram } from "@/lib/telegram/sendAnalysisToTelegram";

export async function POST(request) {
  try {
    const body = await request.json();
    const { displayName, sections, formData, meta, telegramUsername } = body;

    if (!displayName || !sections?.length) {
      return Response.json(
        { ok: false, error: "Некорректные данные формы" },
        { status: 400 }
      );
    }

    const result = await sendAnalysisToTelegram({
      displayName,
      sections,
      formData,
      meta,
      telegramUsername,
    });

    if (!result.ok) {
      return Response.json(result, { status: 502 });
    }

    return Response.json(result);
  } catch (error) {
    console.error("[telegram/send]", error);

    return Response.json(
      {
        ok: false,
        error: "Ошибка сервера при отправке в Telegram",
      },
      { status: 500 }
    );
  }
}
