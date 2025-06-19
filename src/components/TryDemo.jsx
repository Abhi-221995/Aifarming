import Navbar from "./Navbar";
import Footer from './footer/Footer';
import './tryDemoStyle.css'

function TryDemo(){
    return(
        <div className="demoMainContainer">
        <Navbar/>
        <div className="demologinContainer">
              <div className="demoCard">
                 <div>
                    <img src="https://aifarming.ca/wp-content/uploads/2025/01/image-18.png" alt="logo" />
                 </div>
                 <div>
                    <h2>Start With email</h2>
                    <p style={{color:"#333",padding:"20px"}}>To continue signing up,please enter your email <br />for varification with
                    an one time code
                    </p>
                    <div>
                        <label htmlFor="email">Email</label><br/>
                        <input className="emailInput" type="email" placeholder="Email"/>
                    </div>
                    <button className="demobtn">Continue with Email</button>
                 </div>
              </div>
        </div>
        <Footer/>
        </div>
    )
};

export default TryDemo