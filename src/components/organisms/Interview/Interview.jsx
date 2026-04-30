import styles from "./Interview.module.css";
import InterviewCard from "@/components/molecules/InterviewCard/InterviewCard";

export default function Interview({ interviews, showTitle = true }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {showTitle && (
          <h2 className={`${styles.titleIn} title-2`}>
            Здесь умные люди делятся умными мыслями!
          </h2>
        )}
        <div className={styles.list}>
          {interviews.map((item, index) => (
            <InterviewCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
              alt={item.alt}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}