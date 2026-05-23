import styles from "./WhyUs.module.css";
import { FeatureCard } from "./FeatureCard";
import Image from "next/image";

const WIDGET_BG_WARM = "/images/whyUsWidgetBgB.png";
const WIDGET_BG_COOL = "/images/whyUsWidgetBgA.png";

const ROUTE_NEW_NOTE = "/templates/gestalt";
const ROUTE_SUPERVISOR = "/templates/gestalt?step=supervisor";

export function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={styles.titleBlock}>
        <h2 className={`${styles.title} title-2`}>
          <span className={styles.titleLine}>Попробуй наши</span>
          <span className={styles.titleLine}>инструменты</span>
        </h2>
        <Image
          className={styles.arrow}
          src="/images/arrowRight.svg"
          alt=""
          width={31}
          height={32}
        />
      </div>

      <div className={styles.grid}>
        <FeatureCard bg={WIDGET_BG_WARM} bgVariant="bgNewNote" href={ROUTE_NEW_NOTE}>
          Новая заметка
        </FeatureCard>
        <FeatureCard bg={WIDGET_BG_COOL} bgVariant="bgPickTemplate" href="/templates">
          Выбрать шаблон
        </FeatureCard>
        <FeatureCard bg={WIDGET_BG_COOL} bgVariant="bgOverview" href="/templates/overview">
          Обзор шаблонов
        </FeatureCard>
        <FeatureCard bg={WIDGET_BG_WARM} bgVariant="bgSupervisor" href={ROUTE_SUPERVISOR}>
          К супервизору
        </FeatureCard>
      </div>
    </section>
  );
}
