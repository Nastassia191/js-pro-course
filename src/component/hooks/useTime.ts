import React, { useState, useEffect } from 'react';

const getTime = () => (new Date()).toTimeString().substring(0, 8); // берет время в минутах и сикундах и записывант в строку

const useTime = () => {

  const [time, setTime] = useState<String>(getTime());

  useEffect(() => {

    let intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => {
      clearInterval(intervalId); // очистка интервала
    }
  }, []);

  return time;
}

export default useTime;