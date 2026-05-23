"use client";

import styles from "./Input.module.css";

export function Input({
  placeholder,
  type = "text",
  className = "",
  ...props
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`${styles.input} text-nav ${className}`.trim()}
      {...props}
    />
  );
}