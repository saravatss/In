import styles from "./Tag.module.css";

export function Tag({ children, bg, color }) {
  return (
    <span className={styles.tag}
      style={{
        backgroundColor: bg,
        color: color,
      }}>
      {children}
    </span>
  );
}