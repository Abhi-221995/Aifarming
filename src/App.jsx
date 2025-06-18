import { Route, Routes, Router } from "react-router-dom";
import Home from "./components/Home";
import AboutUS from "./components/AboutUs";
import Plants from "./components/PlantsCom/Plants";
import Blog from "./components/Blogcontainer/Blog";
import BlogDetails from "./components/Blogcontainer/BlogDetails";
import ContactUs from "./components/ContactUs";
import TryDemo from "./components/TryDemo";
import PlantDetails from "./components/PlantsCom/PlantDetails"


function App() {
  return (
    <>
      
        <Routes>  
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUS />} />
          <Route path="/Plants" element={<Plants />} />
          <Route path="/:id" element={<PlantDetails />}/>
          <Route path="Plants/:id" element={<PlantDetails />}/>
          <Route/>
          <Route path="/Blog" element={<Blog />} />
          {/* <Route path="/:id" element={<BlogDetails/>}/> */}
          <Route path="Blog/:id" element={<BlogDetails/>}/>
          <Route/>
          <Route path="/ContactUs" element={<ContactUs />}/>
          <Route path="/TryDemo" element={<TryDemo />} />
          
        </Routes >
    </>
  )
}

export default App
