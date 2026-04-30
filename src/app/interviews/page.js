"use client";

import { useState, useMemo } from "react";
import styles from "./page.module.css";
import { Header } from "@/components/organisms/Header/Header";
import { Filters } from "@/components/organisms/Filters/Filters";
import { Footer } from "@/components/organisms/Footer/Footer";
import Interview from "@/components/organisms/Interview/Interview";
import { interviewData } from "@/data/interviews";


export default function Interviews() {
  const [filters, setFilters] = useState({
    search: "",
    approach: "",
    type: "",
    age: "",
    gender: "",
    format: "",
    sort: ""
  });

  const filteredInterviews = useMemo(() => {
    let result = [...interviewData];

    if (filters.search) {
      result = result.filter(item =>
        item.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    Object.entries(filters).forEach(([key, value]) => {
      if (value && key !== "sort" && key !== "search") {
        result = result.filter(item => item[key] === value);
      }
    });

    if (filters.sort === "new") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    if (filters.sort === "old") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    return result;
  }, [filters]);

  return (
    <div>
      <Header
        title="Поставщик умных мыслей"
        description="Наша команда общается с терапевтами — профессионалами своего дела и позже рассказывает все самое вкусное и полезное вам!"
      />
      <Filters filters={filters} setFilters={setFilters} />

      {filteredInterviews.length > 0 ? (
        <Interview interviews={filteredInterviews} showTitle={false} />
      ) : (
        <>
          <div className={styles.emptyWrapper}>
            <h4 className="title-4">
              Кажется, по этим фильтрам ничего нет...
              <br />
              Поменяйте фильтры или посмотрите интервью ниже!
            </h4>
          </div>
          <div><Interview interviews={interviewData.slice(0, 3)} showTitle={false} /></div>
          <Interview interviews={interviewData.slice(0, 3)} showTitle={false} />
        </>
      )}

      <Footer />
    </div>
  );
}