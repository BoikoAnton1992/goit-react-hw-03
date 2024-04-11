import css from './Feedback.module.css';

export default function Feedback({
  feedback: { good, neutral, bad },
  total,
  positivePercentage,
}) {
  return (
    <div className={css.mainContainer}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
}
