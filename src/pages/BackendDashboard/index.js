import BackendDashboardLeft from "./components/LeftInBackendDashboard"
import RightInBackendDashboard from "./components/RightInBackendDashboard"

const index = () => {
  return (
    <div className="bodyInBackendDashboard">
        <BackendDashboardLeft /> 
        <RightInBackendDashboard />
    </div>
  )
}

export default index
