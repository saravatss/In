"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./TemplateOverview.module.css";
import { Button, BUTTON_ARROW_ICON } from "@/components/atoms/Buttons/Button";

const APPROACH_TABS = [
  { id: "cbt", label: "КПТ" },
  { id: "gestalt", label: "Гештальт-терапия" },
  { id: "psycho", label: "Психоанализ" },
  { id: "exist", label: "Экзистенциальная терапия" },
  { id: "integrative", label: "Интегративная терапия" },
];

export function TemplateOverview({ templates }) {
  const router = useRouter();
  const tabs = APPROACH_TABS.filter((tab) =>
    templates.some((template) => template.id === tab.id)
  );

  const [activeApproachId, setActiveApproachId] = useState(
    tabs[0]?.id ?? templates[0]?.id
  );
  const [expandedSectionId, setExpandedSectionId] = useState(null);

  const activeTemplate =
    templates.find((template) => template.id === activeApproachId) ??
    templates[0];

  useEffect(() => {
    setExpandedSectionId(null);
  }, [activeApproachId]);

  if (!activeTemplate) {
    return null;
  }

  const handleSectionToggle = (sectionId) => {
    setExpandedSectionId((current) =>
      current === sectionId ? null : sectionId
    );
  };

  return (
    <div className={styles.root}>
      <div className={styles.tabsBar}>
        <div className={styles.tabs} role="tablist" aria-label="Подход">
          {tabs.map((tab) => {
            const isActive = activeApproachId === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={isActive ? styles.tabActive : styles.tab}
                onClick={() => setActiveApproachId(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div
        className={styles.sections}
        role="tabpanel"
        aria-label={activeTemplate.displayName}
      >
        {activeTemplate.sections.map((section) => {
          const isExpanded = expandedSectionId === section.id;
          const description = section.overview || section.subtitle || "";

          return (
            <article
              key={section.id}
              className={`${styles.sectionCard} ${
                isExpanded ? styles.sectionCardExpanded : ""
              }`}
            >
              <button
                type="button"
                className={`${styles.sectionHeader} ${
                  isExpanded ? styles.sectionHeaderActive : ""
                }`}
                onClick={() => handleSectionToggle(section.id)}
                aria-expanded={isExpanded}
                aria-controls={`section-${section.id}`}
              >
                <span className={styles.sectionTitle}>{section.title}</span>
                <img
                  src={BUTTON_ARROW_ICON}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.sectionArrow} ${
                    isExpanded ? styles.sectionArrowUp : ""
                  }`}
                />
              </button>

              {isExpanded && description ? (
                <div
                  id={`section-${section.id}`}
                  className={styles.sectionBody}
                >
                  <p className={styles.sectionText}>{description}</p>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    icon={BUTTON_ARROW_ICON}
                    className={styles.goButton}
                    onClick={() =>
                      router.push(
                        `/templates/${activeApproachId}?step=${section.id}`
                      )
                    }
                  >
                    Перейти
                  </Button>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
