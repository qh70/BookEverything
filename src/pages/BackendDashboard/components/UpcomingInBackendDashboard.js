import { Stack, Avatar } from "@mui/material";

const UpcomingInBackendDashboard = () => {
  return (
    <div>
        <div className="wordUpcomingNAll">
            <div className="wordUpcoming">
                Upcoming (4)
            </div>
            <div className="wordAllInUpcoming">
                All
            </div>
        </div>
        <div className="headNRoomNTimeInUpcomingInBackendDashboard">
            <Stack>
                <Avatar className="stackInUpcomingInBackendDashboard" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <div className="roomnameNTimeInUpcomingInBackendDashboard">
                <div className="roomname">
                    XXXX08
                </div>
                <div className="roomnumberNTimeInUpcomingInBackendDashboard">
                    <div className="roomnumber">Room01</div>
                    <div className="timeInroomnumberNTimeInUpcomingInBackendDashboard">13:00 - 15:00</div>
                </div>
            </div>
            <img className="threeDots" src={require("../../../static/ThreeDots.png")} />
        </div>
        <div className="headNRoomNTimeInUpcomingInBackendDashboard">
            <Stack>
                <Avatar className="stackInUpcomingInBackendDashboard" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </Stack>
            <div className="roomnameNTimeInUpcomingInBackendDashboard">
                <div className="roomname">
                    XXXX00
                </div>
                <div className="roomnumberNTimeInUpcomingInBackendDashboard">
                    <div className="roomnumber">Room01</div>
                    <div className="timeInroomnumberNTimeInUpcomingInBackendDashboard">18:00 - 19:00</div>
                </div>
            </div>
            <img className="threeDots" src={require("../../../static/ThreeDots.png")} />
        </div>
        
    </div>
  )
}

export default UpcomingInBackendDashboard
