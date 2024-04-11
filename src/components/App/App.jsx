import { useEffect, useState } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

export default function App() {
  const [typesFeedback, setTypesFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedbacks');
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('feedbacks', JSON.stringify(typesFeedback));
  }, [typesFeedback]);

  const { good, neutral, bad } = typesFeedback;
  const totalFeedback = good + neutral + bad;

  const positivePercentage =
    totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    const updatedTypesFeedback = { ...typesFeedback };
    updatedTypesFeedback[feedbackType] += 1;
    setTypesFeedback(updatedTypesFeedback);
  };

  const resetFeedback = () => {
    setTypesFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        onButton={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={typesFeedback}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      )}
    </>
  );
}
