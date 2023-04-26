import GreyPicNBlackBeThing from "../../components/GreyPicNBlackBeThing"
import PasswordInput from "../../components/PasswordInput"

const ResetPassword = () => {
    return (
        <div className="loginNsignup">
            {/* 左邊 */}
            <div className="type">
                <GreyPicNBlackBeThing />
                <div className="login">Reset Password</div>
                <div className="loginToAccess">Please reset your new password and re-enter to confirm</div>
                <PasswordInput word="New Password" />
                <br></br>
                <PasswordInput word="Confirm New Password" />
                <br></br>
                
                <button className="loginButton" style={{marginTop:20}}>Confirm to update new password</button>
            </div>
            {/* 右邊 */}
            <div className="picSection">
                <img src={require("../../static/office4.png")} className="pic"/>
            </div>
        </div>
    )
}

export default ResetPassword
