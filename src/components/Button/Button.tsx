import {IButton} from './types'

export function Button({children, onClick}: IButton) {
  return (
    <button onClick={onClick}>{children}</button>
  )
}