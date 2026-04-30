import { interviewData } from "@/data/interviews";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { Logo } from "@/components/atoms/Header/Logo";
import { Navigation } from "@/components/molecules/Navigation/Navigation";
import { Footer } from "@/components/organisms/Footer/Footer";

// Обязательно для статической генерации (fast builds & SEO)
export async function generateStaticParams() {
  return interviewData.map((item) => ({
    id: String(item.id),
  }));
}

export default async function InterviewPage({ params }) {
  const { id } = await params;
  const interview = interviewData.find((item) => item.id === Number(id));

  if (!interview) {
    notFound();
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.top}>
          <Logo />
          <Navigation />
        </div>

        <div className={styles.headerBlock}>
          <div className={styles.left}>
            <h1 className="title-1">{interview.title}</h1>
            <div className={styles.authorRow}>
              <span className={styles.specialist}>Специалист</span>
              <span className={styles.author}>{interview.author || "Автор"}</span>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.tags}>
              {interview.tags?.map((tag, i) => (
                <span key={i} className={styles.tag} style={{ background: tag.bg }}>
                  {tag.label}
                </span>
              ))}
            </div>
            <img
              src={interview.image}
              alt={interview.alt || interview.title}
              className={styles.previewImage}
            />
          </div>
        </div>

        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: interview.content }}
        />

        <div className={styles.footerRow}>
          <span className={styles.date}>{interview.date}</span>
          <div className={styles.share}>
            <span className={styles.shareText}>Поделиться</span>
            <img src="/images/share.svg" alt="Поделиться" className={styles.shareIcon} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
