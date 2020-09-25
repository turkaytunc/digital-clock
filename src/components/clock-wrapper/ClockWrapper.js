import React, { useEffect, useState } from 'react';
import { time } from '../../util/time';

export const ClockWrapper = () => {
  const [second, setSecond] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setSecond(second + 1);
    }, 1000);
  }, [second]);

  return (
    <div className="clock-wrapper-div">
      Hello
      <div>time: {time().hour}</div>
    </div>
  );
};
