import React from 'react'
import { useDispatch ,useSelector} from "react-redux";
import GenresBlok from './GenresBlok'
import ButtonCard from '../../components/ButtonCard/ButtonCard'
import {setItemInCart,deleteItemFromCart} from '../../redux/cart/reducer'
import {setCurrentGame} from '../../redux/game/reducer'
import { useHistory } from 'react-router-dom';



const ItemCard = ({item}) => {
  const {title,image,genres,price} = item

  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.itemsInCart)
  // проверяем есть ли обект с айдишником в корзине ,some метод возвращает bulean
  const isItemInCart = items.some(game=>game.id===item.id)

  const handleClick = (e) => {
    e.stopPropagation();
    if(isItemInCart) {
      dispatch(deleteItemFromCart(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }

  const history = useHistory()

  const detailHadleClick = ()=> {
    dispatch(setCurrentGame(item))
    history.push(`/app/${item.title}`)
  }

  return (
    <div className='item_card' onClick={detailHadleClick}>
        <div className="item_card_foto">
        <img src={image} alt="альтернативный текст"></img>
        </div>
        <div className="item_card_descr">
           <div className="item_card_title">{title}</div>
           <div className="item_card_cat dflex">
               {genres.map((item,i)=><GenresBlok key={i} item={item} />)}
           </div>
           <div className="item_card_price dflex">
               <div className="item_card_price_num">{price}гр.</div>
               <ButtonCard
               onClick={handleClick}
               type={isItemInCart ? 'secondary' : 'primary'}
               size={isItemInCart ? 'm' : 's'}
               >
               {
                isItemInCart ? 'Убрать из корзины' : 'В корзину'
               }
               </ButtonCard>
           </div>
        </div>
    </div>
  )
}

export default ItemCard