  // import React from 'react'

  // import Navbar from './components/Navbar'

  // const Home = () => {
  //     return (
  //         <div home-page>
  //             <Navbar />
  //             <div className="about">
  //       <div className="about-content">
  //         <h1>Empowering farmers</h1>
  //         <h3>Secure farming through partnerships</h3>
  //         <p>
  //           Farm Easy is revolutionizing agriculture in Hyderabad by facilitating contract farming, 
  //           where buyers and farmers establish agreements in advance to shield farmers from market fluctuations. 
  //           Our innovative platform goes beyond contracts; we provide crop disease detection, 
  //           tailored crop recommendations, and fertilizer guidance to ensure optimal yields. 
  //           Join us in transforming farming into a more stable and profitable venture for all stakeholders involved.
  //         </p>
  //       </div>
  //       <div className="about-image">
  //         <img src="about_left.jpg" alt="Farming Field" />
  //       </div>
  //     </div>
  //         </div>
  //     )
  // }

  // export default Home


  import React from "react";
  import Navbar from "../../Components/FarmerComp/Navbar";
  import { useNavigate } from "react-router-dom";
  import '../../farmerstyles.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';
import Cropdiseaseprediction from "./Cropdiseaseprediction";
  const services = [
    {
      id: 1,
      title: "Contract Farming",
      description: "Secure your agricultural income with contract farming agreements.",
      image: "contract_farming.jpg",
      path: "/contract-farming", // Path for Contract Farming page
      icon: <FontAwesomeIcon icon={faHandshake} />,
    },
    {
      id: 2,
      title: "Crop Disease Detection",
      description: "Protect your crops with advanced disease detection technology.",
      image: "crop_disease.webp",
      path: "/cropdisease", // Path for Crop Disease Detection page
    },
    // {
    //   id: 3,
    //   title: "Fertilizer Recommendations",
    //   description: "Enhance crop growth with tailored fertilizer advice.",
    //   image: "fertilizer_recom.jpg",
    //   path: "/fertilizer-recommendations",
    // },
    {
      id: 3,
      title: "Crop Recommendation",
      description: "Get insights on the best crops to grow based on soil and climate.",
      image: "crop_recomm.jpg",
      path: "/cropRecommendation",
    },
    {
      id: 4,
      title: "Fertilizer Recommendation",
      description: "Leverage smart IoT devices to monitor and automate farming activities.",
      image: "/fertilizer_recom.jpg",
      path: "/fertilizer", // Path for IoT-Based Farming page
    },
  ];

  const Farmerhome = () => {
    const navigate = useNavigate();
    return (
      <div className="home-page">
        <Navbar />
        <div className="head-content">
          <img src="crop_background.jpg" alt="farm" />
          <p class="text-overlay"><span style={{color:"ActiveCaption", fontFamily: "cursive"}}>One Stop</span> <br/> <span style={{color:"#fce90f", fontFamily: "sans-serif"}}>for all farmer needs</span></p>
        </div>
        <div className="f-services-grid">
        {services.map((service) => (
          <div
            key={service.id}
            className="f-service-card"
            onClick={() => service.path && navigate(service.path)}
            style={{ cursor: service.path ? "pointer" : "default" }}
          >
            <img src={service.image} alt={service.title} className="service-img" />
            <div className="f-service-content">
              {/* {icon} */}
              {service.icon && <div className="service-icon">{service.icon}</div>}
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    );
  };

  export default Farmerhome;
