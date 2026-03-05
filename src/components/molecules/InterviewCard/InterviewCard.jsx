import styles from "./InterviewCard.module.css";
import { Button } from "@/components/atoms/Buttons/Button";

export default function InterviewCard({
  title,
  description,
  image,
  alt,
  reverse = false,
}) {
  return (
    <article
      className={`${styles.card} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.content}>
        <h3 className="title-4">{title}</h3>
        <p className="text-main">{description}</p>
        <Button  variant="secondary" size="sm">Читать</Button>
      </div>

      <div className={styles.imageWrapper}>
        <img src={image} alt={alt} />
      </div>
    </article>
  );
}