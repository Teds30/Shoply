import React, { Fragment } from 'react'

import ContentItem from './ContentItem/ContentItem'

import classes from './AvailableItems.module.css'

import { DUMMY_ITEMS } from '../../data_items'

const AvailableItems = () => {
    // const [items, setItems] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [httpError, setHttpError] = useState()
  
    // useEffect(() => {
    //   const fetchItems = async () => {
    //     const response = await fetch('https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/ShopItems.json')
    //     const responseData = await response.json()
  
    //     if(!response.ok) {
    //       throw new Error('Something went wrong!')
    //     }
  
    //     const loadedItems = []
  
    //     for (const key in responseData) {
    //         loadedItems.push({
    //         id: key,
    //         name: responseData[key].name,
    //         description: responseData[key].description,
    //         image: responseData[key].image,
    //         price: responseData[key].price,
    //         previews: responseData[key].previews,
    //         payment: responseData[key].payment,
    //         sizes: responseData[key].sizes,
    //         colors: responseData[key].colors,
    //         total_star: responseData[key].total_star,
    //         reviews: responseData[key].reviews,
    //       })
    //     }
  
    //     setItems(loadedItems)
    //     setIsLoading(false)
    //   }
  
    //     fetchItems().catch((error) => {
    //       setIsLoading(false)
    //       setHttpError(error.message)
    //     })
  
    // }, [])
  
    // if (isLoading) {
    //   return (
    //     <section className={classes.MealsLoading}>
    //       <p>Loading...</p>
    //     </section>
    //   )
    // }
  
    // if(httpError) {
    //   return (
    //     <section className={classes.MealsError}>
    //       <p>{httpError}</p>
    //     </section>
    //   )
    // }

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
            <section className={classes.items}>
                <ul>
                    {itemsList}
                </ul>
            </section>
        </Fragment>
    )
}

export default AvailableItems