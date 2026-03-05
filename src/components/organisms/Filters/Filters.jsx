"use client";

import { useState } from "react";
import styles from "./Filters.module.css";

const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    if (value === option) {
      onChange(""); // повторный клик — сброс
    } else {
      onChange(option);
    }
    setOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button
        type="button"
        className={styles.dropdownButton}
        onClick={() => setOpen(!open)}
      >
        <span>{value || label}</span>
        <img
          src="/images/arrowDown.svg"
          alt="arrow"
          className={`${styles.arrow} ${open ? styles.rotate : ""}`}
        />
      </button>

      {open && (
        <div className={styles.dropdownMenu}>
          {options.map((option) => (
            <div
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export function Filters({ filters, setFilters }) {
  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({
      search: "",
      approach: "",
      type: "",
      age: "",
      gender: "",
      format: "",
      sort: "",
    });
  };

  const hasActiveFilters = Object.values(filters).some((v) => v !== "");

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
          <img
            src="/images/search.svg"
            alt="search"
            className={styles.searchIcon}
          />

          <input
            type="text"
            placeholder="Поиск"
            value={filters.search || ""}
            onChange={(e) => handleChange("search", e.target.value)}
            className={styles.searchInput}
          />
        </div>

      <div className={styles.filtersRow}>
        <Dropdown
          label="Подход"
          value={filters.approach}
          onChange={(val) => handleChange("approach", val)}
          options={[
            "КПТ",
            "Гештальт-терапия",
            "Психоанализ",
            "Экзистенциальная терапия",
            "Интегративная терапия",
          ]}
        />

        <Dropdown
          label="Тип"
          value={filters.type}
          onChange={(val) => handleChange("type", val)}
          options={[
            "Эмоциональные состояния",
            "Отношения, взаимодействия",
            "Личностное развитие",
            "Учеба и работа",
            "Процесс психотерапии",
            "Тревога и страхи",
            "Тело, психосоматика",
          ]}
        />

        <Dropdown
          label="Возраст"
          value={filters.age}
          onChange={(val) => handleChange("age", val)}
          options={["Детство", "Подросток", "Взрослый", "Пожилой"]}
        />

        <Dropdown
          label="Пол"
          value={filters.gender}
          onChange={(val) => handleChange("gender", val)}
          options={["Женский", "Мужской"]}
        />

        <Dropdown
          label="Формат"
          value={filters.format}
          onChange={(val) => handleChange("format", val)}
          options={["Недавняя", "Длительная", "Первая сессия"]}
        />

        {hasActiveFilters && (
          <button
            type="button"
            className={styles.clearFilters}
            onClick={resetFilters}
          >
            Очистить фильтры
          </button>
        )}

        <Dropdown
          label="Сортировать по"
          value={filters.sort}
          onChange={(val) => handleChange("sort", val)}
          options={["Сначала новые", "Сначала старые"]}
        />
      </div>
    </div>
  );
}