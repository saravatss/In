"use client";

import styles from "./page.module.css";
import { useState, useMemo } from "react";
import { Header } from "@/components/organisms/Header/Header";
import { casesData } from "@/data/cases";
import { CaseGrid } from "@/components/organisms/CaseGrid/CaseGrid";
import { Footer } from "@/components/organisms/Footer/Footer";
import { Filters } from "@/components/organisms/Filters/Filters";


export default function CasesPage() {

   const [filters, setFilters] = useState({
    search: "",
    approach: "",
    type: "",
    age: "",
    gender: "",
    format: "",
    sort: ""
  });

  const filteredCases = useMemo(() => {
    let result = [...casesData];

    
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
      title="Статьи с кейсами"
      description="Собранные совместно с экспертами случаи из практики, с которыми могут возникнуть трудности."
    />
    <Filters filters={filters} setFilters={setFilters} />
    
    {filteredCases.length > 0 ? (
      <CaseGrid cases={filteredCases} />
    ) : (
      <>
        <div className={styles.emptyWrapper}>
          <h4 className="title-4">
            Кажется, по этим фильтрам ничего нет...
            <br />
            Поменяйте фильтры или посмотрите кейсы ниже!
          </h4>
        </div>

        <CaseGrid cases={casesData.slice(0, 3)} />
      </>
    )}


    <Footer />
    </div>
  );
}