import React from 'react'

import { Collapse } from 'antd';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import 'antd/dist/antd.min.css';

import classes from './ItemCollapse.module.css'

const ItemCollapse = (props) => {

    const { item } = props
    
    const { Panel } = Collapse;
    
    const paymentMethod = item.payment.map((payment) => {
        return (
            <li key={payment.payment_id}>{payment.payment_method}</li>
        )
    })

    return (
        <Collapse className={classes.collapse} accordion expandIconPosition={'right'} expandIcon={({ isActive }) => isActive ? <AiOutlineMinus /> : <AiOutlinePlus />}>
            <Panel className={classes.panel} header="Product Info" key="1">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, recusandae! </p>
            </Panel>
            <Panel className={classes.panel} header="Description" key="2">
                <p>{item.description}</p>
            </Panel>
            <Panel className={classes.panel} header="Delivery" key="3">
                <ul>
                    {paymentMethod}
                </ul>
            </Panel>
        </Collapse>
    )
}

export default ItemCollapse