import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = (props) => {
  return (
    <>
      <div className="card mx-3" style={{ width: "18rem", border: 'none' }}>
        <img className="card-img-top" src={props.imgSrc} alt="Card cap" />
        <div className="card-body">
          <h5 className="card-title">{props.head}</h5>
          <p className="card-text d-flex align-items-center" style={{ minHeight: '140px' }}>{props.text}</p>
          <NavLink to={props.link} className="btn btn-primary">Know more</NavLink>
        </div>
      </div>
    </>
  )
}

export default Card