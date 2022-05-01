import React from 'react'
import { Link } from 'react-router-dom'

import { IconContext } from 'react-icons'

import ItemStar from './ItemStar'

import classes from './ContentItem.module.css'

const ContentItem = (props) => {
    const toLink = `/items/${props.item.id}`

    const reviewsCount = Object.keys(props.item.reviews).length

    return (
        <li className={classes.item}>
            <div className={classes['picture_container']}>
                <Link to={toLink} className={classes.linkStyle}>
                    <div className={classes.fill}>
                        <img src={props.item.image} alt="item_image" />
                    </div>
                </Link>
            </div>
            <br />
            <p className={classes.name}>{props.item.name}</p>
            {
                <div className={classes.reviewContainer}>
                    <span className={classes.star}>
                        {
                            <IconContext.Provider value={{ color: '#403E57' }}>
                                <div>
                                    <ItemStar star={props.item.total_star} />
                                </div>
                            </IconContext.Provider>
                        }
                    </span>
                    <span className={classes.reviews}>
                        {reviewsCount} reviews
                    </span>
                </div>
            }
            <p className={classes.price}>
                PHP{' '}
                {props.item.price.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                })}
            </p>
        </li>
    )
}

export default ContentItem
