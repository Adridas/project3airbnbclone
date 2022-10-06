import mainimage from './images/mainpicture.png';
import './hero.css'


function Hero() {
    return (
     <div className="hero" >
        <img src={mainimage} className="main-picture" alt="experiences"/>
         <h1 className="hero-title">Online experiences</h1> 
         <p className="hero-about">
         Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.

        </p>   
     </div>
    ); 
 }
 export default Hero;