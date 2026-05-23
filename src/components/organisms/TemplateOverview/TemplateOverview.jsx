"use client";

import { useEffect, useState } from "react";
import styles from "./TemplateOverview.module.css";

const APPROACH_TABS = [
  { id: "cbt", label: "КПТ" },
  { id: "gestalt", label: "Гештальт-терапия" },
  { id: "psycho", label: "Психоанализ" },
  { id: "exist", label: "Экзистенциальная терапия" },
  { id: "integrative", label: "Интегративная терапия" },
];

const SECTION_ARROW = "/images/arrowHorizontal.svg";

export function TemplateOverview({ templates }) {
  const availableTabs = APPROACH_TABS.filter((tab) =>
    templates.some((template) => template.id === tab.id)
  );

  const [activeApproachId, setActiveApproachId] = useState(
    availableTabs[0]?.id ?? templates[0]?.id
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
          {availableTabs.map((tab) => {
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
          const description =
            section.overviewDescription || section.subtitle || "";

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
                aria-controls={`overview-section-${section.id}`}
              >
                <span className={styles.sectionTitle}>{section.title}</span>
                <img
                  src={SECTION_ARROW}
                  alt=""
                  aria-hidden="true"
                  className={`${styles.sectionArrow} ${
                    isExpanded ? styles.sectionArrowUp : ""
                  }`}
                />
              </button>

              {isExpanded && description ? (
                <div
                  id={`overview-section-${section.id}`}
                  className={styles.sectionBody}
                >
                  <p className={styles.sectionText}>{description}</p>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
    </div>
  );
}
