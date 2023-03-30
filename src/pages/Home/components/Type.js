import Checkbox from '@mui/material/Checkbox';
import EmailInput from "../../../components/EmailInput"
import PasswordInput from "../../../components/PasswordInput"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Type = () => {
    return <div className="type">
        <div className="picNtitle">
            <img src={require("../../../static/1.png")}></img>
            <div className="bething">BE-Thing</div>
        </div>
        <div className="login">Login</div>
        <div className="loginToAccess">Login to access your account</div>
        <EmailInput />
        <br></br>
        <PasswordInput word="password" />
        <br></br>
        <div className="checkboxNForgotPassword">
            <div className="checkboxNRememberMe">
                <Checkbox {...label} />
                <div className="rememberMe">Remember me</div>
            </div>
            <div className="forgotPassword">Forgot Password</div>
        </div>
        <button className="loginButton">Login</button>
        <div className="dontHaveAnAccount">Don't have an account?<a className="wordSignUpInType">Sign up</a></div>
    </div>
}

export default Type