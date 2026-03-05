import styles from "./Logo.module.css";
import Image from "next/image";
import Link from "next/link";


export function Logo() {
  return (
     <Link href="/">
      <Image
        className={styles.logo}
        src="/images/logo.svg"
        alt="IN logo"
        width={48}
        height={46}
        priority
      />
    </Link>
  );
}