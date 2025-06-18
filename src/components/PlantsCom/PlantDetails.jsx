import Navbar from "../Navbar"
import { useContext, useState, useEffect } from "react"
import { PlantContext } from "../Contextapi/PlantContext"
import { useParams } from 'react-router-dom'
import Footer from "../footer/Footer"
import "./plantDetailStyle.css"
function PlantDetails() {

    const { plantdata, selectedPlant, setSelectedPlant } = useContext(PlantContext);
    const { id } = useParams;
    const [currentPlant, setCurrentPlant] = useState(selectedPlant);

    useEffect(() => {
          console.log(currentPlant , id)
        if (!currentPlant && id) {
            
            const foundPlant = plantdata.find(plant => plant.id === parseInt(id));
            if (foundPlant) {
                setCurrentPlant(foundPlant);
            }
        }
    }, [id, plantdata, currentPlant, setSelectedPlant]);

    if (!currentPlant) {
        return (
            <div className="plantDetailContainer">
                <h1>Plant not found or not selected.</h1>
                <p>Please go back to the <a href="/">home page</a> and select a plant.</p>
            </div>
        );
    }

    return (
        <div className="plantDetailContainer">
            <div className="plantDetailHeader">
                <Navbar />
                <div className="plantDeatilsHero">
                    <div>
                        <h1 style={{ paddingBottom: "20px" }}>Get all our plant <br />
                            <span className='gredents'>information</span></h1>
                        <p style={{ color: "rgb(123, 127, 116)" }}>Discover detailed information about all our plants, including their <br /> features, care guidelines, and benefits, all in one convenient place.</p>
                    </div>
                </div>
            </div>
            <div className="plantDetailsBody">
                <div className="plantDetailsUpperlinks">
                   
                </div>
                <div className="plantDetailsDesc">
                    <div className="plantimage">
                        <img className="plantimginner" src={currentPlant.image} alt="plantimage" />
                    </div>
                    <div className="plantfullDetails">
                        <h4 className="plantdetailName">{currentPlant.Name}</h4>
                        <div className="plantDetailinnerContainer">
                            <div className="plantInformation">
                                <div>
                                    <img src="https://aifarming.ca/wp-content/uploads/2023/11/season-Icon.png" alt="calender" />
                                    <p className="plantDetailsPara">Growing Season</p>
                                    <p>{currentPlant.seasons}</p>
                                </div>
                                <div>
                                    <img src="https://aifarming.ca/wp-content/uploads/2023/11/watering-Icon.png" alt="watring" />
                                    <p className="plantDetailsPara">Watering</p>
                                    <p>{currentPlant.watering}</p>
                                </div>
                            </div>
                            <div className="plantInformation">
                                <div>
                                    <img src="https://aifarming.ca/wp-content/uploads/2023/11/light-Icon.png" alt="light" />
                                    <p className="plantDetailsPara">Light</p>
                                    <p>{currentPlant.suntime}</p>
                                </div>
                                <div>
                                    <img src="https://aifarming.ca/wp-content/uploads/2023/11/avoid-Icon.png" alt="avoid" />
                                    <p className="plantDetailsPara">Avoid this to grow with</p>
                                    <p>{currentPlant.avoid}</p>
                                </div>
                            </div>
                            <div className="plantInformation">
                                <div>
                                    <img />
                                    <p></p>
                                    <p></p>
                                </div>
                                <div>
                                    <img src="https://aifarming.ca/wp-content/uploads/2023/11/supporting-Icon.png" alt="supporting" />
                                    <p className="plantDetailsPara">Supporting Plants</p>
                                    <p>{currentPlant.suppPlants}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <hr style={{ marginTop: "50px" }} />
                <div className="plantAdvInfromation">
                    <div>
                        <h4 style={{padding: "10px 0px 20px 0px"}}>Plant Advance Information</h4>
                    </div>
                    <div className="plantAdvInfoContainer">
                        <div className="plantdetailCard">
                            <h4>Seed</h4>
                            <hr />
                            <div className="plantSeedContainer">
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/seed-Icon.png" alt="seedicon" />
                                        <div>
                                            <p className="plantDetailsPara">Seed Depth</p>
                                            <p>{currentPlant.seed.seedDepth}</p>
                                        </div>
                                    </div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/germination-icon.png" alt="gremination" />
                                        <div>
                                            <p className="plantDetailsPara">Days of Gremination</p>
                                            <p>{currentPlant.seed.daysToGermination}</p>
                                        </div>
                                    </div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/calender-icon.png" alt="calender" />
                                        <div>
                                            <p className="plantDetailsPara">Outdoor Sowing</p>
                                            <p>{currentPlant.seed.outdoorSowing}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/temp-icon.png" alt="temp" />
                                        <div>
                                            <p className="plantDetailsPara">Soil Temp.</p>
                                            <p>{currentPlant.seed.soilTemp}</p>
                                        </div>
                                    </div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/indoor-icon.png" alt="indoor" />
                                        <div>
                                            <p className="plantDetailsPara">Indoor Sowing</p>
                                            <p>{currentPlant.seed.indoorSowing}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="instructions">
                                <p className="plantDetailsPara">Sowing Instruction</p>
                                <p>{currentPlant.seed.sowingInstruction}</p>
                            </div>
                        </div>
                        <div className="plantdetailCard">
                             <h4>Growing</h4>
                            <hr />
                            <div className="plantSeedContainer">
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/beds-icon.png" alt="beds" />
                                        <div>
                                            <p className="plantDetailsPara">Spacing Between Beds</p>
                                            <p>{currentPlant.growing.spacbtwBeds}</p>
                                        </div>
                                    </div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/ph-range-icon.png" alt="ph-range" />
                                        <div>
                                            <p className="plantDetailsPara">Days of Gremination</p>
                                            <p>{currentPlant.growing.phRange}</p>
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/temp-icon.png" alt="temp" />
                                        <div>
                                            <p className="plantDetailsPara">Soil Temp.</p>
                                            <p>{currentPlant.growing.soilTemp}</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div className="instructions">
                                <p className="plantDetailsPara">Sowing Instruction</p>
                                <p>{currentPlant.growing.growingInstruction}</p>
                            </div>
                        </div>
                        <div className="plantdetailCard">
                             <h4>Harvesting</h4>
                            <hr />
                            <div className="plantSeedContainer">
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/seeds-icon.png" alt="seedsicon" />
                                        <div>
                                            <p className="plantDetailsPara">Days to harvest seeds</p>
                                            <p>{currentPlant.harvesting.daysToHarvest}</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="plantinnerseed">
                                        <img src="https://aifarming.ca/wp-content/uploads/2023/11/temp-icon.png" alt="temp" />
                                        <div>
                                            <p className="plantDetailsPara">Days to harvest seedlings</p>
                                            <p>{currentPlant.harvesting.daysToSeedilings}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="instructions">
                                <p className="plantDetailsPara">Sowing Instruction</p>
                                <p>{currentPlant.harvesting.harvestingInstructions}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PlantDetails