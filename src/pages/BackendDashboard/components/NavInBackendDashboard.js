import { Stack, Avatar } from "@mui/material";
import { useEffect } from "react";

import { useContext } from "react";
// import { LoginContext } from "../../LoginContext";

// import LogoutPopup from "../Dialog/LogoutPopup";

const Header = () => {

  const URL = window.location.href;
  console.log(URL)
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
  //   console.log(title)
  // }, [URL])

//   const { login, setLogin } = useContext(LoginContext);
//   console.log(useContext(LoginContext));
  
//   const { logoutPopup, setLogoutPopup } = useContext(LoginContext);

//   const showLogoutPopup = () => {
//     setLogoutPopup(true);    
//     console.log("")
//   }

  return (
    <div className="navInBackendDashboard">
        <div className="wordOverviewInNavInBackendDashboard">Overview</div>
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
