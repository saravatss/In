import { casesData } from "@/data/cases";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Logo } from "@/components/atoms/Header/Logo";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import { Footer } from "@/components/organisms/Footer/Footer";
import { ShareFooter } from "@/components/molecules/ShareFooter/ShareFooter";

export default async function CasePage({ params }) {
  const { id } = await params;

  const article = casesData.find((item) => item.id === Number(id));

  if (!article) return notFound();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Logo />
          <Navigation />
        </div>

        <div className={styles.headerBlock}>
          <div className={styles.left}>
            <h1 className="title-1">{article.title}</h1>

            <div className={styles.authorRow}>
              <span className={styles.specialist}>Специалист</span>
              <span className={styles.author}>{article.author}</span>
            </div>
          </div>

          <div className={styles.right}>
            <div className={styles.tags}>
              {article.tags.map((tag, i) => (
                <span
                  key={i}
                  className={styles.tag}
                  style={{ background: tag.bg }}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <img
              src={article.image}
              alt={article.title}
              className={styles.previewImage}
            />
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <ShareFooter date={article.date} sharePath={`/cases/${id}`} />
      </div>

      <Footer />
    </div>
  );
}
