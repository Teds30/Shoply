import React from 'react'
import { useNavigate } from 'react-router-dom'

import ExpiredSvg from '../../../../assets/undraw_warning_cyit.svg'
import PrimaryButton from '../../../UI/PrimaryButton'

import classes from './PageExpired.module.css'

const PageExpired = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/cart')
    }

    return (
        <div className={classes.container}>
            <div className={classes.picture}>
                <img src={ExpiredSvg} alt="SVG" />
            </div>
            <h2>Page Expired</h2>
            <p className="subtitle">
                Try Checking out items from your cart again.
            </p>
            <div className={classes.btn}>
                <PrimaryButton onClick={handleClick}>My Cart</PrimaryButton>
            </div>
        </div>
    )
}

export default PageExpired
