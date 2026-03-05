import styles from "./WhyUs.module.css";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";

export function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.titleBlock}>
        <h2 className={`${styles.titleBlock} title-2`}>
          Почему именно наш сервис?
        </h2>
        <Image
        className={styles.arrow}
        src="/images/arrowRight.svg"
        alt="arrow"
        width={31}
        height={32}
        />
      </div>

      <div className={styles.grid}>
        <FeatureCard>
          Существенно сокращает время анализа
        </FeatureCard>

        <FeatureCard>
          Легкая организация
        </FeatureCard>

        <FeatureCard>
          Ни одной мысли не ускользнет от вас
        </FeatureCard>

        <FeatureCard>
          Структурирование заметок после сессии становится приятным
        </FeatureCard>
      </div>
    </section>
  );
}