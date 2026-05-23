import styles from "./Tools.module.css";
import { ToolCard } from "@/components/molecules/Tools/ToolCard.jsx";

export function Tools() {
  return (
    <section className={styles.section}>
      <h2 className={`${styles.title} title-4`}>
        <span className={styles.titleFull}>Почему именно наш сервис?</span>
        <span className={styles.titleShort}>Почему именно мы?</span>
      </h2>

      <div className={styles.grid}>
        <ToolCard>Существенно сокращает время анализа</ToolCard>
        <ToolCard>Легкая организация записей в разных форматах</ToolCard>
        <ToolCard>Ни одной мысли не ускользнет от вас</ToolCard>
        <ToolCard>Записывать заметки после сессии теперь удобно</ToolCard>
      </div>
    </section>
  );
}
