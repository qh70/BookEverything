import React from 'react'

const Booking = () => {
  return (
    <div className="bodyInBooking">
        <navbar className="navInBooking">
            {/* left */}
            <div className="picNtitleInBooking">
                <img src={require("../../static/1.png")}></img>
                <div className="bething">BE-Thing</div>
            </div>
            {/* middle */}
            <div className="navMiddleInBooking">
                <img className="picsInNavMiddleInBooking" src={require("../../static/Book your room.png")}></img>
                <div className="wordsInNavMiddleInBooking">Book your room</div>
                <img className="picsInNavMiddleInBooking"  src={require("../../static/Pricing.png")}></img>
                <div className="wordsInNavMiddleInBooking">Pricing</div>
                <img className="picsInNavMiddleInBooking"  src={require("../../static/Contact Us.png")}></img>
                <div className="wordsInNavMiddleInBooking">Contact Us</div>
            </div>
            {/* right */}
            <div className="rightInBooking">
                <div className="wordLoginInBooking">Login</div>
                <button className="buttonSignUpInBooking">Sign Up</button>
            </div>
        </navbar>
        <img className="secondSecInBooking" src={require("../../static/officePicInBooking.png")} />
        <div className="circle">
            <img className="headInBooking" src={require("../../static/headshot.png")}></img>
        </div>
        <div className="circle1">
            <img className="penPicInBooking" src={require("../../static/penPic.png")} />
        </div>
        <div className="nameNEmailInBooking">
            <div className="nameInBooking">Benny Wai</div>
            <div className="emailInBooking">benny.wai@gmail.com</div>
        </div>
        <div className="profileNBookingsNPaymentInBooking">
            <div className="profildInBooking">
                Profile
                <div className="link-right"></div>
            </div>
            <div className="bookingsInBooking">
                Bookings
                <div className="link-right"></div>
            </div>
            <div className="paymentInBooking">Payment methods</div>
        </div>
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
        <div className="blackSectionInBooking">
            <div className="leftPartInBlackSectionInBooking">
                <div className="wordSubscribeToOurNewsletterInBlackSectionInBooking">Subscribe To Our Newsletter</div>
            </div>
            <div className="rightPartInBlackSectionInBooking">
                <div className="wordBookEverythingNowInBlackSectionInBooking">Book Everything now!</div>
                <div>Get inspired! Receive our tips, IOT services and behind the scenes stories.</div>
                <input></input>
                <button>Subscribe</button>
            </div>
        </div>
        
    </div>
  )
}

export default Booking
