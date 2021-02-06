import React, { FC, } from "react"
import { Typography, Box } from "@material-ui/core"

import { SelectFilter } from "../../common/select"

import { useAppContext } from "../../../context/app.context"

export const ItemFilter: FC = () => {
  
  const { switchFilter, filter } = useAppContext()

  return (
    <Box m='50px 0' display='flex' justifyContent='space-between' alignItems='center'>
      <Typography>Filter by</Typography>
      <SelectFilter 
        value={filter} 
        onChange={switchFilter} 
      />
    </Box>
  )
}