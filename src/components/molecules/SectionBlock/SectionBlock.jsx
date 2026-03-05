import styles from "./SectionBlock.module.css";

export function SectionBlock({
  id,
  title,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div id={id} className={styles.block}>
      <h2>{title}</h2>

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className={styles.textarea}
      />
    </div>
  );
}