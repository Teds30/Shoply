import React from 'react'

import { AiOutlineStar,AiFillStar } from 'react-icons/ai'

const ItemStar = (props) => {

    
    let content = []
    for(var i = 0; i < 5; i++) {
        if(i < props.star){
            content.push(<AiFillStar key={i}/>)
        } else {
            content.push(<AiOutlineStar key={i}/>)
        }
    }

    return (
        <div>{content}</div>
    )
}

export default ItemStar