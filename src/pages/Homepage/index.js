import PicNBeThing from "../../components/PicNBeThing"
import BlackSectionInBooking from '../../components/BlackSectionInBooking'
import BottomInBooking from '../../components/BottomInBooking'
import TextField from '@mui/material/TextField';

const index = () => {
  return (
    <div className="bodyInBooking">
        <div className="firstPicSecInHomepage">
            <navbar className="navInBooking">
                {/* left */}
                <PicNBeThing />
                {/* middle */}
                <div className="navMiddleInBooking">
                    <img className="picsInNavMiddleInBooking" src={require("../../static/WBook your room.png")}></img>
                    <div className="wordsInNavMiddleInBooking">Book your room</div>
                    <img className="picsInNavMiddleInBooking"  src={require("../../static/WPricing.png")}></img>
                    <div className="wordsInNavMiddleInBooking">Pricing</div>
                    <img className="picsInNavMiddleInBooking"  src={require("../../static/WContact Us.png")}></img>
                    <div className="wordsInNavMiddleInBooking">Contact Us</div>
                </div>
                {/* right */}
                <div className="rightInBooking">
                    <div className="wordLoginInBooking">Login</div>
                    <button className="buttonSignUpInHomepage">Sign Up</button>
                </div>
            </navbar>
            <div className="wordProfessionalInHomepage">Professional Room & Studio Amenities</div>
            <div className="wordClassyInHomepage">Classy & Simple, But Never Fade</div>
        </div>
        <div className="secondSecInHomepage">
            <div className="bookInSecondSecInHomepage">
                <img className="picsBookYourRoomInHomepage" src={require("../../static/Book your room.png")}></img>
                <div className="wordsInNavMiddleInBooking">Book your room</div>
            </div>
            <div className="inputSecInHomepage">
                <TextField id="outlined-basic" label="Locations" variant="outlined" sx={{ width: "22%"}}/>
                <TextField id="outlined-basic" label="Date" variant="outlined" sx={{ width: "22%"}} />
                <TextField id="outlined-basic" label="Time" variant="outlined" sx={{ width: "22%"}} />
                <button className="buttonInHomepage">Show Available Room</button>
            </div>
        </div>

        <div className="picSecInHomepage">
            <div className="leftPicInHomepage">
                <div className="firstWordsInPicInHomepage">Meeting Room</div>
                <div className="secondWordsInPicInHomepage">We provide one stop office renovation solutions including ceiling, flooring, electric wiring and air-con, partition, painting, door, access system and so on.</div>
                <div className="buttonInPicInHomepage">Learn More About Meeting Room</div>
            </div>
            <div className="rightPicInHomepage">
                <div className="firstWordsInPicInHomepage">Single Use Room</div>
                <div className="secondWordsInPicInHomepage">We provide one stop office renovation solutions including ceiling, flooring, electric wiring and air-con, partition, painting, door, access system and so on.</div>
                <div className="buttonInPicInHomepage">Learn More About Single Use Room</div>
            </div>
        </div>
        
        
        <BlackSectionInBooking />
        <BottomInBooking />
    </div>
  )
}

export default index
