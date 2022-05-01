import React, { useEffect } from 'react'

import useHttp from '../../hooks/use-http'
import { getItemCollection } from '../../lib/api'

import AvailableItems from './AvailableItems'

import ItemsSummary from './ItemsSummary'
import ItemsLoading from '../UI/ItemsLoading'

import classes from './Items.module.css'

const Items = () => {
    const {
        sendRequest,
        status,
        data: loadedItems,
        error,
    } = useHttp(getItemCollection, true)

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    if (status === 'pending') {
        return (
            <div className={classes.items}>
                <ItemsLoading />
            </div>
        )
    }
    if (error) {
        return error
    }

    if (status === 'completed' && (!loadedItems || loadedItems.length === 0)) {
        return 'No Items Found'
    }

    return (
        <React.Fragment>
            <div className={classes.items}>
                <ItemsSummary />
                <AvailableItems items={loadedItems} />
            </div>
        </React.Fragment>
    )
}

export default Items
