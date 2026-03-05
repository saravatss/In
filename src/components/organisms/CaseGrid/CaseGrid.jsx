import styles from "./CaseGrid.module.css";
import { CaseCard } from "@/components/molecules/CaseCard/CaseCard.jsx";

export function CaseGrid({ cases }) {
  return (
    <div className={styles.grid}>
      {cases.map((item) => (
        <CaseCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          tags={item.tags}
        />
      ))}
    </div>
  );
}