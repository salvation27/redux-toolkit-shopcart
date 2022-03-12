import React from 'react'
import { useSelector} from 'react-redux'
import OrderItem from './OrderItem'
import OrderEmpty from './OrderItem'
import { calcTotalPrice } from '../../global'


const Order = () => {
// const dispatch = useDispatch()    
const games = useSelector(state=>state.cart.itemsInCart)

console.log(games)
  return (
    <div className='order_wrap'>
        {
          games.length > 0  ?  games.map((item,i)=><OrderItem num={i+1} item={item}  key={item.id} />) : <OrderEmpty />
        }
        
       { games.length > 0 ? (
         <>
         <hr />
        <div className="order_total ">
         <div className="order_total_title">Всего:</div>
         <div className="order_total_num">{calcTotalPrice(games)} гр.</div>
        </div>
         </>
        ) : null
       }
    </div>
  )
}

export default Order