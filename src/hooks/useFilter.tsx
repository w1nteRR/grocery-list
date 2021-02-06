import { IItem } from "../interfaces/IItem"

export const useFilter = (data: Array<IItem>, filterVal: string) => {
  if(filterVal === 'all') return data

  return data.filter(item => item.status === filterVal)
}