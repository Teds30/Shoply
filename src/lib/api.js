const FIREBASE_DOMAIN = {
    main: 'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/',
    cart: 'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
    shop: 'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/shop.json',
    collections:
        'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/shop/collections.json',
    item_collection1:
        'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/shop/collections/item_collection1',
}

const { item_collection1 } = FIREBASE_DOMAIN

export const getItemCollection = async () => {
    const response = await fetch(`${item_collection1}.json`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch items!')
    }

    const transformedData = []
    for (const key in data) {
        const itemObj = {
            id: key,
            ...data[key],
        }
        transformedData.push(itemObj)
    }

    return transformedData
}

export const getItem = async (itemId) => {
    const response = await fetch(`${item_collection1}/${itemId}.json`)
    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch this item!')
    }

    const loadedItem = {
        id: itemId,
        ...data
    }

    return loadedItem
}


export const addToItemCollection = async (requestData) => {
    const response = await fetch(`${item_collection1}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData),
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(
            data.message || 'Could not create new item to this collection.'
        )
    }

    return null
}
