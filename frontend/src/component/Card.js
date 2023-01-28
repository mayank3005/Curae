import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used



export default function Card(props) {
  return (
    <div class="col-lg-3 mb-4">
      <div className="card home-card shadow" style={{ height: '26rem' }}>
        <div className="text-center m-4">
          <img src={props.img} alt="" className="img-fliud card-img-top" style={{ height: '200px', width: '200px' }} />
        </div>
        <div class="card-body">
          <h5 class="card-title">{props.heading}</h5>
          <p class="card-text">{props.desc}</p>
        </div>
      </div>
    </div>
  )
}
