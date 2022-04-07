import React, { Fragment, useContext, useState } from 'react'

import ContentItem from './ContentItem/ContentItem'

import CartContext from '../../context/cart-context'
import { IconContext } from 'react-icons'
import { BsFillCartCheckFill,BsCheckLg } from 'react-icons/bs'

import classes from './AvailableItems.module.css'
import Alert from '../UI/Alert'
import useDidMountEffect from '../../custom_hook/useDidMountEffect'

const DUMMY_ITEMS = [
    {
        id: '1',
        name: 'ORIGINAL BRAND TSHIRT',
        price: 299,
        image: 'https://i.pinimg.com/originals/62/98/b0/6298b026a65cf80bcf9dce061e9b79c9.png',
        star: 4,
        reviews: 12
    },
    {
        id: '2',
        name: 'LIMITED BRAND TSHIRT',
        price: 299,
        image: 'https://i.pinimg.com/originals/bd/ef/cb/bdefcbc72735f64db17f3250b1e64245.png',
        star: 5,
        reviews: 12
    },
    {
        id: '3',
        name: 'VALORANT PRINTED TSHIRT',
        price: 299,
        image: 'https://purepng.com/public/uploads/large/white-tshirt-n0j.png',
        star: 3,
        reviews: 12
    },
    {
        id: '4',
        name: 'LENI TSHIRT',
        price: 299,
        image: 'https://purepng.com/public/uploads/large/purepng.com-t-shirtclothingt-shirtfashion-dress-shirt-cloth-tshirt-631522326894filwv.png',
        star: 5,
        reviews: 12
    },
    {
        id: '5',
        name: 'NAMARCOS PRINTED TSHIRT',
        price: 499,
        image: 'https://purepng.com/public/uploads/large/purepng.com-red-t-shirtclothingred-t-shirtfashion-dress-shirt-cloth-tshirt-631522326799mcfdo.png',
        star: 1,
        reviews: 12
    },
    {
        id: '6',
        name: 'SPECIAL THEME TSHIRT',
        price: 499,
        image: 'https://purepng.com/public/uploads/large/purepng.com-men-t-shirtclothingmen-t-shirtfashion-dress-shirt-cloth-tshirt-631522326839zoswy.png',
        star: 5,
        reviews: 12
    },
    {
        id: '7',
        name: 'COOL TSHIRT',
        price: 799,
        image: 'https://purepng.com/public/uploads/large/purepng.com-grey-polo-shirtpolo-shirtcottongarmentsfebricgrey-142152639264876l00.png',
        star: 4,
        reviews: 12
    },
    {
        id: '8',
        name: 'AMAZING TSHIRT',
        price: 599,
        image: 'https://purepng.com/public/uploads/large/plain-black-polo-shirt-pab.png',
        star: 4,
        reviews: 12
    },
]

const AvailableItems = () => {

    const cartCtx = useContext(CartContext)

    const [showAlert, setShowAlert] = useState(false)

    const showAlertHandler = () => {
        setShowAlert(true)
    }

    const hideAlertHandler = () => {
        setShowAlert(false)
    }

    useDidMountEffect(()=> {
        showAlertHandler()
        // console.log('time star')
        const timer = setTimeout(()=> {
            hideAlertHandler()
        }, 2500)
        return ()=> {
            clearTimeout(timer)
            // console.log('cleared timeout')
        }
    }, [cartCtx])



    const itemsList = DUMMY_ITEMS.map((item) => (
        <ContentItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            image ={item.image}
            star={item.star}
            reviews={item.reviews}
        />
    ))

    return (
        <Fragment>

            {showAlert && 
            <Alert onClose={hideAlertHandler} label ='Added to Cart' icon={
                <IconContext.Provider value={{ color: "#7DCB98", size: '24px'}}>
                        <div>
                        <BsCheckLg/>
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