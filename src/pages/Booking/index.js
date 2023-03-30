import React from 'react'
import PicNBeThing from "../../components/PicNBeThing"
import MiddleInNav from '../../components/MiddleInNav'
import RightInNav from '../../components/RightInNav'
import HeadNNameInBooking from '../../components/HeadNNameInBooking'
import ProfileNBookingsNPaymentInBooking from '../../components/ProfileNBookingsNPaymentInBooking'
import BlackSectionInBooking from '../../components/BlackSectionInBooking'
import BottomInBooking from '../../components/BottomInBooking'

const Booking = () => {
  return (
    <div className="bodyInBooking">
        <navbar className="navInBooking">
            {/* left */}
            <PicNBeThing />
            {/* middle */}
            <MiddleInNav />
            {/* right */}
            <RightInNav />
        </navbar>
        <HeadNNameInBooking />
        <ProfileNBookingsNPaymentInBooking />        
        <div className="wordMyBookingsInBookingNWordUpcomingNDownArrowInBooking">
            <div className="wordMyBookingsInBooking">My bookings</div>
            <div className="wordUpcomingNDownArrowInBooking">
                <div className="wordUpcomingInBooking">Upcoming</div>
                <img className="downArrowInBooking" src={require("../../static/DownArrow.png")}></img>
            </div>
        </div>
        <div className="picNTimeNLocationNDownloadQRCodeInBooking">
            <img className="picInPicNTimeNLocationNDownloadQRCodeInBooking" src={require("../../static/officePicInBooking2.png")} />
            <div className="timeInPicNTimeNLocationNDownloadQRCodeInBooking">10:00 - 11:00 am</div>
            <div className="link-rightInPicNTimeNLocationNDownloadQRCodeInBooking"></div>
            <img src={require("../../static/DateInBooking.png")}></img>
            <div>
                <div className="wordDateInPicNTimeNLocationNDownloadQRCodeInBooking">Date</div>
                <div className="dateInPicNTimeNLocationNDownloadQRCodeInBooking">07-Nov-22</div>
            </div>
            <img src={require("../../static/LocationInBooking.png")}></img>
            <div>
                <div className="wordLocationInPicNTimeNLocationNDownloadQRCodeInBooking">Location</div>
                <div className="locationInPicNTimeNLocationNDownloadQRCodeInBooking">Meeting Room(Kwun Tong)</div>
            </div>
            <img src={require("../../static/DownloadQRCodeInBooking.png")}></img>
            <div className="rightArrowInBooking">
                <img className="rightArrowInPicNTimeNLocationNDownloadQRCodeInBooking" src={require("../../static/RightArrowInBooking.png")}></img>
            </div>
        </div>
        <BlackSectionInBooking />
        <BottomInBooking />
    </div>
  )
}

export default Booking
