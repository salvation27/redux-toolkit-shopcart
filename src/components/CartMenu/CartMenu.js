import React,{useState} from 'react'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {BsCart2} from 'react-icons/bs'
import CartBlock from './CartBlock'
import './CartMenu.css'
import {calcTotalPrice} from '../../global'
import ItemsNumber  from './ItemsNumber'
import { useDispatch } from "react-redux";
import {deleteItemFromCart} from '../../redux/cart/reducer'

const CartMenu = () => {
  const dispatch = useDispatch();
  const items = useSelector((state)=>state.cart.itemsInCart)
  const totalPrise = calcTotalPrice(items)
  const [blockVisible,setBlockVisible] = useState(false)

  const handleDeleteCart = (e,id) => {
    e.stopPropagation();
    dispatch(deleteItemFromCart(id))
    setBlockVisible(true)
  }
  return (
    <div className='cart_menu dflex'
    onClick={()=>setBlockVisible(!blockVisible)}
    >
      <BsCart2 />
      <ItemsNumber quantity={items.length} />
      { totalPrise > 0 ?
        (
          <span>{totalPrise} ua</span>
        )
        : null
      }
      {
        blockVisible && <CartBlock items={items} handleDeleteCart={handleDeleteCart} /> 
      }
      
    </div>
  )
}

export default CartMenu