import React, { useEffect , useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../Components/Header.jsx";
import Navbar from "../Components/Navbar.jsx";
import Category from "../Components/Category.jsx";
import Recommendation from "../Components/Recommendation.jsx";
// import Footer from "./components/Footer.jsx";
import "../index.css";


const categories = [
  { name: "Grains", image: "/wheat-sack.png" },
  { name: "Fruits", image: "fruits.png" },
  { name: "Nuts", image: "/nuts.png" },
  { name: "Vegetables", image: "/vegetable.png" },
  { name: "Spices", image: "/spices.png" },
  { name: "Oils", image: "/olive-oil.png" }
];

// const recommendations = [
//   { name: "Rice", image: "rice.jpg", farmer: "Ram Kumar", rating: 4.5, price: 3000, time: "July" },
//   { name: "Wheat", image: "wheat.jpeg", farmer: "Suresh Yadav", rating: 4.2, price: 2500, time: "November" },
//   { name: "Sugarcane", image: "sugar.jpeg", farmer: "Rajesh Verma", rating: 4.3, price: 3200, time: "September" },
//   { name: "Millet", image: "millet.jpeg", farmer: "Mahesh Patil", rating: 4.6, price: 2700, time: "August" },
//   { name: "Cotton", image: "cotton.jpeg", farmer: "Dinesh Kumar", rating: 4.4, price: 3500, time: "December" },
//   { name: "Sunflower", image: "sunflower.jpeg", farmer: "Mohan Lal", rating: 4.3, price: 2800, time: "April" },
//   { name: "Apple", image: "/cat_images/apple_crop.jpg", farmer: "Lal", rating: 4.3, price: 2800, time: "April" },
//   { name: "Groundnut", image: "groundnut_crop.webp", farmer: "Satish Reddy", rating: 4.2, price: 3300, time: "May" },
//   { name: "Mustard", image: "mustard_crop.jpg", farmer: "Ravi Joshi", rating: 4.7, price: 2600, time: "February" },
//   { name: "Tea", image: "tea_crop.jpeg", farmer: "Subhash Choudhary", rating: 4.8, price: 4500, time: "April" },


// ];

function Dashboard() {
    const navigate = useNavigate();
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const res = await fetch("api/v1/contractfarm/allcrops", {
          credentials: "include",
        });
        const data = await res.json();
        setCrops(data);
      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    };

    fetchCrops();
  }, []);
  
  return (
    <div>
      <Header />
      <Navbar />
      <section className="categories-section">
        <div className="categories-container">
        <h2 className="categories-heading">Categories</h2>
        <div className="categories">
          {categories.map((category, index) => (
            <Category key={index} name={category.name} image={category.image} />
          ))}
        </div>
        </div>
      </section>
      <section className="recommendations">
        <h2>All Available Crops</h2>
        <div className="recommendation-crops">
          {crops.map((crop, index) => (
            <Recommendation
              // key={index}
              // name={crop.crop_name}
              // image={crop.image}
              // farmer={crop.farmerName}
              // rating={4 + Math.random().toFixed(1)} 
              // price={crop.price}
              // time={
              //   crop.harvestDate
              //     ? new Date(crop.harvestDate).toLocaleString('default', { month: 'long' })
              //     : "N/A"
              // }
              crop={crop}
              key={index}
            />
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
}

export default Dashboard;
