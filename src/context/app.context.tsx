import React, { createContext, FC, useContext, useState, useCallback, ChangeEvent } from 'react'
import { IItem } from '../interfaces/IItem'

type Filter = 'all' | 'ran out' | 'have'

interface AppContextData {
  data: Array<IItem>
  filter: Filter
  addItem: (item: IItem) => void
  removeItem: (id: number) => void
  switchFilter: (event: ChangeEvent<{ value: unknown }>) => void
  getItem: (id: number) => IItem | undefined
}

const AppContext = createContext<AppContextData>({} as AppContextData)

const STORAGE = 'items'

export const Provider: FC = ({
  children
}) => {

  const [data, setData] = useState(() => {
    const items = localStorage.getItem(STORAGE)

    if(!items) return [] as Array<IItem>

    const parsedData = JSON.parse(items)

    return parsedData as Array<IItem>
  })

  const [filter, setFilter] = useState<Filter>('all')

  const addItem = (item: IItem) => {
    let data = []

    data = JSON.parse(localStorage.getItem(STORAGE) || '[]')

    data.push(item)

    localStorage.setItem(STORAGE, JSON.stringify(data))

    setData(data)
  }

  const removeItem = useCallback((id: number) => {
    const newData = data.filter(item => item.id !== id)

    localStorage.setItem(STORAGE, JSON.stringify(newData))

    setData(newData)
  }, [data])

  
  const getItem = useCallback((id: number) => {
    return data.find(item => item.id === id)
  }, [data])
  
  const switchFilter = useCallback((event: ChangeEvent<{ value: unknown }>) => setFilter(event.target.value as Filter), [])

  return (
    <AppContext.Provider
      value={{ 
        data,
        filter,
        addItem,
        removeItem,
        getItem,
        switchFilter
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useContext(AppContext)