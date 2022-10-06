import logo from './images/airbnblogo.svg';
import './navbar.css'


function Navbar() {
   return (
    <div className="navbar" >
        <img src={logo} alt="airbnblogo"/>     
    </div>
   ); 
}
export default Navbar;