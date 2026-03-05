import { Button } from "@/components/atoms/Buttons/Button";
import styles from "./CaseSection.module.css";
import { CaseGrid } from "@/components/organisms/CaseGrid/CaseGrid";

export function CasesSection({
  title,
  cases,
  showButton = false,
}) {
  return (
    <section className={styles.section}>
      {title && (
        <h2 className={`${styles.heading} title-3`}>
          {title}
        </h2>
      )}

      <CaseGrid cases={cases} />

      {showButton && (
        <div className={styles.buttonWrapper}>
          <Button
            variant="primary"
            size="lg"
            icon="/images/arrowFullR.svg"
          >
            Прочитать больше
          </Button>
        </div>
      )}
    </section>
  );
}