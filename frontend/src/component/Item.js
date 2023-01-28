import React from 'react'
import './Wearable.css';
export default function item(props) {
  return (
    <div className='item'>
        <img className='item-img'src={props.img}/>
<h3 className='item-name'>{props.name}</h3>
<p className='item-desc'>{props.desc}</p>
<p>{props.price}</p>
<button className='btn-buy'>Buy</button>
    </div>
  )
}
