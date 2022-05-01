import { uiActions } from '../slices/ui-slice'
import { cartActions } from '../slices/cart'

export const fetchCartData = (props) => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json'
            )

            if (!response.ok) {
                throw new Error('Could not fetch data!')
            }

            const data = await response.json()
            return data
        }

        try {
            const cartData = await fetchData()
            dispatch(
                cartActions.replaceCart({
                    items: cartData.items || [],
                    totalAmount: cartData.totalAmount || 0,
                })
            )
            props.isLoading()
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            )
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'pending',
                title: 'sending...',
                message: 'Sending cart data!',
            })
        )

        const sendRequest = async () => {
            // console.log('PUTTING')
            const response = await fetch(
                'https://shoply-25605-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        items: cart.items,
                        totalAmount: cart.totalAmount,
                    }),
                }
            )
            // console.log('END PUT')

            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }

        try {
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            )
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            )
        }
    }
}
