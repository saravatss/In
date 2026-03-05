"use client";

import Image from "next/image";
import styles from "./Footer.module.css";

import { Button } from "@/components/atoms/Buttons/Button";
import { Input } from "@/components/atoms/Input/Input";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        
        
        <div className={styles.top}>
          <h2 className="title-2">
            Чтобы не упустить обновления
            <br />
            и новые кейсы
          </h2>

          <div className={styles.subscribe}>
            <Input 

              placeholder="Электронная почта"
            />

            <Button variant="primary" size="sm">
              Подписаться
            </Button>
          </div>

        </div>

        <div className={styles.bottom}>
          <p className="navigation-text">
            © 2025 Лайтин. Все права защищены.
          </p>

          <Image
            src="/images/logo.svg"
            alt="In"
            width={46}
            height={48}
          />
        </div>

      </div>
    </footer>
  );
}