import Navbar from "../Navbar"
import Footer from "../footer/Footer"
import './blogStyle.css'
import './blogHomeStyle.css'
import { PlantContext } from '../Contextapi/PlantContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import Arrow from "../../assets/arrow-right.png";
function Blog() {
    
    const { blogdata, setselectedBlog } = useContext(PlantContext);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, []);

    const postPerPage =9;

    const totalPages = Math.ceil(blogdata.length / postPerPage);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = blogdata.slice(indexOfFirstPost,indexOfLastPost);

    const paginate = (pageNumber)=> setCurrentPage(pageNumber);

    const nextPage = ()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    };

    const prevPage =()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    };

    const pageNumbers =[]

    for(let i =1; i<= totalPages; i++ ){
        pageNumbers.push(i)
    }

    const navigate = useNavigate();

    // const sliceBlogCard = blogdata.slice(0, 4);

    const handleblogDetails = (blog) => {
        setselectedBlog(blog);
        navigate(`./${blog.id}`);
    };
   
    return (
        <div className="blogMainContainer">
            <div className="blogMainHeader">
                <Navbar />
                <div className="blogHeaderCont">
                    <h1 style={{ paddingBottom: "20px", fontSize: "xx-large" }}>Our latest <span className='gredents'>article</span></h1>      
                    <p style={{ color: "rgb(123, 127, 116)" }}>Explore the latest insights and trends in farming industry on the AI-<br/>Farming’s Blog. Stay informed and inspired.</p>
                </div>
            </div>
            <div className="blogBodyContainer">
               <div className='blogCardContainer'>
                    {
                        currentPosts.map((item, index) => (
                            <div key={item.id} className='blogContainer'>
                                <div className='blogDate'>
                                    <p> <img style={{paddingTop:"5px"}} src="https://aifarming.ca/wp-content/uploads/2025/01/calender-icon.png" alt="calender" /> {item.date}</p>
                                </div>
                                <div className="blogImage">
                                   <img className="imageblogs" src={item.blogimg1} alt="blogimg" />
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
                                            <img className='imgArrow1' src={Arrow} alt="arrow" />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div>
    
                {totalPages > 1 && ( 
                    <div className="pagination">
                        <button onClick={prevPage} disabled={currentPage === 1} className="pagination-button">
                            <img src="https://aifarming.ca/wp-content/uploads/2025/01/prev-icon.png" alt="Previous" className="pagination-arrow" /> 
                            <p>Previous</p>  
                        </button>
                        <ul className="pagination-numbers">
                            {pageNumbers.map(number => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={`pagination-number-button ${currentPage === number ? 'active' : ''}`}
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <button onClick={nextPage} disabled={currentPage === totalPages} className="pagination-button">
                            <p>Next</p>
                            <img src="https://aifarming.ca/wp-content/uploads/2025/01/next0icon.png" alt="Next" className="pagination-arrow" />
                        </button>
                    </div>
                )}
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Blog