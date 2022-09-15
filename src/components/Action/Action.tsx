import style from './Action.module.scss'

interface IActionProps {
  name: string;
  id: string;
  hours: number;
  minutes: number;
  time: number;
  icon: string;
  activeCheck: () => boolean;
  onClick: () => void;
  handleOnCardClick: () => void;
  formatTime: (hours: number, minutes: number, time: number) => string;
}

export function Action({name, time, minutes, hours, icon, onClick, handleOnCardClick, formatTime, activeCheck}: IActionProps) {
  return (
    <div className={`${activeCheck() && style.active} ${style.root} `} onClick={handleOnCardClick}>
      <div className={style.action}>
        <div>{icon}</div>
        <h2>{name}</h2>
      </div>
      <div className={style.timeSpent}>{formatTime(hours, minutes, time)}</div>
    </div>
  )
}
