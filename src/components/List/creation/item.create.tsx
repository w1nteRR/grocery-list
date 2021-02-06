import React, { FC, useState, useCallback, ChangeEvent } from "react"
import { Button, RadioGroup, FormControlLabel, Radio } from "@material-ui/core"

import { Input } from "../../common/text.input"

import { useAppContext } from "../../../context/app.context"

import type { Status } from '../../../interfaces/IItem'

export const ItemCreate: FC = () => {

  const [inputVal, setInputVal] = useState('')
  const [statusVal, setStatusVal] = useState<Status>('have')

  const { addItem } = useAppContext()
  
  return (
    <>
      <Input 
        onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => setInputVal(event.target.value), [])} 
      />
      <RadioGroup 
        aria-label="Status" 
        value={statusVal} 
        onChange={useCallback((event: ChangeEvent<HTMLInputElement>) => setStatusVal(event.target.value as Status), [])}
      >
        <FormControlLabel 
          value="have" 
          control={<Radio />} 
          label="Have" 
        />
        <FormControlLabel 
          value="ran out" 
          control={<Radio />} 
          label="Ran out" 
        />
      </RadioGroup>
      <Button 
        variant="outlined" 
        color="primary" 
        style={{ margin: '10px 0' }} 
        fullWidth
        onClick={() => addItem({
          name: inputVal,
          status: statusVal,
          modified: new Date().toISOString(),
          priority: 1,
          id: Date.now()
        })}
      >
        Add new item
      </Button>
    </>
  )
}