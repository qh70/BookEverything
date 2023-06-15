import { useState } from "react"

import LeftInBackendDashboard from "./components/LeftInBackendDashboard"
import RightInBackendDashboard from "./components/RightInBackendDashboard"
import AppointmentInfo from "./components/AppointmentInfo"
import EditAppointment from "./components/EditAppointment"
import CancelAppointment from "./components/CancelAppointment"

const BackendDashboard = () => {

  const [ overlaystatusINBED, setOverlaystatusINBED ] = useState()

  return (
    
    <div className="bodyInBackendDashboard">
        {overlaystatusINBED === "filter"  ? <AppointmentInfo setOverlaystatusINBED={setOverlaystatusINBED}/>
        :overlaystatusINBED === "edit"   ? <EditAppointment setOverlaystatusINBED={setOverlaystatusINBED}/>
        :overlaystatusINBED === "cancel" ? <CancelAppointment setOverlaystatusINBED={setOverlaystatusINBED}/>
        :""}
        <LeftInBackendDashboard /> 
        <RightInBackendDashboard setOverlaystatusINBED={setOverlaystatusINBED}/>
    </div>
  )
}

export default BackendDashboard
