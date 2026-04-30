import styles from "./InterviewCard.module.css";
import { Button } from "@/components/atoms/Buttons/Button";
import Link from "next/link";

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
        <div className={styles.content}>
          <h3 className="title-4">{title}</h3>
          <p className="text-main">{description}</p>
          <Button variant="secondary" size="sm">Читать</Button>
        </div>
        <div className={styles.imageWrapper}>
          <img src={image} alt={alt} />
        </div>
      </article>
    </Link>
  );
}