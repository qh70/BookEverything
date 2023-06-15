import TitlesInAppointmentInfo from "../components/TitlesInAppointmentInfo.js"
import ContentInAppointmentInfo from "../components/ContentInAppointmentInfo.js"
import GreyContentInAppointmentInfo from "../components/GreyContentInAppointmentInfo.js"

const AppointmentInfo = ({setOverlaystatusINBED}) => {
  return (
    <div className="overlayInBED">
        <div className="appointmentInfo">
            <div className="firstInAppointmentInfo">
                <img className="picPaperInAppointmentInfo" src={require("../../../static/PaperInAppointmentInfo.png")} />
                <div className="wordAppointmentInfo">Appointment Info</div>
                <img className="bTNResendConfirmation" src={require("../../../static/ButtonResendConfirmation.png")} />
                <img className="bTNEdit" src={require("../../../static/ButtonSave.png")} onClick={()=>{setOverlaystatusINBED("cancel")}}/>
            </div>
            <hr className="hrInAppointmentInfo"></hr>
            {/* 第二段 */}
            <div className="secondInAppointmentInfo">
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Room ID"/>
                        <input className="inputForRoomIDNPaymentInSecondInAppointmentInfo"/>
                    </div>
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Location"/>
                        <div className="inputForLocationInSecondInAppointmentInfo"/>
                    </div>
                </div>
                
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Appointment Status"/>
                        <div className="divForRoomIDNPaymentInSecondInAppointmentInfo"><img className="downArrowInAppointmentDiv" src={require("../../../static/DownArrowInEditAppointment.png")}/></div>
                    </div>
                    <div className="twoPartsInAppointmentInfo">
                        <div className="firstPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="Created At"/>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                        <div className="secondPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="ID"/>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                    </div>
                </div>
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Appointment Date"/>
                        <div className="divForRoomIDNPaymentInSecondInAppointmentInfo"><img className="pICCalendarInAppointmentDiv" src={require("../../../static/PICCalendar.png")}/></div>
                    </div>
                    <div className="twoPartsInAppointmentInfo">
                        <div className="firstPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="Time *"/>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                        <div className="secondPartInAppointmentInfo">
                        <div className="titlesInAppointmentInfo" style={{color: "white"}}>1</div>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                    </div>
                </div>
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Payment"/>
                        <input className="inputForRoomIDNPaymentInSecondInAppointmentInfo"/>
                    </div>
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Payment Status"/>
                        <div className="divPaymentStatusInSecondInEditAppointment"><img className="downArrowInAppointmentDiv" src={require("../../../static/DownArrowInEditAppointment.png")}/></div>
                    </div>
                </div>
            </div>
            <hr className="secondHrInAppointmentInfo"></hr>
            {/* 第三段 */}
            <div className="thirdInEditAppointment">
                <div className="headNCustomerInformation">
                    <img src={require("../../../static/PICHead.png")} />
                    <div className="wordCI">Customer information</div>
                </div>                
            </div>
            <div className="secondInAppointmentInfo">
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Email"/>
                        <div className="divForRoomIDNPaymentInSecondInAppointmentInfo"></div>
                    </div>
                    <div className="twoPartsInAppointmentInfo">
                        <div className="firstPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="Phone"/>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                        <div className="secondPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="ID"/>
                            <input className="inputForCreatedAtNIDInSecondInAppointmentInfo"/>
                        </div>
                    </div>
                </div>
                <div className="tileInCI" style={{marginTop: "5%"}}>Note</div>
            </div>
            
        </div>
    </div>
  )
}

export default AppointmentInfo
