import React from 'react'
import { useNavigate } from 'react-router-dom'

import Confirmed from '../../../../assets/undraw_confirmed_re_sef7.svg'
import PrimaryButton from '../../../UI/PrimaryButton'

import classes from './PlacedOrder.module.css'

const PageExpired = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/Shoply/shop')
    }

    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img src={Confirmed} alt="SVG" />
            </div>
            <h2>Order Confirmed</h2>
            <p className="subtitle">Thank you for ordering!</p>
            <div className={classes.btn}>
                <PrimaryButton onClick={handleClick}>
                    Continue Shopping
                </PrimaryButton>
            </div>
        </div>
    )
}

export default PageExpired
