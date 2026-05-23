import styles from "./NavLink.module.css";
import Link from "next/link";

export function NavLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`${styles.navLink} text-nav ${className}`.trim()}
    >
      {children}
    </Link>
  );
}