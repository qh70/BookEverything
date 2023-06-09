
import PicNBeThing from "../../components/PicNBeThing"
import BlackSectionInBooking from '../../components/BlackSectionInBooking'
import BottomInBooking from '../../components/BottomInBooking'

const index = () => {
  return (
    <div className="bodyInBooking">
        <navbar className="navInBooking">
            {/* left */}
            <PicNBeThing />
        </navbar>
        <div className="secondSecInCheckout">
            {/* left */}
            <div className="leftInSecondSecInCheckout">
                <div className="wordConfirmationInChecking">Confirmation and Payment</div>
                <div className="wordYourBookingInChecking">Your booking</div>
                <div className="dateNEditInChecking">
                    <div>Date:</div>
                    <div className="wordEditInChecking">Edit</div>
                </div>
                <div className="dateInSecondSecInCheckout">07 Nov 2023</div>
                <div className="timeNEditInChecking">
                    <div>Time</div>
                    <div className="wordEditInChecking">Edit</div>
                </div>
                <div className="timeInSecondSecInCheckout">10:00am - 11:00am</div>
                <hr />
                <div className="payWithInCheckout">Pay with</div>
                <input className="cCOrDC" placeholder="Credit Card or Debit Card"></input>
                <br />
                <input className="cCOrDC" placeholder="Card Number"></input>
                <div className="expirationNCVV">
                    <input className="expiration" placeholder="Expiration"></input>
                    <input className="cVV" placeholder="CVV"></input>
                </div>
                <input className="cCOrDC" placeholder="Zip Code"></input>
                <input></input>
                <div className="wordEnter">Enter a Coupon Code</div>
                <hr />
                <div className="wordCancellation">Cancellation policy</div>
                <div className="wordFreeCancellationInCheckout">Free cancellation for 48 hours. Cancel before 01 Nov for a partial<br></br> refund. Learn more</div>
                <hr />
                <div className="wordBySelectingInCheckout">By selecting the button below, I agree to the Room Booking Rules, Ground rules for guests, BookEverything's Rebooking and Refund Policy, and that BookEverything can charge my payment method if I’m responsible for damage.</div>
                <button className="buttonInCheckout">Confirm and Pay</button>
            </div>
            {/* right */}
            <div className="meetingBlockInCheckout">
                <div className="picNMeetingRoomInMmeetingBlockInCheckout">
                    <img src={require("../../static/MeetingRoomInCheckout.png")}></img>
                    <div className="wordMeetingRoom">Meeting Room</div>
                </div>
                <div className="wordPriceDetail">Price Detail</div>
                
                <div className="pricePreHourInDetail2">
                    <div>HKD $400 x 1 hour</div>
                    <div>HKD $400</div>
                </div>
                <hr className="hrInBookYourRoomInDetail2"/>
                <div className="totalPriceInDetail2">
                    <div>Total</div>
                    <div>HKD $400</div>
                </div>
            </div>
        </div>
        
        <BlackSectionInBooking />
        <BottomInBooking />
    </div>
  )
}

export default index
