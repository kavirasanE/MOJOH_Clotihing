import React from "react";
import SideMenu from "../components/Sidebar";
import DisplayContent from "../components/DisplayContent";

const Home = () => {
  const data = [
    {
      section: "Home",
      content: [
        { name: "Inside Amazon", URL: "Link", image: "Image.jpg" },
        { name: "Amazon Prime", URL: "Link", image: "Image.jpg" },
        { name: "Amazon Web Services", URL: "Link", image: "Image.jpg" }
        
      ]
    },
    {
      section: "Products",
      content: [
        { name: "Amazon Echo", URL: "Link", image: "Image.jpg" },
        { name: "Kindle", URL: "Link", image: "Image.jpg" },
        { name: "Fire TV Stick", URL: "Link", image: "Image.jpg" }
       
      ]
    }
  ];
  
  return (
    <div className="flex flex-row ">
     <SideMenu />
      <DisplayContent/>
    </div>
  );
};

export default Home;
