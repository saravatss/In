"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import { Footer } from "@/components/organisms/Footer/Footer";
import { Header } from "@/components/organisms/Header/Header";
import { Button } from "@/components/atoms/Buttons/Button";

const approaches = [
  { id: "cbt", label: "КПТ" },
  { id: "gestalt", label: "Гештальт-терапия" },
  { id: "psycho", label: "Психоанализ" },
  { id: "exist", label: "Экзистенциальная терапия" },
  { id: "integrative", label: "Интегративная терапия" },
];

export default function Templates() {
   const router = useRouter();
    return (
        <div>
            <Header
            title={
              <>
                Мысли
              </>
            }
            description="Здесь вы можете быстро и легко подвести итог и проанализировать встречу с клиентом."
        />

            <div className={styles.hero}>
      <div className={styles.overlay}>
        <h1>С каким подходом вы работаете?</h1>

        <div className={styles.tags}>
          {approaches.map((item) => (
            <button
              key={item.id}
              onClick={() => router.push(`/templates/${item.id}`)}
              className={styles.tag}
            >
              {item.label}
            </button>
          ))}
        </div>
      

      <div className={styles.buttonWrapper}>
          <Button
            variant="primary"
            size="sm"
            icon="/images/arrowFullR.svg"
            onClick={() => router.push("/templates/cbt")}
          >
            Прочитать больше
          </Button>
        </div>

      </div>
    </div>


        <Footer />
        </div>
    )
}