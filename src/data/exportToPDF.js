import { jsPDF } from "jspdf";

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

export async function exportToPdf(title, sections, formData, meta = {}) {
  const doc = new jsPDF();

  const response = await fetch("/fonts/Manrope-Regular.ttf");
  const buffer = await response.arrayBuffer();

  const base64 = btoa(
    new Uint8Array(buffer).reduce(
      (data, byte) => data + String.fromCharCode(byte),
      ""
    )
  );

  doc.addFileToVFS("Manrope-Regular.ttf", base64);
  doc.addFont("Manrope-Regular.ttf", "Manrope", "normal");
  doc.setFont("Manrope");

  let y = 20;

  doc.setFontSize(16);
  doc.text(title, 20, y);
  y += 10;

  if (meta.clientName) {
    doc.setFontSize(12);
    doc.text(`Клиент: ${meta.clientName}`, 20, y);
    y += 8;
  }

  if (meta.date) {
    doc.text(`Дата: ${meta.date}`, 20, y);
    y += 8;
  }

  y += 4;
  doc.setFontSize(12);

  sections.forEach((section) => {
    const text = formData[section.id] || "";

    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    doc.text(section.title, 20, y);
    y += 8;

    const lines = doc.splitTextToSize(text || "—", 170);
    doc.text(lines, 20, y);
    y += lines.length * 6 + 10;
  });

  const clientPart = meta.clientName ? `-${slugify(meta.clientName)}` : "";
  doc.save(`session-template${clientPart}.pdf`);
}
