import { NavLink } from "../../atoms/Header/NavLink";
import styles from "./Navigation.module.css";

export function Navigation() {
  return (
    <nav className={styles.nav}>
      <NavLink href={`templates`}>Ваши мысли</NavLink>
      <NavLink href={`cases`}>Кейсы</NavLink>
      <NavLink href={`/`}>Интервью</NavLink>
    </nav>
  );
}