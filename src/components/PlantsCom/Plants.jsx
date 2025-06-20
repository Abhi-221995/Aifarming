import { useEffect } from 'react';
import Navbar from '../Navbar';
import Footer from '../footer/Footer';
import PlantCard from './PlantCard';
import './StylePlant.css'
function Plants() {

    useEffect(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
      }, []);

    return (
        <div className="PlantContainer">
            <div className="headerPlants">
                <Navbar />
                <div className="plantDeatilsHero">
                    <div>
                        <h1 className='plantsDetailsH1'>Get all our plant <br />
                            <span className='gredents'>information</span></h1>
                        <p style={{ color: "rgb(123, 127, 116)" }}>Discover detailed information about all our plants, including their <br /> features, care guidelines, and benefits, all in one convenient place.</p>
                    </div>
                </div>
                <div style={{paddingTop:"150px"}}>
                  <PlantCard cardlength={12}/>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Plants