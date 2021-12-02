import React from 'react';
import Notification from '../Notification/Notification';
import s from './Statistics.module.css';

const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valuePositiveFeedback,
}) => {
  if (valueTotal) {
    return (
      <section>
        <h1 className={s.title}>Statistics</h1>
        <ul className={s.statisticValues}>
          <li className={s.value}>Good: {valueGood}</li>
          <li className={s.value}>Neutral: {valueNeutral}</li>
          <li className={s.value}>Bad: {valueBad}</li>
          <li className={s.value}>Total: {valueTotal}</li>
          <li className={s.value}>
            Positive Feedback: {valuePositiveFeedback}
          </li>
        </ul>
      </section>
    );
  } else {
    return <Notification message="There is no feedback" />;
  }
};

export default Statistics;
