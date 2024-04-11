import css from './Options.module.css';

export default function Options({ onButton, total, reset }) {
  return (
    <div className={css.mainContainer}>
      <button type="button" onClick={() => onButton('good')}>
        Good
      </button>
      <button type="button" onClick={() => onButton('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => onButton('bad')}>
        Bad
      </button>
      {total !== 0 && <button onClick={reset}>Reset</button>}
    </div>
  );
}
