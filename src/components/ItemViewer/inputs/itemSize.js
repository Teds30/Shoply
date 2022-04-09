import React from 'react'

import Chip from '@mui/material/Chip';

import classes from './ItemSize.module.css'

const itemSizes = (props) => {

  const {size} = props
  
  const chipClass = (props.selected === size.size_id) ? classes['chip__selected'] : classes.chip

  return (
      <Chip className={chipClass} label={size.size} variant="outlined" onClick={props.selectSize.bind(null, size.size_id)} clickable />
  )
}

export default itemSizes