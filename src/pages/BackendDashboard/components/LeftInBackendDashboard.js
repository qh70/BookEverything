import List from '@mui/material/List';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PhotoIcon from '@mui/icons-material/Photo';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory, useLocation } from 'react-router-dom';


const LeftNew = () => {
    
    const location = useLocation()

    const itemMeun = [
      {
        text: "Appointments",
        icon: <DateRangeIcon />,
        path: "/order"
      },
      {
        text: "IoT Rooms",
        icon: <PhotoIcon />,
        path: "/product"
      },
      {
        text: "Customers",
        icon: <AccountCircleIcon />,
        path: "/user"
      },
      {
        text: "Payments",
        icon: <AutoAwesomeMosaicIcon />,
        path: "/clients"
      },
      {
        text: "Report",
        icon: <AutoAwesomeMosaicIcon />,
        path: "/clients"
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
                <img className="WTCLogo1" src={require("../../../static/1.png")}/>
                <img src={require("../../../static/BE-Thing White.png")}/>
            </div>
            <div className="whiteBlockDashboardInBackendDashboard">
                <div>
                </div>
                <div>Dashboard</div>
                
            </div>
            <div>

            </div>
            <List className="ListInLeftNew">
                {itemMeun.map(item => (
                <ListItem 
                    key={item.text}
                >
                    <div className="iconNMenuDark">
                        <ListItemIcon className="itemIconDark">{item.icon}</ListItemIcon>
                        <ListItemText className={location.pathname == item.path ? "itemMenu" : "itemMenuDark"} primary={item.text}/>
                    </div>
                </ListItem>
                ))}
            </List>
            <List className="downListInLeftInBackendDashboard">
                {downItemMeun.map(item => (
                <ListItem 
                    key={item.text}
                >
                    <div className="iconNMenuDark">
                        <ListItemIcon className="itemIconDark">{item.icon}</ListItemIcon>
                        <ListItemText className={location.pathname == item.path ? "itemMenu" : "itemMenuDark"} primary={item.text}/>
                    </div>
                </ListItem>
                ))}
            </List>
      </div>
    </div>
    
  )
}

export default LeftNew
