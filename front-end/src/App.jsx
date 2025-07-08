import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
// import BuyerhomePage from "./pages/buyer-homePage";
// import FarmerHomePage from "./pages/farmerHomePage";
import ContractFarming from "./pages/farmerPages/ContractFarming";
import Farmercontract from "./pages/farmerPages/Farmercontract";
import Farmerhome from "./pages/farmerPages/Home";
import Cropdiseaseprediction from "./pages/farmerPages/Cropdiseaseprediction";
import CropRecommendation from "./pages/farmerPages/CropRecommendation";
import Dashboard from "./pages/Dashboard.jsx";
import RecommendationDetails from "./pages/RecommendationDetails.jsx";
import FertilizerRecommendation from "./pages/farmerPages/FertilizerRecommen.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import WishlistPage from "./pages/WishlistPage.jsx";
import SearchResults from "./pages/SearchResults.jsx";

import ContractsPage from "./pages/ContractsPage.jsx";
// import Dashboard from "./pages/buyerPages/Dashboard";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/buyerhomePage" element={<BuyerhomePage/>} /> */}
        <Route path="/contract-farming" element={<ContractFarming />} />
      <Route path="/contracts" element={<Farmercontract/>} />
      <Route path="/farmer" element={<Farmerhome/>} />
      {/* <Route path="/buyer" element={<Dashboard/>} /> */}

            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/cropdisease" element={<Cropdiseaseprediction />} />
            <Route path="/croprecommendation" element={<CropRecommendation />} />
            <Route path="/fertilizer" element={<FertilizerRecommendation />} />
              <Route path="/search" element={<SearchResults/>} />
      
              <Route path="/details" element={<RecommendationDetails />} />
      
              <Route path="/category/:categoryName" element={<CategoryPage />} />
      
              <Route path="/wishlist" element={<WishlistPage />}/>
      
              <Route path="/contractsb" element={<ContractsPage />} />
      </Routes>
    </Router>
  );
};
// C:\Users\ragad\OneDrive\Desktop\farmeasy\front-end\src\pages\buyer-homePage.jsx
export default App;