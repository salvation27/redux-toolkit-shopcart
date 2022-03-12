import React from 'react'
import './CartItem.css'
const CartItem = ({item,index,handleDeleteCart}) => {
  return (
    <div>{index}. {item.title}    <span className='del_price'>{item.price}гр.</span> <span className='del_cart' onClick={(e)=>handleDeleteCart(e,item.id)}>x</span> </div>
  )
}

export default CartItem