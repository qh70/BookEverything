import PicNBeThing from "./PicNBeThing"

const BottomInBooking = () => {
  return (
    <div className="bottomInBooking">
        <div className="beThingNPicsInBottomInBooking">
            <PicNBeThing />
            <div className="picsInBottomInBooking">
                <img src={require("../static/BlackFacebook.png")}></img>
                <img className="twitterPic" src={require("../static/Bird.png")}></img>
                <img className="youtubePic" src={require("../static/Youtube.png")}></img>
                <img className="igPic" src={require("../static/Ig.png")}></img>
            </div>
        </div>
        <div className="blogInBottomInBooking">
            <div className="titlesInBottomInBooking">Blogs</div>
            <div className="subtitlesInBottomInBooking">Room Guide</div>
            <div className="subtitlesInBottomInBooking">IoT Service Guide</div>
        </div>
        <div>
            <div className="titlesInBottomInBooking">About Us</div>
            <div className="subtitlesInBottomInBooking">Our Story</div>
            <div className="subtitlesInBottomInBooking">Our Collaborations</div>
            <div className="subtitlesInBottomInBooking">Work with us</div>
            <div className="subtitlesInBottomInBooking">Terms & Conditions</div>
            <div className="subtitlesInBottomInBooking">Privacy Policy</div>
        </div>
        <div>
            <div className="titlesInBottomInBooking">Contact Us</div>
            <div className="subtitlesInBottomInBooking">Email Us</div>
        </div>
    </div>
  )
}

export default BottomInBooking
