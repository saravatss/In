import Link from "next/link";
import styles from "./Button.module.css";

export const BUTTON_ARROW_ICON = "/images/arrowHorizontal.svg";

export function Button({
  children,
  variant = "primary",
  size = "lg",
  icon,
  iconPosition = "right",
  className = "",
  disabled = false,
  href,
  ...props
}) {
  const classes = `
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${icon ? styles.withIcon : ""}
        ${className}
      `.trim();

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <img src={icon} alt="" className={styles.icon} aria-hidden="true" />
      )}

      <span className={`${styles.textButton} text-nav`}>{children}</span>

      {icon && iconPosition === "right" && (
        <img src={icon} alt="" className={styles.icon} aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      {...props}
    >
      {content}
    </button>
  );
}
