import ThreeCoinsSec from "./ThreeCoinsSec"
import UpNDownArrows from "../../../components/UpNDownArrows";
// for MUI
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const ContentInBackendDashboard = () => {
  return (
    <div className="ContentInBackendDashboard">
        <div className="bottomInContentInBackendDashboard">
            <div className="coinsNAppointments">
                <div className="coins">
                    <ThreeCoinsSec src={require("../../../static/1stIconInBackendDashboard.png")} percentage={"35%"} num={"300"} status={"Visitors"}/>
                    <ThreeCoinsSec src={require("../../../static/2ndIconInBackendDashboard.png")} percentage={"15%"} num={"18"} status={"Booking Orders"}/>
                    <ThreeCoinsSec src={require("../../../static/3rdIconInBackendDashboard.png")} percentage={"23%"} num={"$2000"} status={"Revenue"}/>
                </div>
                <div className="appointmentsSec">
                    <div className="appointmentsNSearchNFilter">
                        <div>
                            <div className="wordAppointments">Appointments  (6)</div>
                            <div className="wordShowing">Showing Today‘s appointments</div>
                        </div>
                        <div className="inputNFilterInBackendDashboard">
                            <input className="inputSearchInBackendDashboard" placeholder="Search ID/Customer" />
                            <img className="filterInBackendDashboard" src={require("../../../static/Frame 32@2x.png")} />
                        </div>
                    </div>
                    <table className="tableInBackendDashboard">
                        {/* <thead> */}
                            <tr className="trOfHeadInBackendDashboard">
                                <td className="iDinAppointmentsInBackendDashboard">
                                    <div>ID</div>
                                    <UpNDownArrows />
                                </td>
                                <td className="iDinAppointmentsInBackendDashboard">Status</td>
                                <td className="appointmentDateInBackendDashboard">
                                    <div>Appointment Date</div>
                                    <UpNDownArrows />
                                </td>
                                <td className="iDinAppointmentsInBackendDashboard">
                                    <div>Time</div>
                                    <UpNDownArrows />
                                </td>
                                <td className="iDinAppointmentsInBackendDashboard">
                                    <div>Amount(HKD)</div>
                                    <UpNDownArrows />
                                </td>
                            </tr>
                        {/* </thead> */}
                        {/* <tbody> */}
                            <tr className="trOfBodyInBackendDashboard">
                            <td className="tdOfBodyInBackendDashboard">John</td>
                            <td className="tdOfBodyInBackendDashboard">25</td>
                            <td className="">Male</td>
                            <td className="tdOfBodyInBackendDashboard">Male</td>
                            <td className="">Male</td>
                            </tr>
                        {/* </tbody> */}
                    </table>

                    {/* <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                            <TableRow className="tablerow1">
                                <TableCell className="iDinAppointmentsInBackendDashboard">
                                    <div>ID</div>
                                    <UpNDownArrows />
                                </TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">
                                    <div>Appointment Date</div>
                                    <UpNDownArrows />
                                </TableCell>
                                <TableCell align="right">
                                    <div>Appointment Date</div>
                                    <UpNDownArrows />
                                </TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.calories}</TableCell>
                                <TableCell align="right">{row.fat}</TableCell>
                                <TableCell align="right">{row.carbs}</TableCell>
                                <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer> */}
                    
                </div>
            </div>
            <div className="calendarInBackendDashboard">calendar</div>
        </div>
      
    </div>
  )
}

export default ContentInBackendDashboard
