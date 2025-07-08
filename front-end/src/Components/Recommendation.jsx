  // import React from "react";
  // import { useNavigate } from "react-router";
  // import "../index.css";

  // function Recommendation({ crop }) {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     const { crop_name, image, farmerName, price } = crop;
  //     navigate("/details", {
  //       state:crop,
  //     });
  //   };

  //   return (
  //     <div className="recommendation" onClick={handleClick}>
  //       <img src="/tomato.webp" alt={`${crop.crop_name} by ${crop.farmerName}`} />
  //       <div className="recommendation-content">
  //         <p><b>Crop</b>: {crop.crop_name}</p>
  //         <p><b>Farmer</b>: {crop.farmerName}</p>
  //         <p><b>Rating</b>: {rating} / 5</p>
  //         <p><b>Price</b>: ₹{crop.price} per kg</p>
  //       </div>
  //     </div>
  //   );
  // }

  // export default Recommendation;



  // import React from "react";
  // import { useNavigate } from "react-router";
  // import "../index.css";

  // function Recommendation({ crop }) {
  //   const navigate = useNavigate();

  //   const handleClick = () => {
  //     navigate("/details", {
  //       state: crop,
  //     });
  //   };

  //   return (
  //     <div className="recommendation" onClick={handleClick}>
  //       <img
  //         src={crop.image || "/tomato.webp"}
  //         alt={`${crop.crop_name} by ${crop.farmerName}`}
  //       />
  //       <div className="recommendation-content">
  //         <p><b>Crop</b>: {crop.crop_name}</p>
  //         <p><b>Farmer</b>: {crop.farmerName}</p>
  //         <p><b>Price</b>: ₹{crop.price} per kg</p>
  //       </div>
  //     </div>
  //   );
  // }

  // export default Recommendation;

  import React from "react";
  import { useNavigate } from "react-router";
  import "../index.css";

  function Recommendation({ crop }) {
    console.log("Recommendation component props:", crop); // Log the crop prop to check its value
    
    const navigate = useNavigate();

    const handleClick = () => {
      navigate("/details", { state: { crop } });
    };
    const imageUrl = crop.image ? `http://localhost:3000${crop.image}` : "/tomato.webp";
    return (
      <div className="recommendation" onClick={handleClick}>
        <img 
          //  src={`http://localhost:3000${crop.image}`||"/tomato.webp"} 
          // src={crop.image ? `http://localhost:3000${crop.image}` : "/tomato.webp"}
          src={imageUrl}
          alt={`${crop.crop_name} by ${crop.farmerName}`}
        />
        <div className="recommendation-content">
          <p><b>Crop</b>: {crop.crop_name}</p>
          <p><b>Farmer</b>: {crop.farmerName}</p>
          <p><b>Price</b>: ₹{crop.price} per kg</p>
        </div>
      </div>
    );
  }

  export default Recommendation;

