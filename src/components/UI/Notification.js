
import Alert from '@mui/material/Alert'

const Notification = (props) => {
    // let specialClasses = ''

    // if (props.status === 'error') {
    //     specialClasses = classes.error
    // }
    // if (props.status === 'success') {
    //     specialClasses = classes.success
    // }

    // const cssClasses = `${classes.notification} ${specialClasses}`

    return (
        <Alert severity="error">{props.message}</Alert>
        // <section className={cssClasses}>
        //     <h2>{props.title}</h2>
        //     <p>{props.message}</p>
        // </section>
    )
}

export default Notification
