import { createElement, useState } from 'react';
import { ActionList } from './ActionList'
import { nanoid } from 'nanoid'
import { IAction } from './types'

export function ActionListContainer() {
  const [actions, setActions] = useState<IAction[]>([
    {name: "Programming", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Gaming", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Reading", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Lecturing", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Youtube|Twitch", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Poker", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Devouring", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
    {name: "Discord", id: nanoid(), isActive: false, icon: "😶‍🌫️"},
  ])

  const stopAllActions = () => {
    setActions((prev) => ([...prev.map((a)=>({
      ...a,
      isActive: false,
    }))]))
  }

  const setActiveAction = (actionId: string) => {
    const action = actions.find(({id}) => actionId === id)
    if(action) {
      setActions((prev) => prev.map((a)=>{
        if(a.id === actionId){
          a.isActive = true;
        }
        return a
      }))
    }
  } 
  
  return createElement(ActionList, {
    actions,
    stopAllActions,
    setActiveAction,
  }
)
}
