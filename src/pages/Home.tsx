import { FC } from "react"
import { Box } from '@material-ui/core'
import { useHistory } from "react-router-dom"

import { ItemCard } from "../components/common/item.card"
import { ItemCreate } from '../components/List/creation/item.create'
import { ItemFilter } from "../components/List/filter/item.filter"

import { useAppContext } from "../context/app.context"

import { useFilter } from "../hooks/useFilter"

export const Home: FC = () => {

  const { data, removeItem, filter } = useAppContext()
  const filtred  = useFilter(data, filter)

  const history = useHistory()

  return (
    <Box m={2}>
      <ItemCreate />
      <ItemFilter />
      {
        filtred.map(item => 
          <ItemCard 
            key={item.id} 
            name={item.name} 
            modified={item.modified} 
            status={item.status} 
            onDeleteClick={() => removeItem(item.id!)} 
            onCardClick={() => history.push(`/item/${item.id}`)}
          />
        )
      }  
    </Box>
  )
}