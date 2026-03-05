import styles from "./Button.module.css";

export function Button({
  children,
  variant = "primary",
  size = "lg",
  icon,
  iconPosition = "right",
  fullWidth = false,
  ...props
}) {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
      `}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <img src={icon} alt="" className={styles.icon} />
      )}

      <span className={`${styles.textButton} text-nav`}>{children}</span>

      {icon && iconPosition === "right" && (
        <img src={icon} alt="" className={styles.icon} />
      )}
    </button>
  );
}