import React from 'react'
import games from './mokapiHome'
import ItemCard from '../../components/itemCard/itemCard'
import './Home.css'

const Home = () => {
  return (
    <div className='card_wrap'>
        {
          games.map(item=> <ItemCard key={item.id} item={item} />)
        }
    </div>
  )
}

export default Home