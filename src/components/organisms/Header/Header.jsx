import styles from "./Header.module.css";
import { Logo } from "../../atoms/Header/Logo";
import { Navigation } from "../../molecules/Navigation/Navigation";
import { Description } from "../../atoms/Header/Description";

export function Header({ title, description }) {
  return (
    <header className={styles.header}>
      <div className={styles.top}>
        <Logo />
        <Navigation />
      </div>

      <div className={styles.content}>
        <h1 className="title-main">{title}</h1>

        <Description>
          {description}
        </Description>
      </div>
    </header>
  );
}