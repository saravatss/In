import styles from "./Description.module.css";

export function Description({ children }) {
  return <p className={`${styles.headerText} text-nav`}>{children}</p>;
}

