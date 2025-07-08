import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Recommendation from "../Components/Recommendation";

function WishlistPage() {
  const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || []);

  return (
    <div>
      <Header />
      <div className="recommendation-container">
        <h2>Your Wishlist</h2>
        <div className="recommendation-crops">
          {wishlist.length > 0 ? (
            wishlist.map((item, index) => <Recommendation key={index} {...item} />)
          ) : (
            <p>No items in wishlist.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default WishlistPage;
