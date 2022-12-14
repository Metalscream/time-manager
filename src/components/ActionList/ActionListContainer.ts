import { createElement, useState } from 'react';
import { ActionList } from './ActionList'
import { nanoid } from 'nanoid'
import { IAction } from './types'

export function ActionListContainer() {
  const [actions, setActions] = useState<IAction[]>([
    {name: "Programming", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Gaming", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Reading", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Lecturing", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Youtube|Twitch", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Poker", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Devouring", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
    {name: "Discord", id: nanoid(), isActive: false, icon: "πΆβπ«οΈ"},
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
