import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login, SignUp } from "../Components/Authen";
import "../styles.css";
// import "./App.css";
// import "./index.css";

const services = [
    {
        id: 1,
        title: "Contract farming",
        description: "Secure your agricultural income with contract farming agreements.",
        details: "Contract farming is a game-changer for farmers and buyers alike. By entering into agreements in advance, farmers can secure better prices and ensure their produce reaches the market without the fear of price fluctuations. This proactive approach provides farmers with the stability they need to plan their crops effectively. Buyers benefit from a consistent supply of quality produce, enabling them to meet market demands efficiently. With Farm Easy, contract farming becomes a seamless experience that fosters trust and collaboration between all parties involved, ensuring a win-win situation for everyone.",
        image: "contract_farming.jpg"
        
    },
    {
        id: 2,
        title: "Crop disease detection",
        description: "Protect your crops with advanced disease detection technology.",
        details: "Detecting crop diseases early is crucial for maximizing yield and maintaining plant health. Farm Easy employs cutting-edge technology to monitor crops and identify potential diseases before they can spread. Our platform analyzes data and provides farmers with timely alerts and actionable insights, allowing them to take preventive measures. By acting swiftly, farmers can save their crops and reduce losses significantly. With our disease detection services, you can ensure healthier plants and more productive harvests, leading to greater profitability and sustainability in your farming practices.",
        image: "crop_disease.jpg"
        
    },
    {
        id: 3,
        title: "Fertilizer recommendations",
        description: "Enhance crop growth with tailored fertilizer advice.",
        details: "Applying the right fertilizer in the right amount is essential for healthy crops and high yields. Smart AgriTech provides AI-driven recommendations tailored to soil type, crop needs, and weather conditions.Our system analyzes soil nutrients and suggests the perfect mix of Nitrogen (N), Phosphorus (P), and Potassium (K) along with essential micronutrients. This ensures balanced nutrition, improving plant health, increasing productivity, and preventing soil degradation.By optimizing fertilizer use, farmers can reduce costs, prevent over-fertilization, and enhance sustainability. Make informed decisions and grow smarter with precise, eco-friendly fertilizer management!",
        image: "fertilizer_recom.jpg"
       
    },
    {
        id: 4,
        title: "Crop recommendation",
        description: "Get insights on the best crops to grow based on soil and climate.",
        details: "Using AI and historical data, our system helps farmers select the most suitable crops for their land, ensuring maximum productivity.",
        image: "crop_recomm.jpg",
        
    }
];
const LandingPage = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const navigate = useNavigate();
    return (
        <div>
            <div className={showLogin || showSignUp ? "blur" : ""}>
                <nav className="navbar">
                    <div className="navbar-logo">Agri Tech</div>
                    <div className="navbar-container">
                        <ul className="navbar-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#aboutt">About</a></li>
                            <li><a href="#servicess">Services</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>

                        <button className="contact-button login" onClick={() => setShowLogin(true)}>
                            Login
                        </button>
                    </div>
                </nav>

                <div id="home" className="home">
                    <div className="home-content">
                        <img src="header_img.jpeg" alt="" />
                        <div className="text-content">
                            <h1>Agri Tech</h1>
                            <p>Secure farming with smart contracts & AI insights</p>
                            <button className="get-started">
                                <a href="#servicess">View Services</a>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="aboutt" className="aboutt">
                    <div className="aboutt-content">
                        <h1>Empowering farmers</h1>
                        <h3>Secure farming through partnerships</h3>
                        <p>
                            Farm Easy is revolutionizing agriculture in Hyderabad by facilitating contract
                            farming, where buyers and farmers establish agreements in advance to shield farmers
                            from market fluctuations. Our innovative platform goes beyond contracts; we provide
                            crop disease detection, tailored crop recommendations, and fertilizer guidance to
                            ensure optimal yields. Join us in transforming farming into a more stable and
                            profitable venture for all stakeholders involved.
                        </p>
                    </div>
                    <div className="aboutt-image">
                        <img src="about_left.jpg" alt="Farming Field" />
                    </div>
                </div>

                <div id="servicess" className="servicess-container">
                    <div className="top-section">
                        <div className="servicess-text">
                            <h2>Farm with confidence</h2>
                            <p>Secure contracts and expert guidance</p>
                        </div>
                        <div className="contract-farming-card">
                            <img src="contract_farming.jpg" alt="Contract Farming" className="service-img" />
                            <div className="servicess-content">
                                <h3>Contract farming</h3>
                                <p>Secure your agricultural income with contract farming agreements.</p>
                                <button onClick={() => setSelectedService(services[0])}>Read More</button>
                            </div>
                        </div>
                    </div>

                    <div className="servicess-grid">
                        {services.slice(1).map((service) => (
                            <div key={service.id} className="servicess-card">
                                <img src={service.image} alt={service.title} className="service-img" />
                                <div className="servicess-content">
                                    <h3>{service.title}</h3>
                                    <p>{service.description}</p>
                                    <button onClick={() => setSelectedService(service)}>Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {selectedService && (
                        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
                            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                                <span className="close-button" onClick={() => setSelectedService(null)}>
                                    &times;
                                </span>
                                <div className="modal-img">
                                    <img src={selectedService.image} alt={selectedService.title} className="modal-img" />
                                </div>
                                <div className="modal-text">
                                    <h2>{selectedService.title}</h2>
                                    <p>{selectedService.details}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div id="contact" className="contact-container">
                    <h2 className="contact-title">Get in touch</h2>
                    <p className="contact-subtitle">We're here to assist you!</p>
                    <form className="contact-form">
                        <label htmlFor="name">
                            Name <span>*</span>
                        </label>
                        <input type="text" id="name" placeholder="Enter your name" required />

                        <label htmlFor="email">
                            Email address <span>*</span>
                        </label>
                        <input type="email" id="email" placeholder="email@website.com" required />

                        <label htmlFor="phone">
                            Phone number <span>*</span>
                        </label>
                        <input type="tel" id="phone" placeholder="95674-86488" required />

                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Write your message here..."></textarea>

                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </form>
                </div>
            </div>

            {showLogin && (
        <Login setShowLogin={setShowLogin} setShowSignUp={setShowSignUp} />
      )}
      {showSignUp && (
        <SignUp setShowSignUp={setShowSignUp} setShowLogin={setShowLogin} />
      )}
        </div>
    );
};

export default LandingPage
