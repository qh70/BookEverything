import React from 'react'

const MiddleInNav = () => {
  return (
    <div className="navMiddleInBooking">
        <img className="picsInNavMiddleInBooking" src={require("../static/Book your room.png")}></img>
        <div className="wordsInNavMiddleInBooking">Book your room</div>
        <img className="picsInNavMiddleInBooking"  src={require("../static/Pricing.png")}></img>
        <div className="wordsInNavMiddleInBooking">Pricing</div>
        <img className="picsInNavMiddleInBooking"  src={require("../static/Contact Us.png")}></img>
        <div className="wordsInNavMiddleInBooking">Contact Us</div>
    </div>
  )
}

export default MiddleInNav
