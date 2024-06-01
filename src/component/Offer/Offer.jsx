import React from "react"
import "./Offer.css"
import offer from "../../assets/offer.png"
import offer2 from "../../assets/lamp-offer.png"
import offer3 from "../../assets/sofa-offer.png"

function Offer(){
    return(
        <div className="offer">
            <div className="first">
                <img src={offer2} alt=""/>
                <img src={offer3} alt=""/>
                <img src={offer} alt=""/>
            </div>
            <div className="second">
                <h5>New Arrival</h5>
                <p>This month 50% off <br></br>& special gift</p>
                <button>Shop Now</button>
            </div>
        </div>
    )
}

export default Offer