import NavInBackendDashboard from "./NavInBackendDashboard"
import ContentInBackendDashboard from "./ContentInBackendDashboard"
import InToday from "./InToday"
import { useLocation } from 'react-router-dom';

import DateRangeIcon from '@mui/icons-material/DateRange';
import UpNDownArrows from "../../../components/UpNDownArrows";
import PagecountNTwoButtons from "./PagecountNTwoButtons";

// Switch
import { styled } from '@mui/material/styles'; 
import Switch from '@mui/material/Switch';

// AddIcon
import AddIcon from '@mui/icons-material/Add';

// Checkbox
import Checkbox from '@mui/material/Checkbox';

    
    

const RightInBackendDashboard = ({setOverlaystatusINBED}) => {

  const location = useLocation()

  // Switch
  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  // Checkbox
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  

  return (
    <div className="rightInBackendDashboard">
      <NavInBackendDashboard />
      {/* page BackendDashboard */}
      {location.pathname === "/backenddashboard" ? 
        <div>
          <InToday />
          <ContentInBackendDashboard setOverlaystatusINBED={setOverlaystatusINBED}/>
        </div>
        // page Appointments
        : location.pathname === "/appointments" ? 
        <div>
          <div className="inputNListsInAppointmentsInBackendDashboard">
            <div className="inputNListsInAppointments">
              <input className="inputSearchInAppointmentsInBackendDashboard" placeholder="Search" />
              <input className="listsWithDownArrow" placeholder="Appointment Date" />
              <input className="listsWithDownArrow" placeholder="Time Slot" />
              <input className="listsWithDownArrow" placeholder="Customer ID" />
              <input className="listsWithDownArrow" placeholder="Status" />
            </div>
            <div className="picCalendarView">
              <DateRangeIcon />
              <div className="wordCalendarView">Calendar View</div>
            </div>
          </div>
          <div className="hrBelowListsInAppointments"/>
          <div className="tableNPreviousPageContainerInAppointments">
            <div className="tableNPreviousPage">
              <table className="tableInBackendDashboard">
                  {/* <thead> */}
                      <tr className="trOfHeadInBackendDashboard">
                          <td className="iDinAppointmentsInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            <div>ID</div>
                            <UpNDownArrows />
                          </td>
                          <td className="iDinAppointmentsInBackendDashboard">
                              <div>Customer ID</div>
                              <UpNDownArrows />
                          </td>
                          <td className="statusInAppointmentsInBackendDashboard">
                              <div>Status</div>
                              <UpNDownArrows />
                          </td>
                          <td className="appointmentDateInAppointmentsInBackendDashboard">
                              <div>Appointment Date</div>
                              <UpNDownArrows />
                          </td>
                          <td className="timeInAppointmentsInBackendDashboard">
                              <div>Section</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Payment</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Payment Status</div>
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
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="firstTrOfBodyInBackendDashboard">customer01</td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Finished.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Paid</td>
                          <td className="fifthTrOfBodyInBackendDashboard">
                              <div>$400.00</div>
                          </td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                      
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="firstTrOfBodyInBackendDashboard">customer02</td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Canceled.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Paid</td>
                          <td className="fifthTrOfBodyInBackendDashboard">
                              <div>$400.00</div>
                          </td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                      
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="firstTrOfBodyInBackendDashboard">customer03</td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Upcoming.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Paid</td>
                          <td className="fifthTrOfBodyInBackendDashboard">
                              <div>$400.00</div>
                          </td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                  {/* </tbody> */}
              </table>
              <div className="wordNoMoreDataToDisplay">No more data to display</div>
              <div className="previousSecInBackendDashboard">
                  <div className="wordPreviousInBackendDashboard">Previous page</div>
                  <div className="bluePageIndexInBackendDashboard">1</div>
                  <div className="wordNextPageInBackendDashboard">Next page</div>
              </div>
            </div> 
          </div>
          <PagecountNTwoButtons />
        </div>
        // page IoT Rooms
        : location.pathname === "/iotrooms" ? 
        <div>
          <div className="inputNListsInAppointmentsInBackendDashboard">
            <div className="inputNListsInAppointments">
              <input className="inputSearchInAppointmentsInBackendDashboard" placeholder="Search" />
              <input className="listsWithDownArrow" placeholder="Room ID" />
              <input className="listsWithDownArrow" placeholder="Location" />
              <input className="listsWithDownArrow" placeholder="Status" />
              <div className="wordIotFunctions">IoT Functions</div>
              {/* Switch */}
              <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} className="switchInIotRooms"/> 
            </div>
            <div className="picAddNew">
              <AddIcon />
              <div className="wordCalendarView">Add New</div>
            </div>
          </div>
          <div className="hrBelowListsInAppointments"/>
          <div className="tableNPreviousPageContainerInAppointments">
            <div className="tableNPreviousPage">
              <table className="tableInBackendDashboard">
                  {/* <thead> */}
                      <tr className="trOfHeadInBackendDashboard">
                          <td className="iDinAppointmentsInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            <div>ID</div>
                            <UpNDownArrows />
                          </td>
                          <td className="iDinAppointmentsInBackendDashboard">
                              <div>IoT Function</div>
                              <UpNDownArrows />
                          </td>
                          <td className="statusInAppointmentsInBackendDashboard">
                              <div>Status</div>
                              <UpNDownArrows />
                          </td>
                          <td className="appointmentDateInAppointmentsInBackendDashboard">
                              <div>Location</div>
                              <UpNDownArrows />
                          </td>
                          <td className="timeInAppointmentsInBackendDashboard">
                              <div>Real Time status Stauts</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Revenue generated</div>
                              <UpNDownArrows />
                          </td>
                      </tr>
                  {/* </thead> */}
                  {/* <tbody> */}
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="secondTrOfBodyInIotRooms">
                            <div className="blueCircle"></div>
                            <div>Yes</div>
                          </td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Active.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                      
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="secondTrOfBodyInIotRooms">
                            <div className="whiteCircle"></div>
                            <div className="wordNo">No</div>
                          </td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Inactive.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                          
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                  {/* </tbody> */}
              </table>
              <div className="wordNoMoreDataToDisplay">No more data to display</div>
              <div className="previousSecInBackendDashboard">
                  <div className="wordPreviousInBackendDashboard">Previous page</div>
                  <div className="bluePageIndexInBackendDashboard">1</div>
                  <div className="wordNextPageInBackendDashboard">Next page</div>
              </div>
            </div> 
          </div>
          <PagecountNTwoButtons />
        </div>
        // page Customers
        : location.pathname === "/customers" ? 
        <div>
          <div className="inputNListsInAppointmentsInBackendDashboard">
            <div className="inputNListsInAppointments">
              <input className="inputSearchInAppointmentsInBackendDashboard" placeholder="Search" />
              <input className="listsWithDownArrow" placeholder="Customer" />
              <input className="listsWithDownArrow" placeholder="Status" />
              <input className="listsWithDownArrow" placeholder="Login" />
            </div>
          </div>
          <div className="hrBelowListsInAppointments"/>
          <div className="tableNPreviousPageContainerInAppointments">
            <div className="tableNPreviousPage">
              <table className="tableInBackendDashboard">
                  {/* <thead> */}
                      <tr className="trOfHeadInBackendDashboard">
                          <td className="iDinAppointmentsInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            <div>Customer ID</div>
                            <UpNDownArrows />
                          </td>
                          <td className="iDinAppointmentsInBackendDashboard">
                              <div>Status</div>
                              <UpNDownArrows />
                          </td>
                          <td className="statusInAppointmentsInBackendDashboard">
                              <div>Email</div>
                              <UpNDownArrows />
                          </td>
                          <td className="appointmentDateInAppointmentsInBackendDashboard">
                              <div>Phone</div>
                              <UpNDownArrows />
                          </td>
                          <td className="timeInAppointmentsInBackendDashboard">
                              <div>User Name</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Login</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Create Date</div>
                              <UpNDownArrows />
                          </td>
                      </tr>
                  {/* </thead> */}
                  {/* <tbody> */}
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>                          
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Active.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">customer01</td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                      
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Inactive.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">customer01</td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                          
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                  {/* </tbody> */}
              </table>
              <div className="wordNoMoreDataToDisplay">No more data to display</div>
              <div className="previousSecInBackendDashboard">
                  <div className="wordPreviousInBackendDashboard">Previous page</div>
                  <div className="bluePageIndexInBackendDashboard">1</div>
                  <div className="wordNextPageInBackendDashboard">Next page</div>
              </div>
            </div> 
          </div>
          <PagecountNTwoButtons />
        </div>
        // page Payments
        :
        <div>
          <div className="inputNListsInAppointmentsInBackendDashboard">
            <div className="inputNListsInAppointments">
              <input className="inputSearchInAppointmentsInBackendDashboard" placeholder="Search" />
              <input className="listsWithDownArrow" placeholder="Method" />
              <input className="listsWithDownArrow" placeholder="Status" />
              <input className="listsWithDownArrow" placeholder="Date" />
            </div>
          </div>
          <div className="hrBelowListsInAppointments"/>
          <div className="tableNPreviousPageContainerInAppointments">
            <div className="tableNPreviousPage">
              <table className="tableInBackendDashboard">
                  {/* <thead> */}
                      <tr className="trOfHeadInBackendDashboard">
                          <td className="iDinAppointmentsInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            <div>Customer ID</div>
                            <UpNDownArrows />
                          </td>
                          <td className="iDinAppointmentsInBackendDashboard">
                              <div>Status</div>
                              <UpNDownArrows />
                          </td>
                          <td className="statusInAppointmentsInBackendDashboard">
                              <div>Email</div>
                              <UpNDownArrows />
                          </td>
                          <td className="appointmentDateInAppointmentsInBackendDashboard">
                              <div>Phone</div>
                              <UpNDownArrows />
                          </td>
                          <td className="timeInAppointmentsInBackendDashboard">
                              <div>User Name</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Login</div>
                              <UpNDownArrows />
                          </td>
                          <td className="amountInAppointmentsInBackendDashboard">
                              <div>Create Date</div>
                              <UpNDownArrows />
                          </td>
                      </tr>
                  {/* </thead> */}
                  {/* <tbody> */}
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Paid.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">customer01</td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                      
                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Refund Request.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">customer01</td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>

                      <tr className="trOfBodyInBackendDashboard">
                          <td className="firstTrOfBodyInBackendDashboard">
                            <Checkbox {...label} className="checkboxInIDinAppointmentsInBackendDashboard" size="small"/>
                            XXXX01
                          </td>
                          <td className="secondTrOfBodyInBackendDashboard">
                              <img src={require("../../../static/Refunded.png")} />
                          </td>
                          <td className="thirdTrOfBodyInBackendDashboard">customer01</td>
                          <td className="thirdTrOfBodyInBackendDashboard">January 29,2023</td>
                          <td className="fourthTrOfBodyInBackendDashboard">11：00-13：00</td>
                          <td className="fourthTrOfBodyInBackendDashboard">Visa</td>
                      </tr>
                      <div className="hrInBackendDashboard"></div>
                  {/* </tbody> */}
              </table>
              <div className="wordNoMoreDataToDisplay">No more data to display</div>
              <div className="previousSecInBackendDashboard">
                  <div className="wordPreviousInBackendDashboard">Previous page</div>
                  <div className="bluePageIndexInBackendDashboard">1</div>
                  <div className="wordNextPageInBackendDashboard">Next page</div>
              </div>
            </div> 
          </div>
          <PagecountNTwoButtons />
        </div>
      }
    </div>
  )
}

export default RightInBackendDashboard
