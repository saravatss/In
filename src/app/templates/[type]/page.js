"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import styles from "./page.module.css";
import { TemplateHeader } from "@/components/organisms/TemplateHeader/TemplateHeader";
import { Footer } from "@/components/organisms/Footer/Footer";
import { TemplateLayout } from "@/components/organisms/TemplateLayout/TemplateLayout";
import { getTemplateByType } from "@/data/templates";

function createEmptyFormData(sections) {
  return Object.fromEntries(sections.map((section) => [section.id, ""]));
}

function TemplatePageContent() {
  const { type } = useParams();
  const searchParams = useSearchParams();
  const initialStepId = searchParams.get("step");
  const template = getTemplateByType(type);

  const initialFormData = useMemo(
    () => createEmptyFormData(template.sections),
    [template]
  );

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    setFormData(createEmptyFormData(template.sections));
  }, [type, template.sections]);

  const handleChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value ?? "",
    }));
  };

  return (
    <div className={styles.page}>
      <TemplateHeader
        displayName={template.displayName}
        description={template.description}
      />

      <TemplateLayout
        displayName={template.displayName}
        sections={template.sections}
        formData={formData}
        onChange={handleChange}
        initialStepId={initialStepId}
      />

      <Footer />
    </div>
  );
}

export default function TemplatePage() {
  return (
    <Suspense fallback={null}>
      <TemplatePageContent />
    </Suspense>
  );
}
