import React from 'react'
import './CartBlock.css'
import {calcTotalPrice} from '../../global'
import CartItem from './CartItem'
import {Link} from 'react-router-dom'

const CartBlock = ({items,handleDeleteCart}) => {
  return (
    <div className='cart_block'>
       <div className="cart_block_list">
       {
        items.length > 0 ? items.map((item,i)=><CartItem index={i+1} key={item.id} item={item} handleDeleteCart={handleDeleteCart} />) : 'Cart empty'
        }
       </div>
       {
           items.length > 0 ? 
           <div className='cart_block_arange'>
           <hr />
           <div className="cart_block_total_price">
            <div>Всего в корзине</div>
            <div>{items.length}</div>
           </div>
           <hr />
                <div className="cart_block_total_price">
                    <div>Итого:</div>
                    <div>{calcTotalPrice(items)}гр.</div>
                </div>
                <Link to='/order'>
                    <button>Оформить заказ</button>
                </Link>
           </div>
           : null
       }
    </div>
  )
}

export default CartBlock