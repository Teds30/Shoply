import React, { Fragment } from 'react'

import { useParams } from "react-router-dom";

import classes from './ItemViewer.module.css'

import { DUMMY_ITEMS } from '../../data_items';

const ItemViewer = (props) => {

    const { id } = useParams()

    const item = DUMMY_ITEMS.find(
        index => index.id === id
    )
    
    const hasItem = (item) ? true : false;
    
    return (
        <Fragment>
        {!hasItem && (<h1>404</h1>)}
        {hasItem && 
        <div className={classes.content}>
            <h1>{item.name}</h1>
            {/* <h1>{props.name}</h1> */}
        </div>
        }
        </Fragment>
        
    )
}

export default ItemViewer