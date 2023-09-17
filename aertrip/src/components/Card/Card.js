import React from 'react'
import "./Card.css";
import { BiMessageRounded } from "react-icons/bi";
import { SlBag } from "react-icons/sl";
import logo from "../../images/indigo.png"


const Card = ({al,dt,ft,at,fr,to,price}) => {
    // var {at,fr,to}=card;

    // console.log(card);
  return (
    <div className='main-container-card'>
      <div className='card-left-container'>
        <div className='logo-name-box'>
            <img src={logo} className='logo' alt='logo'/>
            <p>{al}</p>
        </div>
        <div className='icon-info'>
            <BiMessageRounded/><span className='num'>10.0</span>
            <SlBag/>
        </div>

      </div>
      <div className='card-center-container'>
            <div className='time-deatils'>
                <h3>{dt}</h3>
                <p>{ft}</p>
                <h3>{at}</h3>
            </div>
            <div className='route-details'>
                <p>{fr}</p>
                <p>-----------------------------------------------------------------------------</p>
                <p>{to}</p>
            </div>
      </div>
      <div className='card-right-container'>
        <h3>Rs. {price}</h3>
        <button>View Fares</button>
      </div>
    </div>
  )
}

export default Card



