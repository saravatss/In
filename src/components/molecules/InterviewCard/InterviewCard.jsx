import styles from "./InterviewCard.module.css";
import Link from "next/link";

function InterviewPortrait({ image, alt }) {
  return (
    <div className={styles.portrait}>
      <span className={styles.circleOuter} />
      <span className={styles.circleInner} />
      <img className={styles.photo} src={image} alt={alt} />
    </div>
  );
}

export default function InterviewCard({
  id,
  title,
  description,
  image,
  alt,
  reverse = false,
}) {
  return (
    <Link href={`/interviews/${id}`} className={styles.cardLink}>
      <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
        <InterviewPortrait image={image} alt={alt} />

        <div className={styles.content}>
          <h3 className={`${styles.cardTitle} title-4`}>{title}</h3>

          <div className={styles.textBlock}>
            <p className={`${styles.description} text-main`}>{description}</p>
            <span className={styles.readButton}>Читать</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
