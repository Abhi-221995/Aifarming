import './ContactStyle.css'

function ContactCard() {
    return (
        <div className="contactContainer">
            <div className="contactCard">
                <div className="contactDetailsHeader">
                    <div className="ContactuperHeader">
                        <p style={{ color: "black" }}>Contact us</p>
                    </div>
                    <div>
                        <h1>Drop a <span className='gredents'>request?</span></h1>
                    </div>
                    <div>
                        <p style={{color:"rgb(123, 127, 116)"}}>AI Farming, a Canadian company, empowers urban Canada to embrace <br /> farming, eat healthy, and spread happiness.</p>
                    </div>
                    <div className='contactDetails'>
                        <div className='contactTouch'>
                            <div className='contactEmail'>
                                <div className='ContactIconContainer'>
                                    <img src="https://aifarming.ca/wp-content/uploads/2025/01/envelop-icon.png" alt="email" />
                                </div>
                                <div>
                                    <p style={{color:"rgb(123, 127, 116)"}}>Get in touch</p>
                                    <p>+1-437-775-7309</p>
                                    <p>info@aifarming.com</p>
                                </div>
                            </div>
                            <div className='contactPhone'>
                                <div className='ContactIconContainer'>
                                    <img src="https://aifarming.ca/wp-content/uploads/2025/01/phone-icon.png" alt="phone" />
                                </div>
                                <div>
                                    <p style={{color:"rgb(123, 127, 116)"}}>Hours</p>
                                    <p>Mon-Fri: 9:00AM - 5:00PM Sat-Sun: On Call</p>
                                </div>
                            </div>
                        </div>
                        <div className='contactAddress'>
                            <div className='ContactIconContainer'>
                                <img src="https://aifarming.ca/wp-content/uploads/2025/01/map-icon.png" alt="map" />
                            </div>
                            <div>
                                <p style={{color:"rgb(123, 127, 116)"}}>Contact address</p>
                                <p>339/B, (Level 5), Ontario, Canada</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactFormContainer">
                    <div className='contactForm'>
                        <div className='contactFormName'>
                            <div>
                                <label htmlFor="fullname">Full Name</label> <br />
                                <input type="text" id='fullname' required placeholder='Type the Name'/>
                            </div>
                            <div>
                                <label htmlFor="Email">Email</label> <br />
                                <input type="email" id='Email' required placeholder='Type the Email'/>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="Number">Number</label> <br />
                            <input type="number" id='Number' required placeholder='Type the Number'/>
                        </div>
                        <div>
                            <label htmlFor="Message">Message</label> <br />
                            <textarea type="textarea" id='Message'  placeholder='Type your Message' />
                        </div>
                        <div>
                            <button className='contactbtn'>Submit all information</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ContactCard;