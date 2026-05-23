import styles from "./ToolCard.module.css";

export function ToolCard({ children }) {
  return (
    <div className={styles.card}>
      <span className={styles.textTool}>{children}</span>
    </div>
  );
}
