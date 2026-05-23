import listingStyles from "@/styles/listingPage.module.css";
import styles from "./page.module.css";
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import { TemplateOverview } from "@/components/organisms/TemplateOverview/TemplateOverview";
import { templates } from "@/data/templates";

export default function TemplatesOverviewPage() {
  return (
    <div className={listingStyles.page}>
      <div className={`${listingStyles.listing} ${styles.listing}`}>
        <Header
          title="Обзор шаблонов"
          description="Выберите интересующий шаблон и узнайте о каждом пункте подробнее"
        />

        <TemplateOverview templates={templates} />
      </div>

      <Footer />
    </div>
  );
}
