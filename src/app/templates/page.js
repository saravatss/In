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
    <div>
      <Header
        title="Анализ"
        description="Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом."
      />

      <div className={styles.hero}>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h1 className={`${styles.title} title-2`}>
              С каким подходом вы работаете?
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
              size="lg"
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

      <Footer />
    </div>
  );
}
