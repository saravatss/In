import { jsPDF } from "jspdf";

export async function exportToPdf(title, sections, formData) {
  const doc = new jsPDF();

  // Загружаем шрифт
  const response = await fetch("/fonts/Manrope-Regular.ttf");
  const buffer = await response.arrayBuffer();

  // Конвертация в base64
  const base64 = btoa(
    new Uint8Array(buffer)
      .reduce((data, byte) => data + String.fromCharCode(byte), "")
  );

  // Добавляем в jsPDF
  doc.addFileToVFS("Manrope-Regular.ttf", base64);
  doc.addFont("Manrope-Regular.ttf", "Manrope", "normal");
  doc.setFont("Manrope");

  let y = 20;

  doc.setFontSize(16);
  doc.text(title, 20, y);
  y += 10;

  doc.setFontSize(12);

  sections.forEach(section => {
    const text = formData[section.id] || "";

    doc.text(section.title, 20, y);
    y += 8;

    doc.text(text, 20, y, { maxWidth: 170 });
    y += 15;
  });

  doc.save("session-template.pdf");
}