import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";
import Footer from './footer/Footer';
import './aboutusStyle.css';
import FarmingRoof from '../assets/aboutusimg/farming-at-roof-img.png'
import FarmingWater from '../assets/aboutusimg/farming-water-img.png'
import Gardening from '../assets/aboutusimg/gardening-img.png'
import Garder from '../assets/aboutusimg/garder-img.png'
import Image1 from '../assets/aboutusimg/image-1.png'
import ArrowImg from '../assets/aboutusimg/arrow-icon.png'
import { useState, useEffect } from "react"
function AboutUs() {
  const [farmersCount, setFarmersCount] = useState(0);
  const[availablePlants, setAvailablePlants]=useState(0);
  const[ratio,setRatio]= useState(0);
    useEffect(() => {
      for (let i = 0; i < 101; i++) {
        setTimeout(() => {
          setFarmersCount(i);
        }, i*100)
      }
    }, []);
    
     useEffect(() => {
      for (let i = 0; i < 51; i++) {
        setTimeout(() => {
          setAvailablePlants(i);
        }, i*100)
      }
    }, []);
    useEffect(() => {
      for (let i = 0; i < 98; i++) {
        setTimeout(() => {
          setRatio(i);
        }, i*100)
      }
    }, []);
  return (
    <div className="aboutusMainContainer">
      <div className="aboutusContainer">
        <Navbar />
        <div className="aboutusHeader">
          <div className="aboutAi">
            <div className="aiFarminghead">
              <p>About AI Farming</p>
            </div>
            <div>
              <h1 className="aiFarmingH1">Bringing the farm to <br /> your <span className='gredents'>home</span></h1>
            </div>
            <div>
              <p className="aiFarmingPara">
                AI Farming was founded to revolutionize urban agriculture with sustainable and innovative solutions. Our mission is to help
                individuals and communities grow fresh, nutritious produce anywhere. With expertise in agriculture, horticulture, and data science,
                we’ve created a platform that ensures optimal growing conditions, whether you’re in a city or a remote area.
              </p>
            </div>
            <div className="aboutHeaderButtton">
              <NavLink to='/Blog' style={{ textDecoration: "none" }}>
                <button className='cardButton' style={{ gap: "22px" }}>
                  <div className='buttonText'> <p>All Posts</p></div>
                  <div className='arrow1'>
                    <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="" />
                  </div>
                </button>
              </NavLink>
            </div>
          </div>
          <div className="aboutAiImage">
            <div className="aiImgHeadings">
              <div className="aiimgHeading">
                <p>AI-Farming</p>
              </div>
              <div className="aiimgHeading">
                <p>Technology</p>
              </div>
              <div className="aiimgHeading">
                <p>Innovation</p>
              </div>
              <div className="aiimgHeading">
                <p>Future</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutusProducts">
        <div className="aboutusPractices">
          <div className="practiceimgCont">
            <img className="practiceImage" src="../src/assets/aboutusimg/image.png" alt="practices" />
          </div>
          <div className="practiceimgDesc">
            <h2>Ready to revolutionize your <br /> farming practices?</h2>
          </div>
        </div>
        <div className="aboutAi aboutusCommunities">
          <div className="aiFarminghead">
            <p>About AI Farming</p>
          </div>
          <div>
            <h2 style={{ fontSize: "xx-large" }}>Empowering communities <br /> with fresh <span className='gredents'>produce</span></h2>
          </div>
          <div>
            <p style={{ fontSize: "large", color: "rgb(123, 127, 116)" }}>
              At AI Farming, we’re proud to be a part of the urban farming revolution in Canada. We believe that fresh,
              locally grown produce should be accessible to everyone, regardless of where they live.
            </p> <br></br>
            <p style={{ fontSize: "large", color: "rgb(123, 127, 116)" }}>
              Our platform empowers communities by making it easy and convenient to grow your own food, right at home.
            </p>
          </div>
          <div className="aboutHeaderButtton">
            <NavLink to='/Blog' style={{ textDecoration: "none" }}>
              <button className='cardButton' style={{ gap: "22px" }}>
                <div className='buttonText'> <p>Join Now</p></div>
                <div className='arrow1'>
                  <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="" />
                </div>
              </button>
            </NavLink>
          </div>
        </div>

      </div>
      <div className="aboutusGalleryContainer">
        <div className="galleryHead">
          <div className="aiFarminghead" style={{ width: "80px" }}>
            <p>Gallery</p>
          </div>
          <div style={{ fontSize: "x-large" }}>
            <h2>Urban farming</h2>
            <h2><span className='gredents'>gallery</span></h2>
          </div>
          <div>
            <p style={{ fontSize: "larger", color: "rgb(123, 127, 116)" }}>Discover the beauty of indoor and urban farming in our gallery, <br /> showcasing innovation and sustainability.</p>
          </div>
        </div>
        <div className="galleryContainer">
          <div className="galleryimgContainer">
            <img className="galleryimage" src={FarmingRoof} alt="farming" />
            <div className="overlay">
              <div className="overlaycont">
                <div className="aiimgHeading">
                  <p>Rooftop</p>
                </div>
                <div className="aiimgHeading">
                  <p>Farming</p>
                </div>
                <div className="aiimgHeading">
                  <p>Gardening</p>
                </div>
              </div>
              <div>
                <h3 className="imgoverlayDesc">Farming at rooftop</h3>
              </div>
            </div>
          </div>
          <div className="galleryimgContainer">
            <img className="galleryimage" src={FarmingWater} alt="farming" />
            <div className="overlay">
              <div className="overlaycont">
                <div className="aiimgHeading">
                  <p>Rooftop</p>
                </div>
                <div className="aiimgHeading">
                  <p>Farming</p>
                </div>
                <div className="aiimgHeading">
                  <p>Gardening</p>
                </div>
              </div>
              <div>
                <h3 className="imgoverlayDesc">Farming at rooftop</h3>
              </div>
            </div>
          </div>
          <div className="galleryimgContainer">
            <img className="galleryimage" src={Garder} alt="farming" />
            <div className="overlay">
              <div className="overlaycont">
                <div className="aiimgHeading">
                  <p>Rooftop</p>
                </div>
                <div className="aiimgHeading">
                  <p>Farming</p>
                </div>
                <div className="aiimgHeading">
                  <p>Gardening</p>
                </div>
              </div>
              <div>
                <h3 className="imgoverlayDesc">Farming at rooftop</h3>
              </div>
            </div>
          </div>
          <div className="galleryimgContainer">
            <img className="galleryimage" src={Gardening} alt="farming" />
            <div className="overlay">
              <div className="overlaycont">
                <div className="aiimgHeading">
                  <p>Rooftop</p>
                </div>
                <div className="aiimgHeading">
                  <p>Farming</p>
                </div>
                <div className="aiimgHeading">
                  <p>Gardening</p>
                </div>
              </div>
              <div>
                <h3 className="imgoverlayDesc">Farming at rooftop</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="aboutusMarketPlace">
        <div className="aboutAi">
          <div className="aiFarminghead" style={{ backgroundColor: "rgb(179, 230, 75)" }}>
            <p>AI farming Marketplace</p>
          </div>
          <div>
            <h1 className="aiFarmingH1" style={{ color: "#fff" }}>Turning Urban Farming into a <br /> Community <span className='gredents'>Experience </span></h1>
          </div>
          <div>
            <p className="aiFarmingPara" style={{ color: "#fff" }}>
              At AI Farming, we believe that urban farming can be more than just a personal hobby.
              It can be a community-building experience, where neighbors come together to share
              their harvests and support each other’s efforts. That’s why we’re excited to offer
              a community marketplace where everyone can sell their farm produce. Join us and become
              a part of the urban farming community today!
            </p>
          </div>
          <div className="aboutHeaderButtton">
            <NavLink to='/ContactUs' style={{ textDecoration: "none" }}>
              <button className='cardButton' style={{ gap: "15px" }}>
                <div className='buttonText'> <p>Contact us</p></div>
                <div className='arrow1'>
                  <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="" />
                </div>
              </button>
            </NavLink>
          </div>
          <div className="aboutusStats">
            <div className="aboutusStatItem">
              <p className="aboutUsNumber">{farmersCount}+</p>
              <p className="aboutusDescription">Farmers Joined</p>
            </div>
            <div className="aboutusStatItem">
              <p className="aboutUsNumber">{availablePlants}+</p>
              <p className="aboutusDescription">Available Plants</p>
            </div>
            <div className="aboutusStatItem successRatio">
              <p className="aboutUsNumber">{ratio}%</p>
              <p className="aboutusDescription">Success ratio</p>
            </div>
          </div>
        </div>
        <div className="abouusMarketplaceImage">
          <img className="aboutusMarketImg" src={Image1} alt="farming" />
        </div>
      </div>
      <div className="aboutusFeaturesContainer">
        <div className="aboutusFeatureHeading">
          <div className="aiFarminghead" style={{ width: "100px" }}>
            <p>Features</p>
          </div>
          <div>
            <h1>Why <span className='gredents'>Choose us</span></h1>
          </div>
          <div>
            <p style={{ fontSize: "large", color: "rgb(123, 127, 116)" }}>
              Experience excellence with our expertise, reliability, <br />
              and personalized solutions</p>
          </div>
        </div>
        <div className="featuresContainer">
          <div className="featureCard">
            <div className="featureCardImg">
              <img className="featurecardImage" src="https://aifarming.ca/wp-content/uploads/2025/01/Subtract.png" alt="subtract" />
              <div className="featurecardArrow">
                <img src={ArrowImg} alt="arrow" />
              </div>
            </div>
            <div className="featureCardDescription">
              <h1>Our Vision</h1>
              <p>At AI Farming, our vision is to create a world where fresh, locally grown produce is accessible to everyone, no matter where they live. We believe that urban farming has the power to transform our food systems and create more sustainable communities.
                Our goal is to make it easy and convenient for people to grow their own food, right at home.</p>
            </div>

          </div>
          <div className="featureCard">
            <div className="featureCardDescription">
              <h1>Our Expertise</h1>
              <p>Our team has a unique blend of expertise in agriculture, horticulture, and data science, which allows us to create cutting-edge solutions for urban farming. We use advanced AI algorithms to analyze environmental data and optimize growing conditions for each plant.
                We also leverage our expertise in sustainable agriculture.</p>
            </div>
            <div className="featureCardImg">
              <img className="featurecardImage" src="https://aifarming.ca/wp-content/uploads/2025/01/Subtract-1.png" alt="substract-1" />
              <div className="featurecardArrowRight">
                <img src="https://aifarming.ca/wp-content/uploads/2025/01/right-arrow-icon.png" alt="arrow" />
              </div>
            </div>
          </div>
          <div className="featureCard">
            <div className="featureCardImg">
              <img className="featurecardImage" src="https://aifarming.ca/wp-content/uploads/2025/01/Subtract-2.png" alt="subtract-2" />
              <div className="featurecardArrow">
                <img src={ArrowImg} alt="arrow" />
              </div>
            </div>
            <div className="featureCardDescription">
              <h1>Years of Experience</h1>
              <p>
                Our founders possess deep expertise in agriculture, horticulture, and technology, with a lifelong dedication to creating meaningful, sustainable solutions. Their passion for positively impacting lives drives our mission, making their knowledge and experience
                an invaluable resource for both our team and our customers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default AboutUs