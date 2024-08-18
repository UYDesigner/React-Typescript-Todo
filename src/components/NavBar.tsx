import { Link } from "react-router-dom"

function NavBar() {
  return (
    <>
    <Link to={'/'} className="links" >All</Link>
    <Link to={'/?todos=Active'} className="links" >Active</Link>
    <Link to={'/?todos=Completed'}  className="links">Completed</Link>
    </>
  )
}

export default NavBar