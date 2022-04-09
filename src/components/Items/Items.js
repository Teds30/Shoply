import React from 'react'
import AvailableItems from './AvailableItems'

import ItemsSummary from './ItemsSummary'

import classes from './Items.module.css'

const Items = () => {
  return (
      <div className={classes.items}>
          <ItemsSummary/>
          <AvailableItems/>
      </div>
  )
}

export default Items