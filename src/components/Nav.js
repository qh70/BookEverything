import PicNBeThing from "../components/PicNBeThing"
import MiddleInNav from '../components/MiddleInNav'
import RightInNav from '../components/RightInNav'

const Nav = () => {
  return (
    <navbar className="navInBooking">
        {/* left */}
        <PicNBeThing />
        {/* middle */}
        <MiddleInNav />
        {/* right */}
        <RightInNav />
    </navbar>
  )
}

export default Nav
