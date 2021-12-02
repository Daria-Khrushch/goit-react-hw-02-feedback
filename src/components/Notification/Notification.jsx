import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={s.notification}>{message}</p>
    </div>
  );
};

export default Notification;
