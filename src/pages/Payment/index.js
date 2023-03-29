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
            <div className="wordMyBookingsInBooking">Payment Methods</div>
        </div>
        <div className="cCNAddNewCardInPayment">
            <div className="cCInPayment"></div>
            <div className="addNewCard">
                <div className="wordAddANewCard">Add a new card</div>
            </div>
        </div>
        <BlackSectionInBooking />
        <BottomInBooking />
        
    </div>
  )
}

export default Booking
