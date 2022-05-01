import React, { useEffect } from 'react'

import { IoLocationOutline } from 'react-icons/io5'

import classes from './DeliveryAddress.module.css'

const user_addresses = [
    {
        id: '1',
        name: 'Teddy Marc Enaje',
        contact: '09662177561',
        address: {
            street: 'Prieto Street',
            barangay: 'Balud Del Sur',
            city: 'Gubat',
            province: 'Sorsogon',
            zip_code: '4710',
        },
    },
]

const DeliveryAddress = (props) => {
    const { onSetBuyer } = props

    useEffect(() => {
        onSetBuyer(user_addresses[0])
    }, [onSetBuyer])

    return (
        <div className={classes['da-container']}>
            <div className={classes['da-card']}>
                <div className={classes['da-title-container']}>
                    <p className={`${classes['da-title']} fw-semibold`}>
                        <span>
                            <IoLocationOutline
                                color="#1799CF"
                                style={{ marginTop: '-3px' }}
                            />
                        </span>
                        Delivery Address
                    </p>
                    <button>
                        <p>Edit</p>
                    </button>
                </div>

                {/* <hr className=" m-0 mb-3 pt-0" /> */}
                <p className={`sp pt-2`}>
                    {user_addresses[0].name} | {user_addresses[0].contact}
                </p>
                <p className={`sp`}>
                    {user_addresses[0].address.street},{' '}
                    {user_addresses[0].address.barangay}
                </p>
                <p className={`sp`}>
                    {user_addresses[0].address.city},{' '}
                    {user_addresses[0].address.province}
                </p>
            </div>
        </div>
    )
}

export default DeliveryAddress
