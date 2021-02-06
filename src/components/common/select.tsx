import { FormControl, Select, MenuItem, InputLabel } from "@material-ui/core"
import React, { ChangeEvent, memo } from "react"

interface ISelectProps {
  value: string | unknown
  onChange: (event: ChangeEvent<{ value: unknown }>) => void
}

export const SelectFilter = memo<ISelectProps>(({
  value,
  onChange
}) => {
  return (
  <FormControl variant="outlined">
    <InputLabel>Filter</InputLabel>
    <Select
      value={value}
      onChange={onChange}
      label="Filter"
    >
      <MenuItem value="all">all</MenuItem>
      <MenuItem value='have'>have</MenuItem>
      <MenuItem value='ran out'>ran out</MenuItem>
    </Select>
  </FormControl>
  )
})