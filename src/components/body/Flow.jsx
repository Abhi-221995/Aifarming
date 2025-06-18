import './flowstyle.css'
import Cards from './Cards'
function Flow(){
    const data=[
        {
            id: 1,
            image: './src/assets/step1.png',
            image2: 'https://aifarming.ca/wp-content/uploads/2025/01/step1.png',
            heading:"01",
            subheading:"Sign Up with your location",
            description:"Sign up for AI Farming with your location details, and our AI-powered platform will recommend the best plants for your growing conditions. You’ll also receive personalized updates and reminders based on your location for a smooth and successful farming experience.",
        },
        {
            id: 2,
            image:  './src/assets/step2.png',
            image2: 'https://aifarming.ca/wp-content/uploads/2025/01/step2.png',
            heading:"02",
            subheading:"Sign Up with your location",
            description:"Sign up for AI Farming with your location details, and our AI-powered platform will recommend the best plants for your growing conditions. You’ll also receive personalized updates and reminders based on your location for a smooth and successful farming experience.",
        },
         {
            id: 3,
            image: './src/assets/step3.png',
            image2: 'https://aifarming.ca/wp-content/uploads/2025/01/step3.png',
            heading:"03",
            subheading:"Manage everything at one place",
            description:"Manage your gardening experience in one place. Track plant growth, schedule tasks like watering and fertilizing, and stay organized with personalized tips and updates. Whether indoors, outdoors, or on a rooftop, our platform makes your gardening journey smooth and efficient",
        },
        {
            id: 4,
            image:  './src/assets/step4.png',
            image2: 'https://aifarming.ca/wp-content/uploads/2025/01/step4.png',
            heading:"04",
            subheading:"Receive Regular Instructions",
            description:"Our platform generates regular instructions and reminders for your plants, based on their specific needs. We’ll keep you updated on watering schedules, fertilizer applications, and any potential pest issues, so you can enjoy a bountiful harvest.",
        }
    ];
    return(
        <div className="flowContainer">
        <div className="flowHeader">
            <div className="flowcard">
                <p>Checkout out process</p>
            </div>
            <div className='flowContent'>
                <h2>Are you doing it in your<br></br> home, rooftop or <span className='gredents'>backyard?</span></h2>
            </div>
            <div className='flowPara'>
                <p>Whether you’re growing plants at home, on your rooftop, or in your<br></br> backyard, we make it simple and efficient for you!</p>
            </div>
        </div>
         <Cards data={data}/>
        </div>
    )
}

export default Flow