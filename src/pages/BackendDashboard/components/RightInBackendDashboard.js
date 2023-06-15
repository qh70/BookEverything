import NavInBackendDashboard from "./NavInBackendDashboard"
import ContentInBackendDashboard from "./ContentInBackendDashboard"
import InToday from "./InToday"

const RightInBackendDashboard = ({setOverlaystatusINBED}) => {
  return (
    <div className="rightInBackendDashboard">
      <NavInBackendDashboard />
      <InToday />
      <ContentInBackendDashboard setOverlaystatusINBED={setOverlaystatusINBED}/>
    </div>
  )
}

export default RightInBackendDashboard
