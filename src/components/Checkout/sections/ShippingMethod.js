import React from 'react'

import classes from './ShippingMethod.module.css'
import Shipping from './shipping_methods/Shipping'

const SHIPPING_COURIER = [
    {
        id: '1',
        name: 'J&T Express',
        subtitle: 'Delivery: 3-7 days',
        logo: 'https://dvow0vltefbxy.cloudfront.net/assets/landing/carriers/jt-express-fe0ee0a80f8d329bcf64e529514fe340ddc082d1243f44781e48d714d0862664.png',
    },
    {
        id: '2',
        name: 'LBC Delivery',
        subtitle: 'Delivery: 3-7 days',
        logo: 'https://www.phil4you.nl/wp-content/uploads/2016/08/lbc_logo.png',
    },
]

const ShippingMethod = (props) => {
    const selectShippingHandler = (courier) => {
        props.onSelect(courier)
    }

    const shippingList = SHIPPING_COURIER.map((courier) => {
        return (
            <Shipping
                key={courier.id}
                id={courier.id}
                logo={courier.logo}
                title={courier.name}
                subtitle={courier.subtitle}
                isShippingMethod={
                    props.shippingMethod.id.toString() === courier.id.toString()
                }
                onSelect={selectShippingHandler}
            />
        )
    })

    return (
        <div className={classes['sm-container']}>
            <h5 className="mb-3">Shipping Method</h5>

            {!props.isValid && props.isSubmitted && (
                <div className={classes.error}>
                    <p>Please select shipping method</p>
                </div>
            )}
            <div className={classes['sm-card-container']}>{shippingList}</div>
        </div>
    )
}

export default ShippingMethod
