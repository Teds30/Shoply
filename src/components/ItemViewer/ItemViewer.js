import React from 'react'
import { useParams } from "react-router-dom";

import ItemViewerContent from './ItemViewerContent'

import classes from './ItemViewer.module.css'

import { DUMMY_ITEMS } from '../../data_items';

const ItemViewer = (props) => {

    const { id } = useParams()


    const item = DUMMY_ITEMS.find(
        index => index.id === id
    )

    const hasItem = (item) ? true : false;


    return (
        <div className={classes['main-container']}>

            

            {!hasItem && (<h1>404</h1>)}
            {hasItem &&
                <ItemViewerContent item={item}/>
            }
        </div>

    )
}

export default ItemViewer