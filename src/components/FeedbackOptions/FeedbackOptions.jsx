import PropTypes from 'prop-types';
import React from 'react';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleFeedback, options }) => (
  <ul className={s.buttons}>
    {options.map(name => {
      return (
        <li key={name}>
          <button
            type="button"
            name={name}
            onClick={() => handleFeedback(name)}
            className={s.button}
          >
            {name}
          </button>
        </li>
      );
    })}
  </ul>
);

FeedbackOptions.propTypes = {
  handleFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
