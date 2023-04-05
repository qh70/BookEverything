import React from 'react'

const index = () => {
  return (
    <div className="bodyInBackendLogin">
        <div className="leftInBackendLogin">

        </div>
        <div className="rightInBackendLogin">
          <div className="blockInRightInBackendLogin">
            <div className="picNBeThingInBackendLogin">
                  <img className="logoInBackendLogin" src={require("../../static/1.png")}/>
                  <img className="beThingInBackendLogin" src={require("../../static/BE-Thing.png")}></img>
              </div>
              <div className="wordSignInBackendLogin">Sign in to Dashboard</div>
              <div className="wordEmailInBackendLogin">Email/ User Name</div>
              <input className="inputEmailInBackendLogin" placeholder="input your email/ user name in here"></input>
              <div className="wordEmailInBackendLogin">Password</div>
              <input className="inputPasswordInBackendLogin" placeholder="input your password here"></input>
              <div className="wordforgotInBackendLogin">Forgot password？</div>
              <button className="buttonInBackendLogin">Sign</button>
              <div>
                  <div></div>
                  <div>Remember me</div>
              </div>
          </div>
        </div>      
    </div>
  )
}

export default index
