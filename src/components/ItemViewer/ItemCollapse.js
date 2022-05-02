import React from 'react'

import { Collapse } from 'antd'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import 'antd/dist/antd.min.css'

import classes from './ItemCollapse.module.css'

const ItemCollapse = (props) => {
    const { item } = props

    const { Panel } = Collapse

    const transformedPayment = []

    for (const key in item.payment) {
        const itemObj = {
            id: key,
            ...item.payment[key],
        }
        transformedPayment.push(itemObj)
    }

    const paymentMethod = transformedPayment.map((payment) => {
        return <li key={payment.id}>{payment.payment_method}</li>
    })

    return (
        <Collapse
            className={classes.collapse}
            accordion
            expandIconPosition={'right'}
            expandIcon={({ isActive }) =>
                isActive ? <AiOutlineMinus /> : <AiOutlinePlus />
            }
        >
            <Panel className={classes.panel} header="Product Info" key="1">
                <p className="sp subtitle">{item.description}</p>
            </Panel>
            <Panel className={classes.panel} header="Delivery" key="2">
                <p className="sp subtitle">
                    Expected Delivery Time: 3 - 7 days
                </p>
            </Panel>
            <Panel className={classes.panel} header="Payment Method" key="3">
                <ul>{paymentMethod}</ul>
            </Panel>
        </Collapse>
    )
}

export default ItemCollapse
