import styles from "./TemplateLayout.module.css";
import { SectionBlock } from "@/components/molecules/SectionBlock/SectionBlock";
import { QuickNavigation } from "@/components/molecules/QuickNavigation/QuickNavigation";
import { Button } from "@/components/atoms/Buttons/Button";
import { exportToPdf } from "@/data/exportToPDF";


export function TemplateLayout({ sections, formData, onChange }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {sections.map((section) => (
          <SectionBlock
            key={section.id}
            id={section.id}
            title={section.title}
            placeholder={section.placeholder}
            value={formData[section.id] || ""}
            onChange={onChange}
          />
        ))}
      </div>

      <div className={styles.right}>
        <QuickNavigation sections={sections} />

        <Button 
            variant="primary"  
            size="md" 
            onClick={() => exportToPdf("Шаблон сессии", sections, formData)}
            > 
                Экспортировать
        </Button>
      </div>
    </div>
  );
}