"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Footer } from "@/components/organisms/Footer/Footer";
import { Header } from "@/components/organisms/Header/Header";
import { Button, BUTTON_ARROW_ICON } from "@/components/atoms/Buttons/Button";

const approaches = [
  { id: "cbt", label: "КПТ" },
  { id: "gestalt", label: "Гештальт-терапия" },
  { id: "psycho", label: "Психоанализ" },
  { id: "exist", label: "Экзистенциальная терапия" },
  { id: "integrative", label: "Интегративная терапия" },
];

export default function Templates() {
  const router = useRouter();
  const [selectedApproach, setSelectedApproach] = useState(null);

  const handleSelectApproach = (id) => {
    setSelectedApproach((current) => (current === id ? null : id));
  };

  const handleContinue = () => {
    if (selectedApproach) {
      router.push(`/templates/${selectedApproach}`);
    }
  };

  return (
    <div className={styles.page}>
      <Header
        className={styles.analysisHeader}
        title="Анализ"
        description="Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом."
      />

      <div className={styles.hero}>
        <div className={styles.overlay}>
          <img
            src="/images/templateBg.svg"
            alt=""
            className={styles.overlayBg}
            aria-hidden="true"
          />
          <div className={styles.overlayContent}>
            <h1 className={`${styles.title} title-2`}>
              <span className={styles.titleLine}>С каким подходом</span>
              <span className={styles.titleLine}>вы работаете?</span>
            </h1>

            <div className={styles.tags}>
              {approaches.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectApproach(item.id)}
                  className={`${styles.tag} ${
                    selectedApproach === item.id ? styles.tagSelected : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.buttonWrapper}>
            <Button
              variant="primary"
              size="sm"
              icon={BUTTON_ARROW_ICON}
              disabled={!selectedApproach}
              onClick={handleContinue}
              className={styles.nextButton}
            >
              Далее
            </Button>
          </div>
        </div>
      </div>

      <Footer className={styles.pageFooter} />
    </div>
  );
}
