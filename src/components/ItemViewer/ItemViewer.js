import React from 'react'
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import ItemViewerContent from './ItemViewerContent'
import { BsArrowLeft } from 'react-icons/bs'

import classes from './ItemViewer.module.css'

import { DUMMY_ITEMS } from '../../data_items';

const ItemViewer = (props) => {

    const { id } = useParams()

    const navigate = useNavigate()

    const item = DUMMY_ITEMS.find(
        index => index.id === id
    )

    const hasItem = (item) ? true : false;


    return (
        <div className={classes['main-container']}>

            <Link to='/Shoply/' className={classes.link}>
                <div className={classes['link-content']}>
                    <BsArrowLeft className={classes.icon} onClick={() => navigate(-1)} />
                    <p className={classes['link-text']}> Back</p>
                </div>
            </Link>

            {!hasItem && (<h1>404</h1>)}
            {hasItem &&
                <ItemViewerContent item={item}/>
            }
        </div>

    )
}

export default ItemViewer