import React, { Fragment, useState } from 'react'
import { useParams } from "react-router-dom";

import Backdrop from '@mui/material/Backdrop';
import Alert from '../UI/Alert';
import { IconContext } from 'react-icons'
import {  BsCheckLg } from 'react-icons/bs'

import ItemViewerContent from './ItemViewerContent'

import classes from './ItemViewer.module.css'

// import CartContext from '../../context/cart-context'

// import Alert from '../UI/Alert'
// import useDidMountEffect from '../../custom_hook/useDidMountEffect'
// import { IconContext } from 'react-icons'
// import {  BsCheckLg } from 'react-icons/bs'

import { DUMMY_ITEMS } from '../../data_items';

const ItemViewer = (props) => {

    const { id } = useParams()

    const [showAlert, setShowAlert] = useState(false)

    const showAlertHandler = () => {
        setShowAlert(true)
    }
    const hideAlertHandler = () => {
        setShowAlert(false)
    }


    const item = DUMMY_ITEMS.find(
        index => index.id === id
    )

    const hasItem = (item) ? true : false;


    return (
        <Fragment>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={showAlert}
                onClick={hideAlertHandler}
            >
                <Alert label='Added to Cart' icon={
                    <IconContext.Provider value={{ color: "#7DCB98", size: '18px' }}>
                        <div>
                            <BsCheckLg />
                        </div>
                    </IconContext.Provider>}>
                </Alert>
            </Backdrop>
            <div className={classes['main-container']}>

                {!hasItem && (<h1>404</h1>)}
                {hasItem &&
                    <ItemViewerContent item={item} onShowAlert={showAlertHandler} onHideAlert={hideAlertHandler} />
                }
            </div>
        </Fragment>

    )
}

export default ItemViewer