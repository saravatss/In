import Link from "next/link";
import styles from "./WhyUs.module.css";
import Image from "next/image";

export function FeatureCard({ children, bg, bgVariant, href }) {
  const cardClassName = [
    styles.card,
    bgVariant ? styles[bgVariant] : "",
    href ? styles.cardLink : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <p className={styles.textCard}>{children}</p>
      <Image
        className={styles.dot}
        src="/images/whyUsWidgetIcon.svg"
        alt=""
        width={48}
        height={48}
      />
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={cardClassName}
        style={{ backgroundImage: `url(${bg})` }}
      >
        {content}
      </Link>
    );
  }

  return (
    <div className={cardClassName} style={{ backgroundImage: `url(${bg})` }}>
      {content}
    </div>
  );
}
