"use client";

import { useState } from "react";
import { AnalysisToast } from "@/components/molecules/AnalysisNotification/AnalysisNotification";
import styles from "./ShareFooter.module.css";

export function ShareFooter({ date, sharePath }) {
  const [toast, setToast] = useState(null);

  async function copyLink() {
    const url = new URL(sharePath, window.location.origin).href;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const el = document.createElement("textarea");
        el.value = url;
        el.setAttribute("readonly", "");
        el.style.position = "fixed";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setToast({ variant: "copied" });
    } catch {
      setToast({
        variant: "send-error",
        message: "Не удалось скопировать ссылку",
      });
    }
  }

  return (
    <>
      <div className={styles.footerRow}>
        <span className={styles.date}>{date}</span>
        <button type="button" className={styles.share} onClick={copyLink} aria-label="Поделиться">
          <span className={styles.shareText}>Поделиться</span>
          <img src="/images/share.svg" alt="" className={styles.shareIcon} />
        </button>
      </div>
      <AnalysisToast toast={toast} onClose={() => setToast(null)} />
    </>
  );
}
