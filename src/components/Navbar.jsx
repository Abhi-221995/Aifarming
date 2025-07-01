import {NavLink, Link} from 'react-router-dom';
import './stylenav.css'
import { useState, useEffect } from 'react';
import Logo from "../assets/AifarmLogo.png";
import Arrow from "../assets/arrow-right.png";
import Menuicon from "../assets/menuicon.png";
import Closebtn from "../assets/close.png";
const Navbar = ()=>{

   const[isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
   const [isHidden, setIsHidden] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0)

   const toggleMobileMenu=()=>{
     setisMobileMenuOpen(!isMobileMenuOpen)
   };

   const closeMobileMenu=()=>{
     setisMobileMenuOpen(false)
   }

    const handleScroll = ()=>{
      if(window.scrollY > lastScrollY && window.scrollY >100){
        setIsHidden(true)
      }else{
        setIsHidden(false)
      }
      setLastScrollY(window.scrollY)
    }

    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);

      return()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    },[lastScrollY])

    return(
      <div className={`mainContainer ${isHidden ? 'hidden' : ''}`}>
      <div className='container'>
      <div className='navLeft'>
      <NavLink to="/">
      <img className='logoimg' src={Logo} alt="logo" />
      </NavLink>
      </div>  
      <div>
        <ul className='navMiddle'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/AboutUs" >About us</NavLink></li>
            <li><NavLink to="/Plants">Plants</NavLink></li>
            <li><NavLink to="/Blog">Blog</NavLink></li>
            <li><NavLink to="/ContactUs">Contact us</NavLink></li>
        </ul>
      </div>
      <div className='navRight'>
        <NavLink className='tryDemo' to="/TryDemo">
        <div className='demoText'>Try our demo</div>
        <div className='arrow'>
         <img className='imgArrow' src={Arrow} alt="arrow" />
        </div>
        </NavLink>
      </div>
      </div>
      <div className='mobileNav'>
           <div className='mobLogo'>
             <NavLink to="/">
              <img className='logomobil' src={Logo} alt="logo" />
             </NavLink>
           </div>
           <div className='mobilNavRight'>
            <NavLink className='tryDemo' to="/TryDemo">
              <div className='demoText'>Try our demo</div>
              <div className='arrow'>
              <img className='imgArrow' src={Arrow}/>
             </div>
            </NavLink>
           </div>
           <div className='mobilMenu'>
           <button onClick={toggleMobileMenu} className='btn'><img className='mobileImg' src={Menuicon} /></button> 
            <ul className={`navMiddle mobileNavPopout ${isMobileMenuOpen ? 'open' : ''}`}>
            <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
            <li><NavLink to="/AboutUs" onClick={closeMobileMenu}>About us</NavLink></li>
            <li><NavLink to="/Plants" onClick={closeMobileMenu}>Plants</NavLink></li>
            <li><NavLink to="/Blog" onClick={closeMobileMenu}>Blog</NavLink></li>
            <li><NavLink to="/ContactUs" onClick={closeMobileMenu}>Contact us</NavLink></li>
            <button onClick={closeMobileMenu} className='btn btnclose'><img className='mobileImg' src={Closebtn} /></button> 
            </ul>
           </div>

      </div>
      </div>
    );
};

export default Navbar