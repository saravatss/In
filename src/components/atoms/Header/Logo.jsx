import styles from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className={styles.link} aria-label="На главную">
      <span className={styles.logoWrap}>
        <Image
          className={styles.logoWord}
          src="/images/logo_lightin.svg"
          alt=""
          width={117}
          height={42}
          priority
        />
        <Image
          className={styles.logoMark}
          src="/images/logo_dot.svg"
          alt=""
          width={20}
          height={11}
          priority
        />
      </span>
    </Link>
  );
}
