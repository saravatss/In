export const MAX_SECTION_CHARS = 500;

export function isFormComplete(sections, formData, meta) {
  if (!meta?.clientName?.trim()) return false;

  return sections.every((section) => {
    const value = formData[section.id];
    return typeof value === "string" && value.trim().length > 0;
  });
}

export function getFilledStepsCount(sections, formData) {
  return sections.filter((section) => formData[section.id]?.trim()).length;
}
