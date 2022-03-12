import React from 'react'
import './ItemsNumber.css'
const ItemsNumber = ({quantity}) => {
  return (
    <div className='item_number'>{quantity}</div>
  )
}

export default ItemsNumber