import { Stack, Avatar } from "@mui/material";
import { useLocation } from 'react-router-dom';
   
    
import { useEffect } from "react";

import { useContext } from "react";
import BackendDashboard from "..";
// import { LoginContext } from "../../LoginContext";

// import LogoutPopup from "../Dialog/LogoutPopup";

const Header = () => {

  const location = useLocation()

  const URL = window.location.href;
  if (URL.includes("addnew")){
    const page = URL.split("/").slice(-1)[0]
    var title = page[0].toUpperCase()+page.substring(1, 3)+" "+page[3].toUpperCase()+page.substring(4,6)+" "+page[6].toUpperCase()+page.substring(7)
  }else{
    const page = URL.split("/").slice(-1)[0]
    var title = page[0].toUpperCase()+page.substring(1)
  }
  // const URL = window.location.href;
  // var title = "0";

  // useEffect(() => {
  //   console.log("eff")

  //   const URL = window.location.href;
  //   if (URL.includes("addnew")){
  //     const page = URL.split("/").slice(-1)[0]
  //     title = page[0].toUpperCase()+page.substring(1, 3)+" "+page[3].toUpperCase()+page.substring(4,6)+" "+page[6].toUpperCase()+page.substring(7)
  //   }else{
  //     const page = URL.split("/").slice(-1)[0]
  //     title = page[0].toUpperCase()+page.substring(1)
  //   }
  // }, [URL])

//   const { login, setLogin } = useContext(LoginContext);
  
//   const { logoutPopup, setLogoutPopup } = useContext(LoginContext);

//   const showLogoutPopup = () => {
//     setLogoutPopup(true);    
//   }

  return (
    <div className="navInBackendDashboard">
        <div className="wordSwitcherInNavInBackendDashboard">
          {location.pathname === "/backenddashboard" ? "Overview" 
          : location.pathname === "/appointments" ? "Appointments" 
          : location.pathname === "/iotrooms" ? "IoT Rooms"
          : "Customer"
          }
          {location.pathname != "/backenddashboard" && <div className="countAfterWordSwitcherInNavInBackendDashboard">5</div>}
        </div>
        <div className="" style={{display: "flex"}}>
            <Stack className="stackInNavInBackendDashboard">
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <div className="">
                <div className="nameInNavInBackendDashboard">Name</div>
                <div className="titleInNavInBackendDashboard">Admin</div>
            </div>
            {/* {!login ?  */}
            {/* <div className="NameAndLogoutInHeader" onClick={() => {setLogoutPopupOpen(true)}}>Logout</div>  */}
            <img src={require("../../../static/bellInBackendDashboard.png")} />
             {/* : null
            } */}
            {/* <LogoutPopup/> */}
        </div>
    </div>
  )
}

export default Header
