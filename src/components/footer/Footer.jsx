import './footerStyle.css'
import { NavLink, Link } from 'react-router-dom'
import Logo from "../../assets/AifarmLogo.png";
import Arrow from "../../assets/arrow-right.png"
function Footer() {
    return (
        <div className="footerContainer">
            <div className='footerHeader'>
                <div className="footeruperHeader" style={{ width: "200px", backgroundColor: "rgb(179, 230, 75)" }}>
                    <p style={{ color: "black" }}>Contact us</p>
                </div>
                <div>
                    <h1>Are you a kindergarten, school, or <br /> other educational <span className='gredents'>organization?</span></h1>
                </div>
                <div>
                    <p>If you are an organization and want to implement a plantation program for <br /> your students or employees, please contact AI Farming for further details.</p>
                </div>
                <div className="plantHeaderButtton">
                    <NavLink to='/TryDemo' style={{ textDecoration: "none" }}>
                        <button className='cardButton' style={{ gap: "12px", width: "130px" }}>
                            <div className='buttonText'> <p>Get in touch</p></div>
                            <div className='arrow1'>
                                <img className='imgArrow1' src={Arrow} alt="arrow" />
                            </div>
                        </button>
                    </NavLink>
                </div>
            </div>
            <div className='footerLinks'>
                <div className='footerCard'>
                    <img className='footerlogo' src={Logo} alt="logo" />
                    <p>AI Farming is a Canadian start-up helping urban
                        Canada improve farming, build a farmer community, eat healthy, and share happiness.</p>
                    <div className="plantHeaderButtton">
                        <NavLink to='/TryDemo' style={{ textDecoration: "none" }}>
                            <button className='cardButton' style={{ gap: "12px", width: "130px" }}>
                                <div className='buttonText'> <p>Get in touch</p></div>
                                <div className='arrow1'>
                                    <img className='imgArrow1' src={Arrow} alt="arrow" />
                                </div>
                            </button>
                        </NavLink>
                    </div>
                </div>
                <div className='footerNavbar'>
                    <h4>Navigation</h4>
                    <ul className='footerNavBarUl'>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/AboutUs">About us</NavLink></li>
                        <li><NavLink to="/Plants">Plants</NavLink></li>
                        <li><NavLink to="/Blog">Blog</NavLink></li>
                        <li><NavLink to="/ContactUs">Contact us</NavLink></li>
                    </ul>
                </div>
                <div className='footerCommon'>
                    <h4>Address</h4>
                    <p>26, Winston Crescent,</p>
                    <p>Whitby, Ontario,</p>
                    <p>Canada</p>
                </div>
                <div className='footerCommon'>
                    <h4>Follow Us</h4>
                    <p>FaceBook</p>
                    <p>Linkedln</p>
                    <p>Instagram</p>
                </div>
                <div className='footerCommon'>
                    <h4>Contact</h4>
                    <p>+1-437-775-7309</p>
                    <p>info@aifarming.com </p>
                </div>
            </div>
            <div className='footerCopyRight'>
                 <div>
                    <p>Copyright @ AI Farming 2025</p>
                 </div>
                 <div className='footerPolicy'>
                    <div>
                        <p>Privacy policy</p>
                    </div>
                    <div>
                        <p>Terms of use</p>
                    </div>
                 </div>
            </div>
             <div className='footerBottom'>
                <h1>Ai Farming</h1>
             </div>
        </div>
    )
}

export default Footer