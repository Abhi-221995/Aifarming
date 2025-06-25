import './blogDetailStyle.css'
import { useContext, useState, useEffect } from "react"
import { PlantContext } from "../Contextapi/PlantContext"
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../footer/Footer';

function BlogDetails() {

    const { blogdata, selectedBlog, setSelectedBlog } = useContext(PlantContext);
    const { id } = useParams

    const [currentBlog, setCurrentBlog] = useState(selectedBlog);

    useEffect(() => {
        console.log(currentBlog, id)
        if (!currentBlog && id) {

            const foundBlog = blogdata.find(blog => blog.id === parseInt(id));
            if (foundBlog) {
                setCurrentBlog(foundBlog);
            }
        }
    }, [id, blogdata, currentBlog, setSelectedBlog]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <div className="blogDetailContainerMain">
            <div className='blogcontainerhead'>
                <div className="blogDetailsHeader">
                    <Navbar />
                    <div className='detailsHeader'>
                        <h1>{currentBlog.blogheading1}</h1>
                        <p>{currentBlog.blogdesc}</p>
                    </div>
                </div>
                <div>
                    <p style={{padding:"30px 0px 20px 150px"}}><a href="/Blog">All Blogs</a></p>
                </div>
                <div className='blogDetailsBody'>
                    <div className='blogBodyImageContainer'>
                        <img src={currentBlog.blogimg1} alt="blogimage" />
                        <div>
                            <p>{currentBlog.blogindesc1}</p>
                        </div>
                    </div>
                    <div className='blogBodyImageContainer'>
                        <h1>{currentBlog.bloginheading2}</h1>
                        <img src={currentBlog.blogimg2} alt="blogimage" />
                        <div>
                            <p>{currentBlog.blogindesc2}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default BlogDetails