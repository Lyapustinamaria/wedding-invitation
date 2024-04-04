import React from 'react';

const EventBlock = ({ date, title, text }) => {
  return (
    <div className="event-block">
      <div className="event-date">{date}</div>
      <div className="event-details">
        <h2 className="event-title">{title}</h2>
        <p className="event-text">{text}</p>
      </div>
    </div>
  );
};

export {EventBlock};
