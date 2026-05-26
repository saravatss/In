"use client";

import { usePathname } from "next/navigation";
import { NavLink } from "../../atoms/Header/NavLink";
import styles from "./Navigation.module.css";

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <NavLink
        href="/templates"
        className={pathname.startsWith("/templates") ? styles.active : ""}
      >
        Ваш анализ
      </NavLink>
      <NavLink
        href="/cases"
        className={pathname.startsWith("/cases") ? styles.active : ""}
      >
        Кейсы
      </NavLink>
      <NavLink
        href="/interviews"
        className={pathname.startsWith("/interviews") ? styles.active : ""}
      >
        Интервью
      </NavLink>
    </nav>
  );
}
