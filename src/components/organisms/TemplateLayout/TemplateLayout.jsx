"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./TemplateLayout.module.css";
import { Button, BUTTON_ARROW_ICON } from "@/components/atoms/Buttons/Button";
import { exportToPdf } from "@/data/exportToPDF";
import { isFormComplete, MAX_SECTION_CHARS } from "@/lib/templateValidation";
import {
  AnalysisConfirmModal,
  AnalysisToast,
} from "@/components/molecules/AnalysisNotification/AnalysisNotification";

const defaultMeta = {
  clientName: "",
  sessionDate: "",
  telegramUsername: "",
};

function formatDateForExport(isoDate) {
  if (!isoDate) return "";

  const date = new Date(`${isoDate}T00:00:00`);
  if (Number.isNaN(date.getTime())) return isoDate;

  return date.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function findStepIndex(sections, initialStepId) {
  if (!initialStepId) return 0;

  const index = sections.findIndex((section) => section.id === initialStepId);
  return index >= 0 ? index : 0;
}

export function TemplateLayout({
  displayName,
  sections,
  formData,
  onChange,
  initialStepId,
}) {
  const initialStepIndex = useMemo(
    () => findStepIndex(sections, initialStepId),
    [sections, initialStepId]
  );
  const [activeStep, setActiveStep] = useState(initialStepIndex);

  useEffect(() => {
    setActiveStep(initialStepIndex);
  }, [initialStepIndex]);
  const [meta, setMeta] = useState(defaultMeta);
  const [confirmModal, setConfirmModal] = useState(null);
  const [toast, setToast] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const currentSection = sections[activeStep];
  const totalSteps = sections.length;
  const currentValue = formData[currentSection.id] ?? "";

  const complete = useMemo(
    () => isFormComplete(sections, formData, meta),
    [sections, formData, meta]
  );

  const updateMeta = (field, value) => {
    setMeta((prev) => ({ ...prev, [field]: value }));
  };

  const handleSectionChange = (value) => {
    onChange(currentSection.id, value.slice(0, MAX_SECTION_CHARS));
  };

  const applyExample = (text) => {
    onChange(currentSection.id, text.slice(0, MAX_SECTION_CHARS));
  };

  const runExport = async () => {
    const dateLabel = formatDateForExport(meta.sessionDate);
    const title = `${displayName}${meta.clientName ? ` — ${meta.clientName}` : ""}`;
    await exportToPdf(title, sections, formData, {
      clientName: meta.clientName,
      date: dateLabel,
    });
    setToast({ variant: "export-success" });
  };

  const runSend = async () => {
    if (!meta.telegramUsername?.trim()) {
      setToast({ variant: "send-error", message: "Укажите Telegram-никнейм" });
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/telegram/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          displayName,
          sections,
          formData,
          meta,
          telegramUsername: meta.telegramUsername,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        setToast({
          variant: "send-error",
          message: result.error || "Не удалось отправить в Telegram",
        });
        return;
      }

      setToast({ variant: "send-success" });
    } catch {
      setToast({
        variant: "send-error",
        message: "Ошибка сети при отправке в Telegram",
      });
    } finally {
      setIsSending(false);
    }
  };

  const requestExport = () => {
    if (complete) {
      runExport();
      return;
    }
    setConfirmModal({ action: "export" });
  };

  const requestSend = () => {
    if (complete) {
      runSend();
      return;
    }
    setConfirmModal({ action: "send" });
  };

  const handleConfirm = async () => {
    const action = confirmModal?.action;
    setConfirmModal(null);

    if (action === "export") await runExport();
    if (action === "send") await runSend();
  };

  const goBack = () => {
    setActiveStep((prev) => Math.max(prev - 1, 0));
  };

  const goNext = () => {
    setActiveStep((prev) => Math.min(prev + 1, totalSteps - 1));
  };

  return (
    <>
      <div className={styles.wrapper}>
        <aside className={styles.sidebar} aria-label="Шаги анализа">
          <div className={styles.sidebarInner}>
            <p className={styles.stepCounter}>
              Шаг {activeStep + 1} из {totalSteps}
            </p>

            <nav className={styles.stepList}>
              {sections.map((section, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={section.id}
                    type="button"
                    aria-label={`${index + 1}. ${section.title}`}
                    className={`${styles.stepItem} ${isActive ? styles.stepItemActive : ""}`}
                    onClick={() => setActiveStep(index)}
                  >
                    <span
                      className={`${styles.stepNumber} ${isActive ? styles.stepNumberActive : ""}`}
                    >
                      {index + 1}
                    </span>
                    <span className={styles.stepTitle}>{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          <button
            type="button"
            className={styles.exportBtn}
            onClick={requestExport}
          >
            Экспортировать в PDF
          </button>
        </aside>

        <div className={styles.mobileBar}>
          <div className={styles.mobileTop}>
            <p className={styles.mobileStepCounter}>
              Шаг {activeStep + 1} из {totalSteps}
            </p>
          </div>

          <div className={styles.mobileSteps} role="tablist" aria-label="Шаги">
            {sections.map((section, index) => (
              <button
                key={section.id}
                type="button"
                role="tab"
                aria-selected={index === activeStep}
                className={`${styles.mobileStepPill} ${index === activeStep ? styles.mobileStepPillActive : ""}`}
                onClick={() => setActiveStep(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <section className={styles.formPanel} aria-labelledby="step-title">
          <div className={styles.formTopRow}>
            <div className={styles.formHeaderBlock}>
              <div className={styles.formHeaderLeft}>
                <div className={styles.stepBadge}>{activeStep + 1}</div>
                <div className={styles.formTitles}>
                  <h2 id="step-title" className={styles.formTitle}>
                    {currentSection.title}
                  </h2>
                  {currentSection.subtitle ? (
                    <p className={styles.formSubtitle}>{currentSection.subtitle}</p>
                  ) : null}
                </div>
              </div>
              <button
                type="button"
                className={styles.formExport}
                onClick={requestExport}
                aria-label="Экспортировать в PDF"
              >
                <img src="/images/download.svg" alt="" aria-hidden="true" />
              </button>
            </div>

            <div className={styles.metaFields}>
              <div className={styles.metaField}>
                <label className={styles.metaLabel} htmlFor="client-name">
                  Клиент
                </label>
                <input
                  id="client-name"
                  type="text"
                  className={styles.metaInput}
                  placeholder="Введите имя клиента"
                  value={meta.clientName ?? ""}
                  onChange={(event) => updateMeta("clientName", event.target.value)}
                />
              </div>

              <div className={styles.metaField}>
                <label className={styles.metaLabel} htmlFor="session-date">
                  Дата
                </label>
                <input
                  id="session-date"
                  type="date"
                  className={styles.datePicker}
                  value={meta.sessionDate ?? ""}
                  onChange={(event) => updateMeta("sessionDate", event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className={styles.formBody}>
            <div className={styles.textareaWrap}>
              <textarea
                className={styles.textarea}
                placeholder={currentSection.placeholder || "Введите текст..."}
                value={currentValue}
                onChange={(event) => handleSectionChange(event.target.value)}
                maxLength={MAX_SECTION_CHARS}
              />
              <span className={styles.charCounter}>
                {currentValue.length}/{MAX_SECTION_CHARS}
              </span>
            </div>

            {currentSection.examples?.length ? (
              <div className={styles.examples}>
                <p className={styles.examplesLabel}>Примеры заполнения</p>
                <div className={styles.exampleChips}>
                  {currentSection.examples.map((example) => (
                    <button
                      key={example}
                      type="button"
                      className={styles.exampleChip}
                      onClick={() => applyExample(example)}
                    >
                      {example}
                    </button>
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          <div className={styles.sendSection}>
            <div className={styles.telegramField}>
              <label className={styles.telegramLabel} htmlFor="telegram-username">
                Telegram-ник для отправки
              </label>
              <input
                id="telegram-username"
                type="text"
                className={styles.telegramInput}
                placeholder="@username"
                value={meta.telegramUsername ?? ""}
                onChange={(event) =>
                  updateMeta("telegramUsername", event.target.value)
                }
              />
            </div>
            <Button
              variant="primary"
              size="lg"
              icon={BUTTON_ARROW_ICON}
              className={styles.sendButton}
              onClick={requestSend}
              disabled={isSending}
            >
              {isSending ? "Отправка..." : "Отправить"}
            </Button>
          </div>
        </section>
      </div>

      <div className={styles.mobileBottomBar}>
        <Button
          variant="outline"
          size="sm"
          className={styles.mobileBackBtn}
          onClick={goBack}
          disabled={activeStep === 0}
        >
          Назад
        </Button>
        {activeStep < totalSteps - 1 ? (
          <Button variant="primary" size="sm" onClick={goNext}>
            Далее
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            icon={BUTTON_ARROW_ICON}
            onClick={requestSend}
            disabled={isSending}
          >
            {isSending ? "Отправка..." : "Отправить"}
          </Button>
        )}
      </div>

      <AnalysisConfirmModal
        open={Boolean(confirmModal)}
        variant={confirmModal?.action === "export" ? "export" : "send"}
        onCancel={() => setConfirmModal(null)}
        onConfirm={handleConfirm}
      />

      <AnalysisToast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
