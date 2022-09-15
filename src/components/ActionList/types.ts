export interface IActionList {
  actions: IAction[];
  stopAllActions: () => void;
  setActiveAction: (id: string) => void;
}

export interface IAction {
  name: string;
  id: string;
  isActive: boolean;
  icon: string
}