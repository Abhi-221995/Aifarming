import './Homestyle.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import Flow from './body/Flow';
import { useEffect, useState } from 'react';
import PlantHome from './PlantsCom/PlantHome';
import Footer from './footer/Footer';
import ContactCard from './Contact/ContactCard';
import BlogHome from './Blogcontainer/BlogHome';
function Home() {
  const [farmersCount, setFarmersCount] = useState(0);
  const [availablePlants, setAvailablePlants] = useState(0);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    for (let i = 0; i < 101; i++) {
      setTimeout(() => {
        setFarmersCount(i);
      }, i * 10)
    }
  }, []);

  useEffect(() => {
    for (let i = 0; i < 51; i++) {
      setTimeout(() => {
        setAvailablePlants(i);
      }, i * 10)
    }
  }, []);


  return (
    <div className="containerHome">
      <div className="heroSection">
        <Navbar />
        <div className='heroTitle'>
          <div className='urban'>
            <p>Urban Farming in Toronto</p>
          </div>
          <div className='mainTitle'>
            <h1>AI-based full cycle Plant management<br></br>system for
              urban<span className='gredents'> farmers</span>
            </h1>
            <p className='titlePara'>AI Farming is a full-cycle AI-based plant management system for urban farmers in Canada. It helps you to plant starting from planting seeds to harvesting
              by providing real-time guidelines based on your area, current weather and plant updates.</p>
          </div>
          <div className='heroButtons'>
            <div className='navRight2'>
              <NavLink className='tryDemo' to="/TryDemo">
                <div className='demoText'>Try our demo</div>
                <div className='arrow'>
                  <img className='imgArrow' src="./src/assets/arrow-right.png" alt="" />
                </div>
              </NavLink>
            </div>
            <div className='navRight1'>
              <NavLink className='tryDemo' to="/Plants">
                <div className='demoText'>All plant information</div>
                <div className='arrow'>
                  <img className='imgArrow' src="./src/assets/arrow-right.png" alt="" />
                </div>
              </NavLink>
            </div>
          </div>
          <div className='statsContainer'>
            <div className='statItem'>
              <p className='number'>{farmersCount}+</p>
              <p className='description'>Farmers Joined</p>
            </div>
            <div className='statItem'>
              <p className='number'>{availablePlants}+</p>
              <p className='description'>Available Plants</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Flow />
        <PlantHome />
        <BlogHome />
        <ContactCard />
        <Footer />
      </div>
    </div>
  )
}

export default Home