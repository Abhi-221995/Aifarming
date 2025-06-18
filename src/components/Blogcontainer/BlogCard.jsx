import React from 'react';

function BlogCard({ item, handleblogDetails, showImage = true }) {
    return (
        <div key={item.id} className='blogContainer'>
            <div className='blogDate'>
                <p>
                    <img 
                        style={{paddingTop:"5px"}} 
                        src="https://aifarming.ca/wp-content/uploads/2025/01/calender-icon.png" 
                        alt="calender" 
                    /> 
                    {item.date}
                </p>
            </div>
            
            {/* Conditionally render blog image based on showImage prop */}
            {showImage && (
                <div className="blogImage">
                    <img className="imageblogs" src={item.blogimg1} alt="blogimg" />
                </div>
            )}
            
            <div>
                <h3>{item.blogheading1}</h3>
            </div>
            
            <div>
                <p style={{color:"rgb(46, 45, 45)"}}>{item.blogdesc}</p>
            </div>
            
            <div className="plantHeaderButtton">
                <button 
                    className='cardButton'
                    onClick={() => handleblogDetails(item)} 
                    style={{ gap: "20px", width:"130px" }}
                >
                    <div className='buttonText'>
                        <p>Read More</p>
                    </div>
                    <div className='arrow1'>
                        <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="arrow" />
                    </div>
                </button>
            </div>
        </div>
    );
}

export default BlogCard;

{/* <div className="blogBodyContainer">
                <div className='blogCardContainer'>
                    {sliceBlogCard.map((item, index) => (
                        <BlogCard 
                            key={item.id}
                            item={item}
                            handleblogDetails={handleblogDetails}
                            showImage={true} // Show image in Blog component
                        />
                    ))}
                </div>
                </div> */}