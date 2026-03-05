import { Tag } from "@/components/atoms/Tag/Tag";
import styles from "./CaseCard.module.css";
import Link from "next/link";

export function CaseCard({ image, title, tags, bg, id }) {
  return (
    <Link href={`/cases/${id}`} className={styles.cardLink}>
      <article className={styles.card}>
        <img src={image} alt="" />

        <h3 className={`${styles.title} title-article`}>{title}</h3>

        <div className={styles.tags}>
        {tags.map((tag, index) => (
          <Tag
            key={index}
            bg={tag.bg}
          >
            {tag.label}
          </Tag>
        ))}
      </div>
    </article>
  </Link>
  );
}