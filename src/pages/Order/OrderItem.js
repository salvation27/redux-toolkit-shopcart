import React from 'react'
import './OrderItem.css'
import { useDispatch } from 'react-redux'
import {deleteItemFromCart} from '../../redux/cart/reducer'
import OrderEmpty from './OrderEmpty'
const OrderItem = ({item,num}) => {

    const dispatch = useDispatch()

    const handleDeleteCart = (e,id) => {
        e.stopPropagation();
        dispatch(deleteItemFromCart(id))
      }
      if(!item) return <OrderEmpty />
  return (
    <div className='order_item dflex'>
        <span>{num}</span>
        <div className="order_item_foto">
            <img src={item.image} alt=''/>
        </div>
        <div className="order_item_title"><h3>{item.title}</h3></div>
        <div className="order_item_price">{item.price} гр.</div>
        <div className="order_item_delete" onClick={(e)=> handleDeleteCart(e,item.id)}>X</div>
    </div>
    
  )
}

export default OrderItem