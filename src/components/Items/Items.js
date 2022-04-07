import React, { Fragment } from 'react'
import AvailableItems from './AvailableItems'

import ItemsSummary from './ItemsSummary'

const Items = () => {
  return (
      <Fragment>
          <ItemsSummary/>
          <AvailableItems/>
      </Fragment>
  )
}

export default Items