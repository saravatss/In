import { WhyUs } from "@/components/molecules/WhyUs/WhyUs";
import { Header } from "@/components/organisms/Header/Header.jsx";
import { Tools } from "@/components/molecules/Tools/Tools";
import { CasesSection } from "@/components/organisms/CasesSection/CaseSection";
import { Footer } from "@/components/organisms/Footer/Footer";
import Interview from "@/components/organisms/Interview/Interview";
import { casesData } from "@/data/cases";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <Header
          title="Ускоряем рутину, упрощаем жизнь"
          description="Запись и анализ сессий с нами стал намного проще!"
        />
        <WhyUs />
      </div>

      <div className={styles.content}>
        <Tools />

        <div className={styles.media}>
          <CasesSection
            title="Самые популярные кейсы"
            cases={casesData.slice(0, 6)}
            showButton
          />

          <Interview
            interviews={[
              {
                id: 1,
                title: "Мария Бризова о становлении психолога в кризис",
                description:
                  "Опытный терапевт рассказывает, как первые сложные клиенты формируют профессиональный взгляд.",
                image: "/images/interviews/interview1.png",
                alt: "Мария Бризова",
              },
              {
                id: 2,
                title: "Ирина Захарова о границах в терапии",
                description:
                  "Психотерапевт со стажем в 10 лет делится лайфхаками: как расставлять личные рамки, чтобы не выгорать от чужих историй. Реальные кейсы и простые шаги для баланса в работе.",
                image: "/images/interviews/interview2.png",
                alt: "Ирина Захарова",
              },
            ]}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
