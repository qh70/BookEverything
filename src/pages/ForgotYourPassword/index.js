import GreyPicNBlackBeThing from "../../components/GreyPicNBlackBeThing"
import PasswordInput from "../../components/PasswordInput"

const ForgotYourPassword = () => {
    return (
        <div className="loginNsignup">
            {/* 左邊 */}
            <div className="type">
                <GreyPicNBlackBeThing />
                <div className="login">Forgot your Password</div>
                <div className="loginToAccess">Don’t worry, happens to all of us. Enter your email below to recover your password</div>
                <PasswordInput word="Email" />
                <br></br>
                
                <button className="loginButton" style={{marginTop:20}}>Submit</button>
            </div>
            {/* 右邊 */}
            <div className="picSection">
                <img src={require("../../static/office4.png")} className="pic"/>
            </div>
        </div>
    )
}

export default ForgotYourPassword
