import css from './SearchBox.module.css';

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.mainContainer}>
      <p className={css.label}>Finds contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
