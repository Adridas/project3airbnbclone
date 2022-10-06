import star from './images/Star.png'
import './card.css'


function Card(props) {
   let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
     <div className="Card" >
       {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={`../images/${props.item.coverImg}`}  className="card-image" alt="cards"/>
         <div className="stat">
            <img src={star} className="star" alt="star"/>
            <span>{props.item.stats.rating}</span>
            <span>({props.item.stats.reviewCount}) • </span>
            <span>{props.item.location}</span>
        </div>
         <p className="card-about">
         {props.item.title}
        </p> 
        <p className="Price"><strong>From $136</strong> / person</p>  
     </div>
    ); 
 }
 export default Card;