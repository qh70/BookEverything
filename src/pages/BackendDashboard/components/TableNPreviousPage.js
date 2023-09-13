import UpNDownArrows from "../../../components/UpNDownArrows";

const TableNPreviousPage = () => {
  return (
    <div className="tableNPreviousPage">
        <table className="tableInBackendDashboard">
            {/* <thead> */}
                <tr className="trOfHeadInBackendDashboard">
                    <td className="iDinAppointmentsInBackendDashboard">
                        <div>ID</div>
                        <UpNDownArrows />
                    </td>
                    <td className="statusInAppointmentsInBackendDashboard">
                        Status
                    </td>
                    <td className="appointmentDateInAppointmentsInBackendDashboard">
                        <div>Appointment Date</div>
                        <UpNDownArrows />
                    </td>
                    <td className="timeInAppointmentsInBackendDashboard">
                        <div>Time</div>
                        <UpNDownArrows />
                    </td>
                    <td className="amountInAppointmentsInBackendDashboard">
                        <div>Amount(HKD)</div>
                        <UpNDownArrows />
                    </td>
                </tr>
            {/* </thead> */}
            {/* <tbody> */}
                <tr className="trOfBodyInBackendDashboard">
                    <td className="firstTrOfBodyInBackendDashboard">XXXX01</td>
                    <td className="secondTrOfBodyInBackendDashboard">
                        <img src={require("../../../static/Finished.png")} />
                    </td>
                    <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                    <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                    <td className="fifthTrOfBodyInBackendDashboard">
                        <div>$400.00</div>
                        <img className="threeDots" src={require("../../../static/ThreeDots.png")} />
                    </td>
                </tr>
                <div className="hrInBackendDashboard"></div>
                
                <tr className="trOfBodyInBackendDashboard">
                    <td className="firstTrOfBodyInBackendDashboard">XXXX01</td>
                    <td className="secondTrOfBodyInBackendDashboard">
                        <img src={require("../../../static/Canceled.png")} />
                    </td>
                    <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                    <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                    <td className="fifthTrOfBodyInBackendDashboard">
                        <div>$400.00</div>
                        <img className="threeDots" src={require("../../../static/ThreeDots.png")} />
                    </td>
                </tr>
                <div className="hrInBackendDashboard"></div>
                
                <tr className="trOfBodyInBackendDashboard">
                    <td className="firstTrOfBodyInBackendDashboard">XXXX01</td>
                    <td className="secondTrOfBodyInBackendDashboard">
                        <img src={require("../../../static/Upcoming.png")} />
                    </td>
                    <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                    <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                    <td className="fifthTrOfBodyInBackendDashboard">
                        <div>$400.00</div>
                        <img className="threeDots" src={require("../../../static/ThreeDots.png")} />
                    </td>
                </tr>
                <div className="hrInBackendDashboard"></div>
            {/* </tbody> */}
        </table>
        <div className="previousSecInBackendDashboard">
            <div className="wordPreviousInBackendDashboard">Previous page</div>
            <div className="bluePageIndexInBackendDashboard">1</div>
            <div className="greyPageIndexInBackendDashboard">2</div>
            <div className="wordNextPageInBackendDashboard">Next page</div>
        </div>
    </div>
  )
}

export default TableNPreviousPage
