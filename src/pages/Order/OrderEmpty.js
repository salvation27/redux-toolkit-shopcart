import React from 'react'
import {Link} from 'react-router-dom'


const OrderEmpty = () => {
  return (
    <div className='order_empty'>
        <span>Корзина пуста</span>
        <Link to='/'>
           <button>Вернутся на  старницу с товаром</button>
        </Link>
        
    </div>
  )
}

export default OrderEmpty