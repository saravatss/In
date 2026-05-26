"use client";

import { useState } from "react";
import styles from "./Filters.module.css";

const FILTER_FIELDS = [
  {
    key: "approach",
    label: "Подход",
    options: [
      "КПТ",
      "Гештальт-терапия",
      "Психоанализ",
      "Экзистенциальная терапия",
      "Интегративная терапия",
    ],
  },
  {
    key: "type",
    label: "Тип",
    options: [
      "Эмоциональные состояния",
      "Отношения, взаимодействия",
      "Личностное развитие",
      "Учеба и работа",
      "Процесс психотерапии",
      "Тревога и страхи",
      "Тело, психосоматика",
    ],
  },
  {
    key: "age",
    label: "Возраст",
    options: ["Детство", "Подросток", "Взрослый", "Пожилой"],
  },
  {
    key: "gender",
    label: "Пол",
    options: ["Женский", "Мужской"],
  },
  {
    key: "format",
    label: "Формат",
    options: ["Недавняя", "Длительная", "Первая сессия"],
  },
];

const SORT_FIELD = {
  key: "sort",
  label: "Сортировать по",
  options: ["Сначала новые", "Сначала старые"],
};

const defaultFilters = {
  search: "",
  approach: "",
  type: "",
  age: "",
  gender: "",
  format: "",
  sort: "",
};

function Dropdown({ label, options, value, onChange, fullWidth = false, withIcon = false }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (option) => {
    if (value === option) {
      onChange("");
    } else {
      onChange(option);
    }
    setOpen(false);
  };

  return (
    <div
      className={`${styles.dropdown} ${fullWidth ? styles.dropdownFull : ""}`}
    >
      <button
        type="button"
        className={`${styles.dropdownButton} ${withIcon ? styles.dropdownButtonWithIcon : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {withIcon ? (
          <img
            src="/images/filter.svg"
            alt=""
            className={styles.filterIcon}
            aria-hidden="true"
          />
        ) : null}
        <span className={styles.dropdownLabel}>{value || label}</span>
        <img
          src="/images/arrowDown.svg"
          alt=""
          className={`${styles.arrow} ${open ? styles.rotate : ""}`}
          aria-hidden="true"
        />
      </button>

      {open ? (
        <div className={styles.dropdownMenu} role="listbox">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              className={styles.dropdownItem}
              onClick={() => handleSelect(option)}
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function Filters({ filters, setFilters, mobile = false }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleChange = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFilters = () => {
    setFilters({ ...defaultFilters });
    setMobileOpen(false);
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== "");

  const renderDropdown = (field, options = {}) => (
    <Dropdown
      key={field.key}
      label={field.label}
      value={filters[field.key]}
      onChange={(value) => handleChange(field.key, value)}
      options={field.options}
      {...options}
    />
  );

  return (
    <div
      className={`${styles.wrapper} ${mobile ? styles.wrapperMobile : ""}`}
    >
      <div className={styles.searchWrapper}>
        <img
          src="/images/search.svg"
          alt=""
          className={styles.searchIcon}
          aria-hidden="true"
        />
        <input
          type="search"
          placeholder="Поиск"
          value={filters.search || ""}
          onChange={(event) => handleChange("search", event.target.value)}
          className={styles.searchInput}
        />
      </div>

      <div className={styles.filtersRow}>
        {FILTER_FIELDS.map((field) => renderDropdown(field))}

        {hasActiveFilters ? (
          <button
            type="button"
            className={styles.clearFilters}
            onClick={resetFilters}
          >
            Очистить фильтры
          </button>
        ) : null}

        {renderDropdown(SORT_FIELD)}
      </div>

      {mobile ? (
        <>
          {!mobileOpen ? (
            <div className={styles.collapsed}>
              {renderDropdown(SORT_FIELD, { withIcon: true })}
              <button
                type="button"
                className={styles.toggle}
                onClick={() => setMobileOpen(true)}
              >
                Все фильтры
              </button>
            </div>
          ) : (
            <div className={styles.expanded}>
              <div className={styles.expandedList}>
                {FILTER_FIELDS.map((field) =>
                  renderDropdown(field, { fullWidth: true })
                )}
                {renderDropdown(SORT_FIELD, { fullWidth: true })}
              </div>

              <div className={styles.expandedFooter}>
                {hasActiveFilters ? (
                  <button
                    type="button"
                    className={styles.clearMobile}
                    onClick={resetFilters}
                  >
                    Очистить фильтры
                  </button>
                ) : null}
                <button
                  type="button"
                  className={styles.toggle}
                  onClick={() => setMobileOpen(false)}
                >
                  Скрыть фильтры
                </button>
              </div>
            </div>
          )}
        </>
      ) : null}
    </div>
  );
}
