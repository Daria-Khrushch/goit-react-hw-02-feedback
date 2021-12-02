import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ onButtonGood, onButtonNeutral, onButtonBad }) => (
  <ul className={s.buttons}>
    <li>
      <button type="button" onClick={onButtonGood} className={s.button}>
        Good
      </button>
    </li>
    <li>
      <button type="button" onClick={onButtonNeutral} className={s.button}>
        Neutral
      </button>
    </li>
    <li>
      <button type="button" onClick={onButtonBad} className={s.button}>
        Bad
      </button>
    </li>
  </ul>
);

export default FeedbackOptions;
