import React, { FC } from "react"
import { Box, Button, Typography } from "@material-ui/core"

import { IItem } from "../../interfaces/IItem"

interface ItemCardProps extends IItem {
  onDeleteClick?: () => void
  onCardClick?: () => void
}

export const ItemCard: FC<ItemCardProps> = ({
  name,
  modified,
  status,
  onDeleteClick,
  onCardClick
}) => 
  <Box 
    m={2} 
    p={2} 
    boxShadow='0 0 2px silver' 
    borderRadius='10px'
    flexDirection='column'
    display='flex'
    style={{
      cursor: 'pointer'
    }}
  >
    <Typography variant="h6" component="h2" gutterBottom>
      {name}
    </Typography>
    <Typography variant="caption" gutterBottom>
      Status: {status}
    </Typography>
    <Typography variant="caption" gutterBottom>
      Last modified: {modified}
    </Typography>
    <Button onClick={onDeleteClick} color='secondary'>Delete</Button>
    <Button onClick={onCardClick} color='primary'>More</Button>
  </Box>
