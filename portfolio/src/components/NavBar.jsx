import { Link } from "react-router-dom"

function NavBar(){

return(

      <nav>

    <a>Mahlodi</a>

      <Link to="/">Home</Link>
      <Link to="/contact-me">Contact Me</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/projects">Projects</Link>
      
      </nav>
)

}
export default NavBar
      
