import styles from "./WhyUs.module.css";
import Image from "next/image";

export function FeatureCard({ children }) {
  return (
    <div className={styles.card}>
      <p className={`${styles.textCard} title-article`}>{children}</p>
      <Image
        className={styles.dot}
        src="/images/circle.svg"
        alt="circle"
        width={48}
        height={48}
        />
    </div>
  );
}