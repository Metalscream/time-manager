import { createElement, useState, useEffect } from 'react';
import { Action } from './Action'

export interface IActionContainerProps {
  name: string;
  id: string;
  isActive: boolean;
  icon: string;
  onClick: () => void;
  stopAllActions: () => void;
  setActiveAction: (id: string) => void;
}

export function ActionContainer({name, id, isActive, icon, onClick, stopAllActions, setActiveAction}: IActionContainerProps) {

  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [time, setTime] = useState<number>(0)

  const handleUpdateTime = () => setTime((prevTime) => prevTime + 1);

  const handleOnCardClick = () => {
    stopAllActions()
    setActiveAction(id)
  }

  const transformSecondsToMinutes = (time: number) => {
    if(time >= 60) {
      setTime(0)
      setMinutes(minutes + 1)
    }
  }

  const transformMinutesToHours = (minutes: number) => {
    if(minutes >= 60) {
      setMinutes(0)
      setHours(hours + 1)
    }
  }

  const validateSeconds = (time: number) => {
    if(time < 10) {
      return ("0" + time)
    }
    return time
  }

  const validateMinutes = (minute: number) => {
    if(minute < 10) {
      return ("0" + minute)
    }
    return minute
  }

  const formatTime = (hours: number, minutes: number, time: number) => {
    transformMinutesToHours(minutes)
    transformSecondsToMinutes(time)
    return (hours + " : " + validateMinutes(minutes) + " : " + validateSeconds(time))
  }

  const activeCheck = () => {
    if(isActive) {
      return true
    }
    return false
  }

  useEffect(() => {
    if (isActive) {
    const timer = setInterval(handleUpdateTime, 1000);
  
    return () => clearInterval(timer);
    }
  }, [isActive]);

  return createElement(Action, {
      time,
      minutes,
      hours,
      name,
      id,
      icon,
      onClick,
      handleOnCardClick,
      formatTime,
      activeCheck,
    }
  )
}
