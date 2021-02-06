import React, { ChangeEvent, memo } from "react"

import { TextField } from "@material-ui/core"

interface IInputProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = memo<IInputProps>(({
  onChange
}) =><TextField onChange={onChange} id="standard-basic" label="Enter text here" variant='outlined' fullWidth />)