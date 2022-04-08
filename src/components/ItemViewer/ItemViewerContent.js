import React from 'react'

import classes from './ItemViewerContent.module.css'

const ItemViewerContent = (props) => {

    const { item } = props

    return (
        <div className={classes['main-content']}>
            <div className={classes.col1}>

                <div className={classes['variation-container']}>

                    <div className={classes['variation_items']}></div>
                    <div className={classes['variation_items']}></div>
                    <div className={classes['variation_items']}></div>

                </div>
                <div className={classes['picture-container']}>
                    <div className={classes.fill}>
                        <img src={item.image} alt="" srcset="" />
                    </div>
                </div>
            </div>

            <div className={classes.col2}>
                <h1>{item.name}</h1>
                <p>PHP {item.price}</p>
            </div>
        </div>
    )
}

export default ItemViewerContent