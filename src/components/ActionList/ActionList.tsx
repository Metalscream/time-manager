import { IActionList } from './types'
import { Action } from '../Action'
import style from './ActionList.module.scss'

export function ActionList({actions, stopAllActions, setActiveAction}: IActionList) {
  return (
    <div className={style.root}>
      {actions && actions.map(({id, name, isActive, icon}) => (
        <div className={style.action}>
          <Action
          key={id}
          id={id}
          icon={icon}
          name={name}
          onClick={()=>{}}
          isActive={isActive}
          stopAllActions={stopAllActions}
          setActiveAction={setActiveAction}
          />
        </div>
      ))}
    </div>
  )
}