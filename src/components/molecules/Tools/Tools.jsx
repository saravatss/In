import styles from "./Tools.module.css";
import { ToolCard } from "@/components/molecules/Tools/ToolCard.jsx";

export function Tools() {
  return (
    <section className={styles.section}>
      <h2 className="title-4">Попробуй наши инструменты</h2>

      <div className={styles.grid}>
        <ToolCard bg="/images/bgMosaic1.svg">
          Новая заметка
        </ToolCard>

        <ToolCard bg="/images/bgMosaic2.svg">
          Выбрать шаблон
        </ToolCard>

        <ToolCard bg="/images/bgMosaic3.svg">
          Обзор шаблонов
        </ToolCard>

        <ToolCard bg="/images/bgMosaic4.svg">
          К супервизору
        </ToolCard>
      </div>
    </section>
  );
}