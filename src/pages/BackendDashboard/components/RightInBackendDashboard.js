import NavInBackendDashboard from "./NavInBackendDashboard"
import ContentInBackendDashboard from "./ContentInBackendDashboard"
import InToday from "./InToday"

const RightInBackendDashboard = () => {
  return (
    <div className="rightInBackendDashboard">
      <NavInBackendDashboard />
      <InToday />
      <ContentInBackendDashboard />
    </div>
  )
}

export default RightInBackendDashboard
