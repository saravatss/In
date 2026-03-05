"use client";

import styles from "./Input.module.css";

export function Input({
  placeholder,
  type = "text",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} navigation-text`}
      {...props}
    />
  );
}