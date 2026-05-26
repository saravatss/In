"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

import { Button } from "@/components/atoms/Buttons/Button";
import { Input } from "@/components/atoms/Input/Input";
import { NavLink } from "@/components/atoms/Header/NavLink";

const FOOTER_LINKS = [
  { href: "/templates", label: "Ваш анализ" },
  { href: "/cases", label: "Кейсы" },
  { href: "/interviews", label: "Интервью" },
];

export function Footer({ className = "" }) {
  return (
    <footer className={`${styles.footer} ${className}`.trim()}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.subscribe}>
            <h2 className={`${styles.title} title-4`}>
              Чтобы не упустить обновления
              <br />
              и новые кейсы
            </h2>

            <div className={styles.form}>
              <Input
                type="email"
                placeholder="Электронная почта"
                className={styles.inputField}
              />
              <Button
                variant="muted"
                size="md"
                type="button"
                className={styles.submit}
              >
                Отправить
              </Button>
            </div>
          </div>

          <div className={styles.meta}>
            <p className={styles.copyright}>
              © 2026 Лайтин.
              <br />
              Все права защищены.
            </p>

            <nav className={styles.nav} aria-label="Навигация в подвале">
              {FOOTER_LINKS.map(({ href, label }) => (
                <NavLink key={href} href={href} className={styles.navLink}>
                  {label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.brand} aria-hidden="true">
          <Image
            className={styles.brandLogo}
            src="/images/logo_2.svg"
            alt=""
            width={1360}
            height={482}
            priority={false}
          />
        </div>
      </div>
    </footer>
  );
}
