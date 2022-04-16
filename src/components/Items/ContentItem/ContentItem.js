import React from 'react'
import { Link } from "react-router-dom";

import { IconContext } from 'react-icons'

import ItemStar from './ItemStar'

import classes from './ContentItem.module.css'

const ContentItem = (props) => {

    const toLink = `/Shoply/items/${props.item.id}`

    return (
        <li className={classes.item}>
            <div className={classes['picture_container']}>

                <Link to={toLink}
                    className={classes.linkStyle}>
                    <div className={classes.fill}>
                        <img src={props.item.image} alt="item_image" />
                    </div>
                </Link>
            </div>
            <p className={classes.name}>{props.item.name}</p>
            {<div
                className={classes.reviewContainer}>
                <span className={classes.star}>{
                    <IconContext.Provider value={{ color: "#403E57" }}>
                        <div>
                            <ItemStar star={props.item.total_star} />
                        </div>
                    </IconContext.Provider>}</span>
                <span className={classes.reviews}>{props.item.reviews.length} reviews</span>
            </div>

            }
            <p className={classes.price}>PHP {props.item.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
        </li>
    )
}

export default ContentItem