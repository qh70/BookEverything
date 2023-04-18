import EmailInput from "../../components/EmailInput"

const index = () => {
  return (
    <div className="bodyInBackendLoginForgot">
        <div className="backSecInBackendLoginForgot">
            <img src={require("../../static/squre.png")} />
            <div>Back</div>
        </div>
        <div className="beThingSecInBackendLoginForgot">
            <div className="innerBeThingSecInBackendLoginForgot">
                <img src={require("../../static/1.png")}></img>
                <img src={require("../../static/BE-Thing White.png")}></img>
            </div>
        </div>
        <div className="whiteSecInBackendLoginForgot">
            <div className="innerWhiteSecInBackendLoginForgot">
                <div className="wordForgotInBackendLoginForgot">Forgot Password</div>
                <div className="wordEnterEmailInBackendLoginForgot">
                    Enter the email address you used when you joined and we will send you instructions to reset your password.<br></br>
                    <br></br>
                    For security reason, we do NOT store your password. So rest assured that we will never send your password via email.
                </div>
                <div className="wordEmailInBackendLoginForgot">Email</div>
                <EmailInput width="100%"/>
                <button className="buttonInBackendLoginForgot">Reset Password</button>
            </div>
        </div>
      
    </div>
  )
}

export default index
