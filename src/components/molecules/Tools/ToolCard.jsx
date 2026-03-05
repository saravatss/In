import styles from "./ToolCard.module.css";

export function ToolCard({ children, bg }) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span className={`${styles.textTool} text-nav`}>{children}</span>
    </div>
  );
}