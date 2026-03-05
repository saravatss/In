import { Button } from "@/components/atoms/Buttons/Button";
import styles from "./QuickNavigation.module.css";


export function QuickNavigation({ sections }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.wrapper}>
    <div className={styles.title}>Быстрая навигация</div>

      {sections.map((section) => (

      <Button 
        variant="primary"  
        size="md" 
        key={section.id} 
        className={styles.link} 
        onClick={() => scrollTo(section.id)}>
            {section.title}
      </Button>
      ))}
    </div>
  );
}