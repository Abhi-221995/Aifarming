import './blogHomeStyle.css'
import { PlantContext } from '../Contextapi/PlantContext';
import { useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
function BlogHome() {

    const { blogdata, setselectedBlog } = useContext(PlantContext);

    const navigate = useNavigate();

    const sliceBlogCard = blogdata.slice(0, 3);

     const handleblogDetails = (blog) => {
        setselectedBlog(blog);
        navigate(`/blog/${blog.id}`);
    };
      
    return (
        <div className='blogHomeContainer'>
            <div className="blogHomeHeader">
                <div className="blogsuperHeader">
                    <p>Read from our blogs</p>
                </div>
                <div className="blogHeaderText">
                    <h1>Checkout the latest <span className='gredents'>articles</span> <br /> that helps you grow</h1>
                </div>
                <div className="blogHeaderLower">
                    <p>Explore articles with tips and insights to boost your gardening success.</p>
                    <div className="plantHeaderButtton">
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
                <div className='blogCardContainer'>
                       


                    {
                        sliceBlogCard.map((item, index) => (
                            <div key={item.id} className='blogContainer'>
                                <div className='blogDate'>
                                    <p> <img style={{paddingTop:"5px"}} src="https://aifarming.ca/wp-content/uploads/2025/01/calender-icon.png" alt="calender" /> {item.date}</p>
                                </div>
                                <div>
                                    <h3>{item.blogheading1}</h3>
                                </div>
                                <div>
                                    <p style={{color:"rgb(46, 45, 45)"}}>{item.blogdesc}</p>
                                </div>
                                <div className="plantHeaderButtton">
                                    <button className='cardButton'onClick={() => handleblogDetails(item)} style={{ gap: "20px", width:"130px" }}>
                                        <div className='buttonText'> <p>Read More</p></div>
                                        <div className='arrow1'>
                                            <img className='imgArrow1' src="./src/assets/arrow-right.png" alt="arrow" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default BlogHome