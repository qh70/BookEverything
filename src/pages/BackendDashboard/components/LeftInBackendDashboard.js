import List from '@mui/material/List';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhotoIcon from '@mui/icons-material/Photo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';
import BorderAllIcon from '@mui/icons-material/BorderAll';


const LeftNew = () => {
    
    const location = useLocation()

    const navigate = useNavigate();

    const itemMeun = [
      {
        text: "Dashboard",
        icon: <BorderAllIcon />,
        path: "/backenddashboard"
      },
      {
        text: "Appointments",
        icon: <DateRangeIcon />,
        path: "/appointments"
      },
      {
        text: "IoT Rooms",
        icon: <PhotoIcon />,
        path: "/iotrooms"
      },
      {
        text: "Customers",
        icon: <AccountCircleIcon />,
        path: "/customers"
      },
      {
        text: "Payments",
        icon: <AutoAwesomeMosaicIcon />,
        path: "/payments"
      },
      {
        text: "Report",
        icon: <AutoAwesomeMosaicIcon />,
        path: ""
      }
    ]

    const downItemMeun = [
        {
          text: "Settings",
          icon: <DateRangeIcon />,
          path: "/order"
        },
        {
          text: "Logout",
          icon: <PhotoIcon />,
          path: "/product"
        }
    ]

  return (
    <div className="leftInBackendDashboard">
      <div className="leftEmpty"/>
      <div className="left">
            <div className="logoNWordInOrder">
                {/* <img className="WTCLogo1" src={require("../../../static/1.png")}/>
                <img src={require("../../../static/BE-Thing White.png")}/> */}
                <img src={require("../../../static/WhiteBeThing.png")} />
            </div>
            {/* <div className="whiteBlockDashboardInBackendDashboard">
              <img src={require("../../../static/Dashboard.png")} />
            </div> */}
            <List className="ListInLeftNew">
                {itemMeun.map(item => (
                <ListItem 
                    key={item.text}
                    onClick={()=>{navigate(item.path);console.log(location.pathname)}}
                >
                    <div className={location.pathname === item.path ? "iconNMenuDark" : "iconNMenu"}>
                        <ListItemIcon className={location.pathname === item.path ? "itemIconDark" : "itemIcon"}>{item.icon}</ListItemIcon>
                        <ListItemText className={location.pathname === item.path ? "itemMenuDark" : "itemMenu"} primary={item.text}/>
                    </div>
                </ListItem>
                ))}
            </List>
            <List className="downListInLeftInBackendDashboard">
                {downItemMeun.map(item => (
                <ListItem 
                    key={item.text}
                >
                    <div className="iconNMenu">
                        <ListItemIcon className="itemIcon">{item.icon}</ListItemIcon>
                        <ListItemText className={location.pathname === item.path ? "itemMenuDark" : "itemMenu"} primary={item.text}/>
                    </div>
                </ListItem>
                ))}
            </List>
      </div>
    </div>
    
  )
}

export default LeftNew
