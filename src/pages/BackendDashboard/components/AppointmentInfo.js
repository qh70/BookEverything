import TitlesInAppointmentInfo from "../components/TitlesInAppointmentInfo.js"
import ContentInAppointmentInfo from "../components/ContentInAppointmentInfo.js"
import GreyContentInAppointmentInfo from "../components/GreyContentInAppointmentInfo.js"

const AppointmentInfo = () => {
  return (
    <div className="overlayInBED">
        <div className="appointmentInfo">
            <div className="firstInAppointmentInfo">
                <img className="picPaperInAppointmentInfo" src={require("../../../static/PaperInAppointmentInfo.png")} />
                <div className="wordAppointmentInfo">Appointment Info</div>
                <img className="bTNClose" src={require("../../../static/CloseButton.png")} />
                <img className="bTNEdit" src={require("../../../static/EditButton.png")} />
            </div>
            <hr className="hrInAppointmentInfo"></hr>
            {/* 第二段 */}
            <div className="secondInAppointmentInfo">
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Room ID"/>
                        <ContentInAppointmentInfo content="Room 01"/>
                    </div>
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Location"/>
                        <ContentInAppointmentInfo content="100 Canton RoadTsim Sha Tsui"/>
                    </div>
                </div>
                
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Appointment Status"/>
                        <ContentInAppointmentInfo content="Upcoming"/>
                    </div>
                    <div className="twoPartsInAppointmentInfo">
                        <div className="firstPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="Created At"/>
                            <GreyContentInAppointmentInfo content="23 / 1 / 2023" />
                        </div>
                        <div className="secondPartInAppointmentInfo">
                            <TitlesInAppointmentInfo title="ID"/>
                            <GreyContentInAppointmentInfo content="XXXX03"/>
                        </div>
                        
                    </div>
                </div>
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Appointment Date"/>
                        <ContentInAppointmentInfo content="30/1/2023"/>
                    </div>
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Time*"/>
                        <div className="contentTimeUnderTitlesInAppointmentInfo">
                            <div>From</div>
                            <div className="timeInContentTimeUnderTitlesInAppointmentInfo">15:00-16:00</div>
                        </div>
                    </div>
                </div>
                <div className="linesInSecondInAppointmentInfo">
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Payment"/>
                        <GreyContentInAppointmentInfo content="Visa"/>
                    </div>
                    <div className="secSInSecondInAppointmentInfo">
                        <TitlesInAppointmentInfo title="Payment Status"/>
                        <ContentInAppointmentInfo content="Paid"/>
                    </div>
                </div>
            </div>
            <hr className="secondHrInAppointmentInfo"></hr>
            {/* 第三段 */}
            <div className="thirdInAppointmentInfo">
                <div className="headNCustomerInformation">
                    <img src={require("../../../static/Head.png")} />
                    <div className="wordCI">Customer information</div>
                </div>
                <div className="emailNPhoneNIDInThirdInAppointmentInfo">
                    <div>
                        <div className="tileInCI">Email</div>
                        <div className="textInEmailNPhoneNIDInThirdInAppointmentInfo">customer01@gmail.com</div>
                    </div>
                    <div>
                        <div className="tileInCI">Phone</div>
                        <div className="flagNNumber">
                            <img src={require("../../../static/HKflag.png")} />
                            <div className="textInEmailNPhoneNIDInThirdInAppointmentInfo" style={{marginLeft: "20%"}}>6898   6898</div>
                        </div>
                    </div>
                    <div>
                        <div className="tileInCI">ID</div>
                        <div className="textInEmailNPhoneNIDInThirdInAppointmentInfo">XXXX03</div>
                    </div>
                </div>
                <div className="tileInCI" style={{marginTop: "5%",marginLeft: "2%"}}>Note</div>
            </div>

        </div>
    </div>
  )
}

export default AppointmentInfo
