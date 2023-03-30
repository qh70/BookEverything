import React from 'react'

const HeadNNameInBooking = () => {
  return (
    <div className="headNNameInBooking">
        <img className="secondSecInBooking" src={require("../static/officePicInBooking.png")} />
        <div className="circle">
            <img className="headInBooking" src={require("../static/headshot.png")}></img>
        </div>
        <div className="circle1">
            <img className="penPicInBooking" src={require("../static/penPic.png")} />
        </div>
        <div className="nameNEmailInBooking">
            <div className="nameInBooking">Benny Wai</div>
            <div className="emailInBooking">benny.wai@gmail.com</div>
        </div>
    </div>
  )
}

export default HeadNNameInBooking
