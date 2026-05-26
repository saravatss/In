import Link from "next/link";
import styles from "./TemplateHeader.module.css";
import { Logo } from "@/components/atoms/Header/Logo";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import { Description } from "@/components/atoms/Header/Description";

export function TemplateHeader({ displayName, description }) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Logo />
        <Navigation />
      </div>

      <div className={styles.content}>
        <div className={styles.titleBlock}>
          <h1 className={`${styles.title} title-main`}>{displayName}</h1>
          <Link href="/templates/overview" className={styles.backLink}>
            <span>К обзору шаблонов</span>
            <img src="/images/arrowBack.svg" alt="" aria-hidden="true" />
          </Link>
        </div>

        <div className={styles.description}>
          <Description>{description}</Description>
        </div>
      </div>
    </header>
  );
}
