
import { Link } from 'react-router-dom';
function Navigation() {
  return (
    <div className="navbar" >
    <ul className="nav-links" >
    <li><Link className="link" to="/about/"> About</Link></li>
    <li><Link className="link" to="/home/"> Home</Link></li>
    
       </ul>
    </div>
  )
}
export default Navigation