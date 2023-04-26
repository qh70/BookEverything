import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"
import GreyPicNBlackBeThing from "../../components/GreyPicNBlackBeThing"

const Signup = () => {
    return (
        <div className="loginNsignup">
            {/* 左邊 */}
            <div className="signUpPicSection">
                <img src={require("../../static/office4.png")} className="pic" alt=""/>
            </div>
            {/* 右邊 */}
            <div className="signType">
                <GreyPicNBlackBeThing />
                <div className="login">Sign up</div>
                <div className="loginToAccess">Let’s get you all st up so you can access your personal account.</div>
                <EmailInput />
                <br></br>
                <PasswordInput word="New Password" />
                <br></br>
                <PasswordInput word="Confirm New Password" />
                <br></br>
                
                <button className="loginButton" style={{marginTop:20}}>Confirm to update new password</button>
            </div>
        </div>
    )
}

export default Signup
