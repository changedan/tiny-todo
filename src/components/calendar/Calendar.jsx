import React, { useEffect, useState } from 'react';
import './index.scss';

export default function Calendar() {
  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  let date = new Date(); // 현재 날짜
  let utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  let kst = 9 * 60 * 60 * 1000;
  let today = new Date(utc + kst);

  let thisMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate(),
  );

  useEffect(() => {
    setYear(thisMonth.getFullYear());
    setMonth(thisMonth.getMonth() + 1);
    setDay(thisMonth.getDate());
  }, []);

  return (
    <div className="calendar">
      <span className="day">{day}</span>
      <span className="month">{month}</span>
      <span className="year">{year}</span>
    </div>
  );
}
