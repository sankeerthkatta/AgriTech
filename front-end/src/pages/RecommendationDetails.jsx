
// // import React, {useEffect, useState} from "react";
// // import { useLocation } from "react-router-dom";
// // import "./index.css";
// // import Header from "./components/Header.jsx";
// // import Recommendation from "./components/Recommendation.jsx";
// // import ContractProfile from "./components/Profile.jsx";

// // const recommendations = [
// //   { name: "Rice", image: "rice_crop.jpg", farmer: "Ram Kumar", rating: 4.5, price: 3000, time: "july" },
// //   { name: "Rice", image: "rice_crop.jpg", farmer: "Suresh Yadav", rating: 4.2, price: 2900, time: "august" },
// //   { name: "Wheat", image: "wheat1.jpeg", farmer: "Anil Kumar", rating: 4.6, price: 2500, time: "september" },
// //   { name: "Rice", image: "rice2.jpg", farmer: "Mohan Singh", rating: 4.7, price: 3100, time: "july" },
// // ];

// // function RecommendationDetails() {
// //   const location = useLocation();
// //   const { name, image, farmer, rating, price, time } = location.state || {};



// // const [wishlist, setWishlist] = useState(() => {
// //   const savedWishlist = localStorage.getItem("wishlist");
// //   return savedWishlist ? JSON.parse(savedWishlist) : [];
// // });


// //   const isWishlisted = wishlist.some(item => item.name === name && item.farmer === farmer);

  

// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   const similarCrops = recommendations.filter(
// //     (crop) => crop.name === name && crop.farmer !== farmer
// //   );

// //   const toggleWishlist = () => {
// //     let updatedWishlist;
// //     if (isWishlisted) {
// //       updatedWishlist = wishlist.filter((item) => !(item.name === name && item.farmer === farmer));
// //     } else {
// //       updatedWishlist = [...wishlist, { name, image, farmer, rating, price, time }];
// //     }

// //     setWishlist(updatedWishlist);
// //     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
// //   };

// //   return (
// //     <div className="recommendation-page">
// //       <Header />
// //       <div className="details-container">
// //         <div className="details-image">
// //           <img src={image} alt={name} />
// //         </div>
// //         <div className="details-content">
// //           <h2>{name}{" "}
// //           <span>
// //               <img 
// //                 src=  {isWishlisted
// //                   ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
// //                   : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png" 
// //                 }
// //                 alt="Wishlist"
// //                 className="icon"
// //                 style={{
// //                   width: "24px",
// //                   height: "24px",
// //                   cursor: "pointer",
// //                 }}
// //                 onClick={toggleWishlist}
// //               />
// //             </span>
// //           </h2>

            

// //           <p><b>Farmer:</b> {farmer}</p>
// //           <p><b>Rating:</b> ⭐{rating} / 5</p>
// //           <p><b>Price:</b> ₹{price} per kg</p>
// //           <p><b>Delivery:</b> {time}</p>
// //           <div>
// //             <button className="details-button">Initiate Contract</button>
// //             <button className="chat-button">Chat</button>
// //             <button className="view-details" onClick={() =>Profile({ name, image, farmer, rating, price, time })}>
// //               View Details
// //             </button>
// //           </div>
// //         </div>
// //       </div>

    

// //       <section className="recommendations">
// //         <h2>Similar Crops</h2>
// //         <div className="recommendation-crops">
// //           {recommendations.filter(crop => crop.name === name && crop.farmer !== farmer).length > 0 ? (
// //             recommendations.filter(crop => crop.name === name && crop.farmer !== farmer).map((crop, index) => (
// //               <Recommendation key={index} {...crop} />
// //             ))
// //           ) : (
// //             <p>No similar crops available.</p>
// //           )}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// // export default RecommendationDetails;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../index.css";
// import Header from "../Components/Header.jsx";
// import Recommendation from "../Components/Recommendation.jsx";
// import ContractProfile from "../Components/Profile.jsx";

const recommendations = [
  { name: "Rice", image: "rice_crop.jpg", farmer: "Ram Kumar", rating: 4.5, price: 3000, time: "july" },
  { name: "Rice", image: "rice_crop.jpg", farmer: "Suresh Yadav", rating: 4.2, price: 2900, time: "august" },
  { name: "Wheat", image: "wheat1.jpeg", farmer: "Anil Kumar", rating: 4.6, price: 2500, time: "september" },
  { name: "Rice", image: "rice2.jpg", farmer: "Mohan Singh", rating: 4.7, price: 3100, time: "july" },
];

// function RecommendationDetails() {
//   const location = useLocation();
//   const { name, image, farmer, price } = location.state || {};

//   const [wishlist, setWishlist] = useState(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const isWishlisted = wishlist.some((item) => item.name === name && item.farmer === farmer);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const toggleWishlist = () => {
//     let updatedWishlist;
//     if (isWishlisted) {
//       updatedWishlist = wishlist.filter((item) => !(item.name === name && item.farmer === farmer));
//     } else {
//       updatedWishlist = [...wishlist, { name, image, farmer, rating, price, time }];
//     }

//     setWishlist(updatedWishlist);
//     localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
//   };

//   const openProfile = () => {
//     setSelectedProfile({ name, image, farmer, rating, price, time });
//     setProfileOpen(true);
//   };

//   return (
//     <div className="recommendation-page">
//       <Header />
//       <div className="details-container">
//         <div className="details-image">
//           <img src={image} alt={name} />
//         </div>
//         <div className="details-content">
//           <h2>
//             {name}{" "}
//             <span>
//               <img
//                 src={
//                   isWishlisted
//                     ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
//                     : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
//                 }
//                 alt="Wishlist"
//                 className="icon"
//                 style={{
//                   width: "24px",
//                   height: "24px",
//                   cursor: "pointer",
//                 }}
//                 onClick={toggleWishlist}
//               />
//             </span>
//           </h2>

//           <p>
//             <b>Farmer:</b> {farmer}
//           </p>
//           <p>
//             {/* <b>Rating:</b> ⭐{rating} / 5 */}
//           </p>
//           <p>
//             <b>Price:</b> ₹{price} per kg
//           </p>
//           <p>
//             {/* <b>Delivery:</b> {time} */}
//           </p>
//           <div>
//             <button className="details-button">Initiate Contract</button>
//             <button className="chat-button">Chat</button>
//             <button className="view-detailss" onClick={openProfile}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>

//       <section className="recommendations">
//         <h2>Similar Crops</h2>
//         <div className="recommendation-crops">
//           {recommendations.filter((crop) => crop.name === name && crop.farmer !== farmer).length > 0 ? (
//             recommendations
//               .filter((crop) => crop.name === name && crop.farmer !== farmer)
//               .map((crop, index) => <Recommendation key={index} {...crop} />)
//           ) : (
//             <p>No similar crops available.</p>
//           )}
//         </div>
//       </section>

//       {/* Render ContractProfile when profileOpen is true */}
//       {profileOpen && <ContractProfile contract={selectedProfile} onClose={() => setProfileOpen(false)} />}
//     </div>
//   );
// }

// export default RecommendationDetails;



// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../index.css";
// import Header from "../Components/Header.jsx";
// import Recommendation from "../Components/Recommendation.jsx";
// import ContractProfile from "../Components/Profile.jsx";
// import ContractModal from "../Components/ContractsModel.jsx";


// function RecommendationDetails() {
//   const [crops, setCrops] = useState([]);
//   useEffect(() => {
//       const fetchCrops = async () => {
//         try {
//           const res = await fetch("api/v1/contractfarm/allcrops", {
//             credentials: "include",
//           });
//           const data = await res.json();
//           setCrops(data);
//         } catch (err) {
//           console.error("Error fetching crops:", err);
//         }
//       };
  
//       fetchCrops();
//     }, []);
//   const [contractModalOpen, setContractModalOpen] = useState(false);

//   const location = useLocation();
//   const { crop } = location.state || {};
//   const [wishlist, setWishlist] = useState(() => {
//     const savedWishlist = localStorage.getItem("wishlist");
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   const [profileOpen, setProfileOpen] = useState(false);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const isWishlisted = wishlist.some((item) => item.name === name && item.farmer === farmer);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

  // const toggleWishlist = () => {
  //   let updatedWishlist;
  //   if (isWishlisted) {
  //     updatedWishlist = wishlist.filter((item) => !(item.name === name && item.farmer === farmer));
  //   } else {
  //     updatedWishlist = [...wishlist, { name, image, farmer, rating, price, time }];
  //   }

  //   setWishlist(updatedWishlist);
  //   localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  // };

  // const openProfile = () => {
  //   // setSelectedProfile({ name, image, farmer, rating, price, time });
  //   setProfileOpen(true);
  // };

  // ✅ New function to initiate contract
  // const handleContractSubmit = async (contractData) => {
  //   try {
  //     const res = await fetch("http://localhost:5000/api/contracts", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       credentials: "include", // to send HTTP-only cookie
  //       body: JSON.stringify(contractData),
  //     });
  
  //     const data = await res.json();
  
  //     if (res.ok) {
  //       alert("Contract initiated successfully!");
  //     } else {
  //       console.error(data);
  //       alert("Failed to initiate contract");
  //     }
  //   } catch (err) {
  //     console.error("Error initiating contract", err);
  //   }
  // };
  // return (
  //   <div className="recommendation-page">
  //     <Header />
  //     <div className="details-container">
  //       <div className="details-image">
  //         {/* <img src={crop.image} alt={crop.crop_name} /> */}
  //       </div>
  //       <div className="details-content">
  //         <h2>
  //           {crop.crop_name}{" "}
            {/* <span>
              <img
                src={
                  isWishlisted
                    ? "https://cdn-icons-png.flaticon.com/512/833/833472.png"
                    : "https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                }
                alt="Wishlist"
                className="icon"
                style={{
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                }}
                onClick={toggleWishlist}
              />
            </span> */}
          {/* </h2> */}

          {/* <p><b>Farmer:</b> {crop.farmerName}</p> */}
          {/* <p><b>Rating:</b> ⭐{rating} / 5</p> */}
          {/* <p><b>Price:</b> ₹{crop.price} per kg</p> */}
          {/* <p><b>Delivery:</b> {time}</p> */}

          {/* <div>
          <button className="details-button" onClick={() => setContractModalOpen(true)}>
  Initiate Contract
</button>
            <button className="chat-button">Chat</button>
            <button className="view-detailss" onClick={openProfile}>
              View Details
            </button>
          </div>
        </div>
      </div>

      {contractModalOpen && (
  <ContractModal
  crop={crop}  // pass actual cropId
    onClose={() => setContractModalOpen(false)}
    onSubmit={handleContractSubmit}
  />
)}

      <section className="recommendations">
        <h2>Similar Crops</h2>
        <div className="recommendation-crops">
          {crops.filter((cropp) => cropp.crop_name === crop.crop_name && cropp.farmerName !== crop.farmerName).length > 0 ? (
            crops
              .filter((cropp) => cropp.crop_name === crop.crop_name && cropp.crop_farmerName !== crop.farmer)
              .map((cropp, index) => <Recommendation key={index} {...cropp} />)
          ) : (
            <p>No similar crops available.</p>
          )}
        </div>
      </section>

      {profileOpen && <ContractProfile contract={selectedProfile} onClose={() => setProfileOpen(false)} />}
    </div>
  );
}

export default RecommendationDetails; */}




// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../index.css";
// import Header from "../Components/Header.jsx";
// import Recommendation from "../Components/Recommendation.jsx";
// import ContractProfile from "../Components/Profile.jsx";
// import ContractModal from "../Components/ContractsModel.jsx";

// function RecommendationDetails() {
//   const [crops, setCrops] = useState([]);
//   const [contractModalOpen, setContractModalOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const location = useLocation();
//   const { crop } = location.state || {};

//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const res = await fetch("/api/v1/contractfarm/allcrops", {
//           credentials: "include",
//         });
//         const data = await res.json();
//         setCrops(data);
//       } catch (err) {
//         console.error("Error fetching crops:", err);
//       }
//     };

//     fetchCrops();
//     window.scrollTo(0, 0);
//   }, []);

//   const openProfile = () => {
//     setSelectedProfile(crop.farmer); // Or however you want to display farmer info
//     setProfileOpen(true);
//   };

//   const handleContractSubmit = async (contractData) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/contracts", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         credentials: "include",
//         body: JSON.stringify(contractData),
//       });

//       const data = await res.json();
//       if (res.ok) {
//         alert("Contract initiated successfully!");
//         setContractModalOpen(false);
//       } else {
//         console.error(data);
//         alert("Failed to initiate contract");
//       }
//     } catch (err) {
//       console.error("Error initiating contract", err);
//     }
//   };

//   return (
//     <div className="recommendation-page">
//       <Header />
//       <div className="details-container">
//         <div className="details-image">
//           <img src={crop.image} alt={crop.crop_name} />
//         </div>
//         <div className="details-content">
//           <h2>{crop.crop_name}</h2>
//           <p><b>Farmer:</b> {crop.farmerName}</p>
//           <p><b>Price:</b> ₹{crop.price} per kg</p>

//           <div>
//             <button className="details-button" onClick={() => setContractModalOpen(true)}>
//               Initiate Contract
//             </button>
//             <button className="chat-button">Chat</button>
//             <button className="view-detailss" onClick={openProfile}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>

//       {contractModalOpen && (
//         <ContractModal
//           crop={crop}
//           onClose={() => setContractModalOpen(false)}
//           onSubmit={handleContractSubmit}
//         />
//       )}

//       <section className="recommendations">
//         <h2>Similar Crops</h2>
//         <div className="recommendation-crops">
//           {crops.filter(
//             (c) => c.crop_name === crop.crop_name && c.farmerName !== crop.farmerName
//           ).length > 0 ? (
//             crops
//               .filter(
//                 (c) => c.crop_name === crop.crop_name && c.farmerName !== crop.farmerName
//               )
//               .map((similarCrop, index) => (
//                 <Recommendation key={index} {...similarCrop} />
//               ))
//           ) : (
//             <p>No similar crops available.</p>
//           )}
//         </div>
//       </section>

//       {profileOpen && (
//         <ContractProfile contract={selectedProfile} onClose={() => setProfileOpen(false)} />
//       )}
//     </div>
//   );
// }

// export default RecommendationDetails;


// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import "../index.css";
// import Header from "../Components/Header.jsx";
// import Recommendation from "../Components/Recommendation.jsx";
// import ContractProfile from "../Components/Profile.jsx";
// import ContractModal from "../Components/ContractsModel.jsx";

// function RecommendationDetails() {
//   const [crops, setCrops] = useState([]);
//   const [contractModalOpen, setContractModalOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);
//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const location = useLocation();
//   const { crop } = location.state || {};

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     const fetchCrops = async () => {
//       try {
//         const res = await fetch("api/v1/contractfarm/allcrops", {
//           credentials: "include",
//         });
//         const data = await res.json();
//         setCrops(data);
//       } catch (err) {
//         console.error("Error fetching crops:", err);
//       }
//     };

//     fetchCrops();
//   }, []);

//   const openProfile = () => {
//     setSelectedProfile(crop);
//     setProfileOpen(true);
//   };

//   const handleContractSubmit = async (contractData) => {
//     try {
//       const res = await fetch("http://localhost:5000/api/contracts", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         credentials: "include",
//         body: JSON.stringify(contractData),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("Contract initiated successfully!");
//       } else {
//         console.error(data);
//         alert("Failed to initiate contract");
//       }
//     } catch (err) {
//       console.error("Error initiating contract", err);
//     }
//   };

//   if (!crop) return <div>Loading...</div>; // prevent crash if crop is missing

//   const similarCrops = crops.filter(
//     (c) => c.crop_name === crop.crop_name && c.farmerName !== crop.farmerName
//   );

//   return (
//     <div className="recommendation-page">
//       <Header />
//       <div className="details-container">
//         <div className="details-image">
//           {crop.image && <img src={crop.image} alt={crop.crop_name} />}
//         </div>
//         <div className="details-content">
//           <h2>{crop.crop_name}</h2>
//           <p><b>Farmer:</b> {crop.farmerName}</p>
//           <p><b>Price:</b> ₹{crop.price} per kg</p>

//           <div>
//             <button className="details-button" onClick={() => setContractModalOpen(true)}>
//               Initiate Contract
//             </button>
//             <button className="chat-button">Chat</button>
//             <button className="view-detailss" onClick={openProfile}>
//               View Details
//             </button>
//           </div>
//         </div>
//       </div>

//       {contractModalOpen && (
//         <ContractModal
//           crop={crop}
//           onClose={() => setContractModalOpen(false)}
//           onSubmit={handleContractSubmit}
//         />
//       )}

//       <section className="recommendations">
//         <h2>Similar Crops</h2>
//         <div className="recommendation-crops">
//           {similarCrops.length > 0 ? (
//             similarCrops.map((c, index) => <Recommendation key={index} {...c} />)
//           ) : (
//             <p>No similar crops available.</p>
//           )}
//         </div>
//       </section>

//       {profileOpen && (
//         <ContractProfile contract={selectedProfile} onClose={() => setProfileOpen(false)} />
//       )}
//     </div>
//   );
// }

// export default RecommendationDetails;



import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../index.css";
import Header from "../Components/Header.jsx";
import Recommendation from "../Components/Recommendation.jsx";
import ContractModal from "../Components/ContractsModel.jsx";

function RecommendationDetails() {
  const location = useLocation();
  const { crop } = location.state || {};

  const [allCrops, setAllCrops] = useState([]);
  const [contractModalOpen, setContractModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchCrops = async () => {
      try {
        const res = await fetch("api/v1/contractfarm/allcrops", {
          credentials: "include",
        });
        const data = await res.json();
        setAllCrops(data);
      } catch (err) {
        console.error("Error fetching crops:", err);
      }
    };
    fetchCrops();
  }, []);

  const handleContractSubmit = async (contractData) => {
    try {
      const res = await fetch("/api/v1/contract", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
        },
        credentials: "include",
        body: JSON.stringify(contractData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Contract initiated successfully!");
        setContractModalOpen(false);
      } else {
        console.error(data);
        alert("Failed to initiate contract");
      }
    } catch (err) {
      console.error("Error initiating contract", err);
    }
  };

  if (!crop) return <p>Loading crop details...</p>;

  const similarCrops = allCrops.filter(
    (c) =>
      c.crop_name === crop.crop_name &&
      c.farmerName !== crop.farmerName
  );

  return (
    <div className="recommendation-page">
      <Header />
      <div className="details-container">
        <div className="details-image">
          <img src={`http://localhost:3000${crop.image}`|| "/tomato.webp"} alt={crop.crop_name} />
        </div>
        <div className="details-content">
        <h2>{crop.crop_name.charAt(0).toUpperCase() + crop.crop_name.slice(1)}</h2>

          <p><b>Farmer:</b> {crop.farmerName}</p>
          <p><b>Price:</b> ₹{crop.price} per kg</p>
          <p><b>Delivery:</b> {new Date(crop.harvestDate).toLocaleDateString()}</p>
          <p><b>Quantity:</b> {crop.quantity} kg</p>

          <div>
            <button className="details-button" onClick={() => setContractModalOpen(true)}>Initiate Contract</button>
            <button className="chat-button">Chat</button>
          </div>
        </div>
      </div>

      {contractModalOpen && (
        <ContractModal
          crop={crop}
          onClose={() => setContractModalOpen(false)}
          onSubmit={handleContractSubmit}
        />
      )}

      <section className="recommendations">
        <h2>Similar Crops</h2>
        <div className="recommendation-crops">
          {similarCrops.length > 0 ? (
            similarCrops.map((c, index) => (
              <Recommendation key={index} crop={c} />
            ))
          ) : (
            <p>No similar crops available.</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default RecommendationDetails;

