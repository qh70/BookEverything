import Checkbox from '@mui/material/Checkbox';
import EmailInput from "../../components/EmailInput"
import PasswordInput from "../../components/PasswordInput"

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const index = () => {
  return (
    <div className="bodyInBackendLogin">
        <div className="leftBackgroundInBackendLogin" />
        <div className="leftInBackendLogin">
          <div className="wordOurInBackendLogin">
            Our Technology,<br></br>A New Passion.
          </div>
          <div className="wordBookInBackendLogin">
            Book Everything 2023
          </div>
        </div>
        <div className="rightInBackendLogin">
          <div className="blockInRightInBackendLogin">
            <div className="picNBeThingInBackendLogin">
              <img src={require("../../static/BlueBeThing.png")}/>
            </div>
            <div className="wordSignInBackendLogin">Sign in to Dashboard</div>
            <div className="wordEmailInBackendLogin">Email/ User Name</div>
            {/* <input className="inputEmailInBackendLogin" placeholder="input your email/ user name in here"></input> */}
            <EmailInput width="100%"/>
            <div className="wordPasswordInBackendLogin">Password</div>
            <PasswordInput word="password" width="100%"/>
            <div className="wordforgotInBackendLogin">Forgot password？</div>
            <button className="buttonInBackendLogin">Sign</button>
            <div>
              <div className="checkboxNRememberMeInBackendLogin">
                <Checkbox {...label}/>
                <div className="rememberMe">Remember me</div>
            </div>
            </div>
          </div>
        </div>      
    </div>
  )
}

export default index
