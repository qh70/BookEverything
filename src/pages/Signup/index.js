import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"

const Signup = () => {
    return (
        <div className="loginNsignup">
            {/* 左邊 */}
            <div className="signUpPicSection">
                <img src={require("../../static/office4.png")} className="pic"/>
            </div>
            {/* 右邊 */}
            <div className="signType">
                <div className="picNtitle">
                    <img src={require("../../static/1.png")}></img>
                    <div className="bething">BE-Thing</div>
                </div>
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
