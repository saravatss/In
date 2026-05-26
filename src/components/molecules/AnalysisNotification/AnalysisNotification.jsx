"use client";

import { useEffect } from "react";
import styles from "./AnalysisNotification.module.css";

function AlertIcon({ className }) {
  return (
    <span className={`${styles.alertIcon} ${className || ""}`} aria-hidden="true">
      <img src="/images/alert_outline.svg" alt="" className={styles.alertCircle} />
      <img src="/images/alert_icon.svg" alt="" className={styles.alertExclamation} />
      <span className={styles.alertDot} />
    </span>
  );
}

function CheckIcon({ className }) {
  return (
    <span className={`${styles.checkIcon} ${className || ""}`} aria-hidden="true">
      <svg width="13" height="9" viewBox="0 0 13 9" fill="none" aria-hidden="true">
        <path
          d="M1 4.5L4.5 8L12 1"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function AnalysisConfirmModal({
  open,
  variant = "send",
  onCancel,
  onConfirm,
}) {
  useEffect(() => {
    if (!open) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") onCancel();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [open, onCancel]);

  if (!open) return null;

  const isExport = variant === "export";
  const confirmLabel = isExport ? "Экспортировать" : "Отправить";

  return (
    <div className={styles.modalRoot} role="presentation" onClick={onCancel}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="analysis-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <AlertIcon />
          <div className={styles.modalText}>
            <h2 id="analysis-modal-title" className={styles.modalTitle}>
              Не все поля заполнены!
            </h2>
            <p className={styles.modalDescription}>
              {isExport ? (
                <>
                  Вы уверены, что хотите экспортировать
                  <br />
                  шаблон с незаполненными полями?
                </>
              ) : (
                <>
                  Вы уверены, что хотите отправить
                  <br />
                  шаблон с незаполненными полями?
                </>
              )}
            </p>
          </div>
        </div>

        <div className={styles.modalActions}>
          <button type="button" className={styles.cancelBtn} onClick={onCancel}>
            Отмена
          </button>
          <button type="button" className={styles.confirmBtn} onClick={onConfirm}>
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export function AnalysisToast({ toast, onClose }) {
  useEffect(() => {
    if (!toast) return undefined;

    const timer = window.setTimeout(onClose, 5000);
    return () => window.clearTimeout(timer);
  }, [toast, onClose]);

  if (!toast) return null;

  const isExport = toast.variant === "export-success";
  const isCopied = toast.variant === "copied";
  const isError = toast.variant === "send-error";

  return (
    <div className={`${styles.toast} ${isError ? styles.toastError : ""}`} role="status" aria-live="polite">
      {!isError ? <CheckIcon /> : null}
      <div className={styles.toastText}>
        <p className={styles.toastTitle}>
          {isError
            ? "Ошибка отправки"
            : isExport
              ? "Успешно скачано!"
              : isCopied
                ? "Успешно скопировано!"
                : "Успешно отправлено!"}
        </p>
        <p className={styles.toastSubtitle}>
          {isError
            ? toast.message || "Попробуйте ещё раз"
            : isExport
              ? "Проверьте загрузки"
              : isCopied
                ? "Проверьте буфер обмена"
                : "Проверьте телеграм-бот"}
        </p>
      </div>
      <button
        type="button"
        className={styles.toastClose}
        onClick={onClose}
        aria-label="Закрыть уведомление"
      >
        ×
      </button>
    </div>
  );
}
