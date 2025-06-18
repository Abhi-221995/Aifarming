import Navbar from "./Navbar"
import Footer from "./footer/Footer"
import ContactCard from "./Contact/ContactCard"
import './contactUsStyle.css'
function ContactUs() {
    return (
        <div className="contactHomeContainer">
            <div className="contactUsHeader">
                <Navbar />
                <div className="contactUsHero">
                    <div>
                        <h1 style={{paddingBottom:"20px"}}>Let us know about <br />
                            your <span className='gredents'>problem</span></h1>
                        <p style={{color:"rgb(123, 127, 116)"}}>Share your issues with us, and we’ll provide <br/> the best solution.</p>
                    </div>
                </div>
            </div>
            <ContactCard />
            <Footer />
        </div>
    )
}

export default ContactUs