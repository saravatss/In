"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import { Header } from "@/components/organisms/Header/Header";
import { Footer } from "@/components/organisms/Footer/Footer";
import { TemplateLayout } from "@/components/organisms/TemplateLayout/TemplateLayout";
import { getTemplateByType } from "@/data/templates";

export default function TemplatePage() {
  const { type } = useParams();
  const template = getTemplateByType(type);

  const [formData, setFormData] = useState({});

  const handleChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <>
      <Header
        title={template.title}
        description={template.description}
      />

      <TemplateLayout
        sections={template.sections}
        formData={formData}
        onChange={handleChange}
      />

      <Footer />
    </>
  );
}