import { FC, useEffect, useState } from "react"
import { RouteComponentProps, useHistory } from "react-router-dom"
import { Typography, Box, Button } from "@material-ui/core"

import { ItemCard } from "../components/common/item.card"
import { useAppContext } from "../context/app.context"

import { IItem } from "../interfaces/IItem"

interface MatchParams {
  id: string
}

interface DetailsProps extends RouteComponentProps<MatchParams> {}

export const Details: FC<DetailsProps> = ({
  match
}) => {

  const { id } = match.params

  const [item, setItem] = useState<IItem | undefined>({} as IItem)
  const { getItem } = useAppContext()

  const history = useHistory()

  useEffect(() => {    
    const data = getItem(parseInt(id))

    setItem(data)

  }, [id, getItem])

  if(!item) return <>Not found</>

  return (
    <>
      <Button 
        style={{ margin: 20 }} 
        color='primary' 
        onClick={() => history.goBack()}
        variant='outlined'
      >
        Go back
      </Button>
      <Box m={2}>
        <Typography>Details for {id}</Typography>
        <ItemCard 
          name={item.name} 
          status={item.status} 
          modified={item.modified} 
        />
    </Box>
    </>
  )
}