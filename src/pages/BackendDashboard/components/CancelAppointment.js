import React from 'react'

const CancelAppointment = ({setOverlaystatusINBED}) => {
  return (
    <div className="overlayWithCancelAppointment">
        <div className="cancelAppointment">
            <div className="wordCancelAppointment">
                Cancel Appointment
            </div>
            <div className="warningInCancelAppointment">
                Are you sure you want to cancel
                <br/>
                this appointment？
            </div>
            <div className="twoBTNsInCancelAppointment">
                <img className="bTNNoInCancelAppointment" src={require("../../../static/BTNNoInCancelAppointment.png")} />
                <img src={require("../../../static/BTNYesInCancelAppointment.png")} onClick={()=>{setOverlaystatusINBED("")}}/>
            </div>
        </div>
      
    </div>
  )
}

export default CancelAppointment
