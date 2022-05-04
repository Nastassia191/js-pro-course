import React, { useEffect, useState } from "react";

import "./Timer.scss";
import { ReactComponent as TimerIcon } from "../assets/time.svg";
import useTime from "../hooks/useTime";




// const getTime = () => (new Date()).toTimeString().substring(0, 8); // берет время в минутах и сикундах и записывант в строку
//const getTime = () => Date.now().toString(); //,берет время начиная с какогото года


const SHOW_TIME = "showTime";
const getShowTime = (): boolean => localStorage.getItem(SHOW_TIME) === "true";
//const defaultShowTime: boolean = !!localStorage.getItem(SHOW_TIME);

const Timer: React.FC = () => {

  // const [time, setTime] = useState<String>(getTime());
  const [showTime, setShowTime] = useState<boolean>(getShowTime);



  const time = useTime();
  useEffect(() => {
    localStorage.setItem(SHOW_TIME, showTime.toString());
  }, [showTime]);

  const handleClick = () => {
    setShowTime((prevValue) => !prevValue);
  }

  return (
    <div className="timer-conteiner">
      {showTime &&
        <div className="time">
          Time: {time}
        </div>
      }
      <TimerIcon
        onClick={handleClick}
        className="icon-button" />
    </div>
  )
}

export default Timer;