import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import ButtonCard from '../../components/ButtonCard/ButtonCard'
import {setItemInCart,deleteItemFromCart} from '../../redux/cart/reducer'
import './DetailPage.css'

const DetailPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state=>state.cart.itemsInCart)
  const item = useSelector(state=>state.game.currentGame)
  const {title,genres,description,price,video,image} =item

  if(!item) return null


  // проверяем есть ли обект с айдишником в корзине ,some метод возвращает bulean
  const isItemInCart = items.some(game=>game.id===item.id)

  const handleClickAddCart = (e) => {
    e.stopPropagation();
    if(isItemInCart) {
      dispatch(deleteItemFromCart(item.id))
    } else {
      dispatch(setItemInCart(item))
    }
  }
  return (
    <div className='detail_page_wrap'>
     <div className="detail_page_title">
            <h1>{title}</h1>
          </div>
  
      <div className="datail_descr dflex">
        <div className="left_wrap">
            <div className="detail_page_video">
              <iframe
              width='100%'
              height='400px'
              src={video}
              title='Video'
              ></iframe>
            </div>
      </div>
      <div className="rigth_wrap">
          <div className="detail_page_foto">
          <img src={image} alt='pp' />
          </div>
          <div className="detail_page_descr">
          <h4>Описание:  {description}</h4>
          </div>
          <div className="detail_page_price">
          Price: <span>{price} гр.</span>
          </div>
          <div className="detail_page_ganres">
          Ganres: 
          <div className='detail_ganres'>
            {
              genres.map((item,i)=><div key={i} className='ganres_item'>{item}</div>)
            }
          </div>
          <div className='detail_btn' onClick={handleClickAddCart}>
            <ButtonCard size='m' haigth='40' type='primary' item={item}>
              {
                !isItemInCart ? 'Добавить в корзину':'Убрать с корзины'
              }
            </ButtonCard>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DetailPage


