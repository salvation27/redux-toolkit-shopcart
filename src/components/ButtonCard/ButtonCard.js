import classNames from 'classnames'
import React from 'react'
import './ButtonCard.css'
const ButtonCard = ({
    onClick,
    type='primary',
    children,
    size = 's',
    haigth='40px'
}) => {
    const btnClass = classNames({
        'item_card_price_btn':true,
        'btn_secondary':type === 'secondary',
        'btn_primary':type === 'primary',
        'btn_small':size === 's',
        'btn_medium':size === 'm',
        'btn_haigth':haigth === '40',
    })
  return (
    <div 
    className={btnClass}
    onClick={onClick}
    >{children}</div>
  )
}

export default ButtonCard