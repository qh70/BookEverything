import LeftInBackendDashboard from "./components/LeftInBackendDashboard"
import RightInBackendDashboard from "./components/RightInBackendDashboard"
import AppointmentInfo from "./components/AppointmentInfo"
import EditAppointment from "./components/EditAppointment"
import CancelAppointment from "./components/CancelAppointment"

const index = () => {
  return (
    <div className="bodyInBackendDashboard">
        {/* <AppointmentInfo /> */}
        {/* <EditAppointment /> */}
        <CancelAppointment />
        <LeftInBackendDashboard /> 
        <RightInBackendDashboard />
    </div>
  )
}

export default index
