import React from 'react'

function FeaturesBox(props) {
  return (
    <div className="a-box">
        <div className="a-b-img">
            <img src={props.image} alt="" />
        </div>
        <div className="a-b-text">
            <h2> {props.title}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima voluptas est labore perspiciatis temporibus sit maiores. Nobis molestias doloribus corrupti maxime, vel tempore soluta, asperiores cupiditate a veritatis doloremque sed?</p>
        </div>
    </div>
  )
}

export default FeaturesBox