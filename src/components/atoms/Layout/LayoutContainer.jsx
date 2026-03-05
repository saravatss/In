import styles from "./LayoutContainer.module.css";

export function LayoutContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}