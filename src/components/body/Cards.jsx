import {NavLink} from 'react-router-dom'
import './cardsStyle.css'
import ArrowImage from '../../assets/arrow-right.png'
function Cards({data}){
    return(
        <div className="cardContainer">
         {
            data.map((item , index)=>( 
               <div key={item.id} className={`cardsItem ${index %2 !==0 ? 'cardReversed' : ''}`}>
                 <div className="cardImage">
                   <img className="imageSize" src={item.image}/>
                 </div>
                 <div className="cardDescription">
                   <div>
                   <h1 className={`numberHeading  ${index !== 0 && 3 ? 'iconcolor' : ' '}`}>{item.heading}</h1>
                   <img className='headImage' src={item.image2} alt="image"/>
                   </div>
                   <h3 className='cardSubheading'>{item.subheading}</h3>
                   <p className='cardParagraph'>{item.description}</p>
                   <div className='cardButtondiv'>
                   <NavLink to='/TryDemo' style={{textDecoration: "none"}}>
                   <button className='cardButton'>
                    <div className='buttonText'> <p>Get Started</p></div>
                    <div className='arrow1'>
                    <img className='imgArrow1' src={ArrowImage}/>
                    </div> 
                   </button>
                   </NavLink> 
                   </div>
                 </div>
                </div>   
            ))
          }
          
          <div className='partnerContainer'>
            <div className='partnerImage'>
               <img className='partnerImage1' src="https://aifarming.ca/wp-content/uploads/2025/01/plant-partner.jpg" alt="partnerimg" />
            </div>
            <div className='partnerDesc'>
                 <div className='descUp'>
                  <p>Let's start a revolution</p>
                 </div>
                <div className='descHeader'>
                  <h1>Why choose us to be <br/> your plant <span className='gredents'>partner</span></h1>
                  <p className='descHeaderPara'>Choose us for expert guidance, personalized care, and a hassle-free<br/> gardening experience</p>
                </div>
                <div className='descriptionCards'>
                    <div className='leftCards'>
                       <div className='AiPowerCard'>
                        <div className='imgiconsouter'>
                        <img className='CardIcons' src="https://aifarming.ca/wp-content/uploads/2025/01/AI-icon.png" alt="Aiicon" />
                        </div>
                        <h3 className='CardsHeading'>AI-Powered Precision</h3>
                        <p className='CardsDescription'>Our AI platform optimizes plant <br/> growth with personalized care tips.</p>
                       </div>
                       <div className='ExperCard'>
                        <div className='imgiconsouter'>
                        <img className='CardIcons' src="https://aifarming.ca/wp-content/uploads/2025/01/expert-solution-icon.png" alt="solutionicon" />
                        </div>
                        <h3 className='CardsHeading'>Expert Support</h3>
                        <p className='CardsDescription'>Our expert team is here to support all <br/> urban farmers, beginners or <br/> experienced</p>
                       </div>
                    </div>
                    <div className='rightCards'>
                        <div className='sustainableCards'>
                        <div className='imgiconsouter'>
                         <img className='CardIcons' src="https://aifarming.ca/wp-content/uploads/2025/01/solution-icon.png" alt="solution" />
                         </div>
                         <h3 className='CardsHeading'>Sustainable Solutions</h3>
                         <p className='CardsDescription'>AI-Farming promotes sustainability <br/> with eco-friendly practices for urban <br/> farming</p>
                        </div>
                        <div className='PersonalizedCards'>
                          <div className='imgiconsouter'>
                          <img className='CardIcons' src="https://aifarming.ca/wp-content/uploads/2025/01/guidance-icon.png" alt="guidance" />
                          </div>
                          <h3 className='CardsHeading'>Personalized Guidance</h3>
                          <p className='CardsDescription'>Get tailored advice for your unique <br/> farming needs and goals</p>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        
        </div>
    )
}

export default Cards