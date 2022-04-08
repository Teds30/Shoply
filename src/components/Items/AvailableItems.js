import React, { Fragment, useContext, useState, useEffect } from 'react'

import ContentItem from './ContentItem/ContentItem'

import CartContext from '../../context/cart-context'
import { IconContext } from 'react-icons'
import { BsFillCartCheckFill, BsCheckLg } from 'react-icons/bs'

import classes from './AvailableItems.module.css'
import Alert from '../UI/Alert'
import useDidMountEffect from '../../custom_hook/useDidMountEffect'

import { DUMMY_ITEMS } from '../../data_items'



const AvailableItems = () => {

    const cartCtx = useContext(CartContext)

    const [showAlert, setShowAlert] = useState(false)

    const showAlertHandler = () => {
        setShowAlert(true)
    }

    const hideAlertHandler = () => {
        setShowAlert(false)
    }

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useDidMountEffect(() => {
        showAlertHandler()
        // console.log('time star')
        const timer = setTimeout(() => {
            hideAlertHandler()
        }, 2500)
        return () => {
            clearTimeout(timer)
            // console.log('cleared timeout')
        }
    }, [cartCtx])


    const itemsList = DUMMY_ITEMS.map((item) => {
        return (
            <ContentItem
                key={item.id}
                item={item}
            />
        )
    })

    return (
        <Fragment>

            {showAlert &&
                <Alert onClose={hideAlertHandler} label='Added to Cart' icon={
                    <IconContext.Provider value={{ color: "#7DCB98", size: '24px' }}>
                        <div>
                            <BsCheckLg />
                        </div>
                    </IconContext.Provider>}>
                </Alert>}
            <section className={classes.items}>
                <ul>
                    {itemsList}
                </ul>
            </section>
        </Fragment>
    )
}

export default AvailableItems