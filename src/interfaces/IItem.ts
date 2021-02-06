export interface IItem {
  name: string
  modified: string
  status: Status
  priority?: number
  id?: number
}

export type Status = 'ran out' | 'have'