import { ActionListContainer } from './components/ActionList/ActionListContainer'
import style from './App.module.scss'

export function MainPage() {
  return (
    <div className={style.root}>
      <div className={style.title}>I'm currently</div>
      <ActionListContainer/>
    </div>
  )
}
