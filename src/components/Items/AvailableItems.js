import React, { Fragment } from 'react'

import ContentItem from './ContentItem/ContentItem'

import classes from './AvailableItems.module.css'

const AvailableItems = (props) => {
    const itemsList = props.items.map((item) => {
        return <ContentItem key={item.id} item={item} />
    })

    return (
        <Fragment>
            <section className={classes.items}>
                <ul>{itemsList}</ul>
            </section>
        </Fragment>
    )
}

export default AvailableItems
