
import BlackSectionInBooking from '../../components/BlackSectionInBooking'
import BottomInBooking from '../../components/BottomInBooking'
import TextField from '@mui/material/TextField';
import Nav from "../../components/Nav"


const index = () => {
  return (
    <div className="bodyInBooking">
        <Nav />
        <div className="picsInDetail">
            <div className="leftPicInDetail"><img src={require("../../static/leftOffice.png")}></img></div>
            <div className="rightPicInDetail">
                <div>
                    <img src={require("../../static/middleUpOffice.png")}></img>
                </div>
                <div>
                    <img src={require("../../static/middleDownOffice.png")}></img>
                </div>
            </div>
            <div className="rightInRightPicInDetail">
                <div>
                    <img src={require("../../static/rightUpOffice.png")}></img>
                </div>
                <div>
                    <img src={require("../../static/rightDownOffice.png")}></img>
                </div>
            </div>
        </div>
        <div className="detailInDetail">
            <div className="leftInDetailInDetail">
                <div>
                    <div className="wordMeetingRoomInDetail">Meeting Room</div>
                    <div className="wordProvideInDetail">We provide one stop office renovation solutions including ceiling, flooring, electric wiring and air-con, partition,<br/>
                     painting, door, access system and so on.</div>
                </div>
                <div>
                    <div className="wordOffersInDetail">What this place offers:</div>
                    <div>Air conditioning</div>
                    <div>IoT Control</div>
                    <div>Refrigerator</div>
                </div>
            </div>
            <div className="bookYourRoomInDetail2">
                <div className="bookYourRoomInBookYourRoomInDetail">
                    <img className="picsInNavMiddleInBooking" src={require("../../static/Book your room.png")}></img>
                    <div className="wordsInNavMiddleInBooking">Book your room</div>
                </div>
                <TextField className="dateInBookYourRoomInDetail" id="outlined-basic" label="Date" variant="outlined" sx={{width: "82%"}}/>
                <TextField className="timeInBookYourRoomInDetail" id="outlined-basic" label="Time" variant="outlined" sx={{width: "82%"}}/>
                <button className="buttonInBookYourRoomInDetail">Reserve</button>
                <div className="wordYouWontInDetail2">You won't be charged yet</div>
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
