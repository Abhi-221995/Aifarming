import PlantCard from "./PlantCard"
import { NavLink } from "react-router-dom"
import './plantHomeStyle.css'
function PlantHome() {
    
    return (
        <div className="plantHomeContainer">
            <div className="plantHomeHeader">
                <div className="plantsuperHeader">
                    <p>Plant incorporate</p>
                </div>
                <div className="plantHeaderText">
                    <h1>Popular Plants to start with  <span className='gredents'>AI-Farming</span></h1>
                </div>
                <div className="plantHeaderLower">
                    <p>A short introduction to the workshop instructors and why their background should inspire potential student’s confidence.</p>
                    <div className="plantHeaderButtton">
                        <NavLink to='/Plants' style={{ textDecoration: "none" }}>
                            <button className='cardButton'style={{gap: "22px"}}>
                                <div className='buttonText'> <p>All   Plants</p></div>
                                <div className='arrow1'>
                                    <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="" />
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div>
                <PlantCard  cardlength={4}/> 
            </div>
            <div className="aiMarketPlace">
                <div className="plantsuperHeader" style={{width:"200px", backgroundColor:"rgb(179, 230, 75)"}}>
                    <p style={{color:"black"}}>AI farming marketplace</p>
                </div>
                <div>
                    <h1>Home cook? Sell your herbs and <br/> veggies in the <span className='gredents'>neighborhood</span></h1>
                </div>
                <div>
                    <p>A short introduction to the workshop instructors and why their background <br/> should inspire potential student’s confidence.</p>
                </div>
            </div>
        </div>
    )
}

export default PlantHome