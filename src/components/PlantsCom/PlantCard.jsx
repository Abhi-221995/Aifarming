import { useContext } from 'react';
import { PlantContext } from '../Contextapi/PlantContext';
import { useNavigate } from 'react-router-dom';
import './plantCardStyle.css'

function PlantCard({cardlength}){
   
    const {plantdata, setSelectedPlant} = useContext(PlantContext);
    const navigate = useNavigate();

    const sliceCards = plantdata.slice(0, cardlength);

    const handleSeeDetails = (plant) => {
        setSelectedPlant(plant);
        navigate(`./${plant.Name}`);
    };
      
    return(
        <div className="plantCardContainer" >
        {
        sliceCards.map((item, index)=> (
            <div key={item.id} className="plantcontainer">
              <div className="plantImage">
                 <img className="plantimgsize" src={item.image} alt="plantimage"/>
              </div>
              <div className="plantName">
                <h3>{item.Name}</h3>
              </div>
              <div className="plantDetails">
                 <div className="plantLeft">
                    <div className="plantSeasons">
                       <div className="calenderimg">
                          <img className="calenderImgSize" src="https://aifarming.ca/wp-content/uploads/2025/01/calender-icon.png"/>
                       </div>
                       <div className="seasonsName">
                         <p>{item.seasons}</p>
                       </div>
                    </div>
                    <div className="plantType">
                         <div className="calenderimg">
                          <img className="calenderImgSize" src="https://aifarming.ca/wp-content/uploads/2025/01/plant-icon.png"/>
                         </div>
                         <div className="seasonsName">
                         <p>{item.planttype}</p>
                         </div>
                    </div>
                 </div>
                 <div className="plantRight">
                       <div className="plantSeasons">
                       <div className="calenderimg">
                          <img className="calenderImgSize" src="https://aifarming.ca/wp-content/uploads/2025/01/weather-icon.png"/>
                       </div>
                       <div className="seasonsName">
                         <p>{item.suntime}</p>
                       </div>
                    </div>
                    <div className="plantType">
                         <div className="calenderimg">
                          <img className="calenderImgSize" src="https://aifarming.ca/wp-content/uploads/2025/01/icon.png"/>
                         </div>
                         <div className="seasonsName">
                         <p>{item.numofDays}</p>
                         </div>
                    </div>
                 </div>
              </div>
              <div className='plantButtonContainer'>
                <button className='plantButton' onClick={() => handleSeeDetails(item)}>See Details</button>
              </div>
            </div>
        ))
        }
        </div>
    )
}


export default PlantCard