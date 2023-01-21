import React from 'react'
import { Link } from 'react-router-dom'

import Rating from '@mui/material/Rating'

import classes from './ContentItem.module.css'

const ContentItem = (props) => {
    const toLink = `/Shoply/items/${props.item.id}`

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
            <p className={classes.name}>{props.item.name}</p>
            {
                <div className={classes.reviewContainer}>
                    <span className={classes.star}>
                        {
                            <Rating
                                name="half-rating-read"
                                defaultValue={props.item.total_star}
                                precision={0.5}
                                style={{
                                    color: '#403E57',
                                    fontSize: '1.1em',
                                }}
                                readOnly
                            />
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
