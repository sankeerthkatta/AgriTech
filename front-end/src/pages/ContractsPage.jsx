// import React, { useState } from "react";
import Header from "../Components/Header";

// import ContractProfile from "../components/Profile";
// const dummyContracts = [
//   { id: 1, farmer: "Ram Kumar", crop: "Wheat", startDate: "12-02-2025", endDate: "12-08-2025", isActive: true, contact: "📞 8106031027", location: "📍 Isnapur, Sangareddy", buyerType: "Individual Farmer", deliveryLocation: "Hyderabad", rating: 4.2, reviews: 120, profileImg: "/images/ram.jpg" },
//   { id: 3, farmer: "Ragadeep", crop: "Apple", startDate: "02-03-2022", endDate: "01-04-2022", isActive: true, contact: "📞 1234567890", location: "📍 Doulthabad, Medak", buyerType: "Individual Farmer", deliveryLocation: "Medak", rating: 4.5, reviews: 60, profileImg: "raga.jpg" },
//   { id: 2, farmer: "Amit Singh", crop: "Rice", startDate: "15-03-2025", endDate: "15-09-2025", isActive: false, contact: "📞 9876543210", location: "📍 Pune, Maharashtra", buyerType: "Retailer", deliveryLocation: "Mumbai", rating: 4.5, reviews: 95, profileImg: "amit.jpg" },
// ];

// const ContractsPage = () => {
//   const [selectedContract, setSelectedContract] = useState(null);

//   return (
//     <div>
//       <Header />
//       <div className="contracts-page-container">
        
//         {/* Active Contracts Section */}
//         <div className="active-contracts-container">
//           <h1>Active Contracts</h1>
//           <div className="active-contracts-content">
//             {dummyContracts.filter(contract => contract.isActive).map(contract => (
//               <div key={contract.id} className="active-contract-card">
//                 <div className="active-contracts-content-left">
//                   <h3><b>Farmer:</b> {contract.farmer}</h3>
//                   <p><b>Crop:</b> {contract.crop}</p>
//                   <p><b>Start Date:</b> {contract.startDate}</p>
//                   <p><b>End Date:</b> {contract.endDate}</p>
//                 </div>
//                 <div className="active-contracts-content-right">
//                   <button className="view-btn" onClick={() => setSelectedContract(contract)}>View Details</button>
//                   <button className="end-btn">End Contract</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Past Contracts Section */}
//         <div className="active-contracts-container">
//           <h1>Past Contracts</h1>
//           <div className="active-contracts-content">
//             {dummyContracts.filter(contract => !contract.isActive).map(contract => (
//               <div key={contract.id} className="active-contract-card">
//                 <div className="active-contracts-content-left">
//                   <h3><b>Farmer:</b> {contract.farmer}</h3>
//                   <p><b>Crop:</b> {contract.crop}</p>
//                   <p><b>Start Date:</b> {contract.startDate}</p>
//                   <p><b>End Date:</b> {contract.endDate}</p>
//                 </div>
//                 <div className="active-contracts-content-right">
//                   <button className="view-btn" onClick={() => setSelectedContract(contract)}>View Details</button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Profile Popup */}
//         <ContractProfile contract={selectedContract} onClose={() => setSelectedContract(null)} />

//       </div>
//     </div>
//   );
// };

// export default ContractsPage;



// import React, { useState } from "react";
// import Navbar from "../../Components/FarmerComp/Navbar";

// const dummyContracts = [
//   {
//     id: 1,
//     buyer: "Aarav Patel",
//     crop: "Wheat",
//     quantity: "500 kg",
//     startDate: "12-02-2025",
//     isActive: true,
//     contact: "📞 8106031027",
//     location: "📍 Isnapur, Sangareddy",
//     buyerType: "Wholesaler",
//     deliveryLocation: "Hyderabad",
//     rating: 4.2,
//     reviews: 120,
//     profileImg: "ram.jpg",
//   },
//   {
//     id: 2,
//     buyer: "Neha Sharma",
//     crop: "Rice",
//     quantity: "1000 kg",
//     startDate: "15-03-2025",
//     isActive: true,
//     contact: "📞 9876543210",
//     location: "📍 Pune, Maharashtra",
//     buyerType: "Retailer",
//     deliveryLocation: "Mumbai",
//     rating: 4.5,
//     reviews: 95,
//     profileImg: "sumanth.jpg",
//   },
//   {
//     id: 3,
//     buyer: "Vikram Reddy",
//     crop: "Maize",
//     quantity: "750 kg",
//     startDate: "05-04-2025",
//     isActive: false,
//     contact: "📞 8123456789",
//     location: "📍 Warangal, Telangana",
//     buyerType: "Distributor",
//     deliveryLocation: "Bangalore",
//     rating: 4.0,
//     reviews: 110,
//     profileImg: "karthik.jpg",
//   },
//   {
//     id: 4,
//     buyer: "Rohit Verma",
//     crop: "Barley",
//     quantity: "600 kg",
//     startDate: "20-01-2025",
//     isActive: false,
//     contact: "📞 7001234567",
//     location: "📍 Jaipur, Rajasthan",
//     buyerType: "Exporter",
//     deliveryLocation: "Delhi",
//     rating: 4.3,
//     reviews: 87,
//     profileImg: "ram.jpg",
//   },
// ];

// const ContractsPage = () => {
//   const [selectedContract, setSelectedContract] = useState(null);

//   const handleViewDetails = (contract) => {
//     setSelectedContract(contract);
//   };

//   const closeProfile = () => {
//     setSelectedContract(null);
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="contracts-page-container">
//         {/* Active Contracts Section */}
//         <div className="active-contracts-container">
//           <div className="active-contracts-title">
//             <h1>Active Contracts</h1>
//           </div>
//           <div className="active-contracts-content">
//             {dummyContracts
//               .filter((contract) => contract.isActive)
//               .map((contract) => (
//                 <div key={contract.id} className="active-contract-card">
//                   <div className="active-contracts-content-left">
//                     <h3><b>Buyer:</b> {contract.buyer}</h3>
//                     <p><b>Crop:</b> {contract.crop}</p>
//                     <p><b>Quantity:</b> {contract.quantity}</p>
//                     <p><b>Start Date:</b> {contract.startDate}</p>
//                   </div>
//                   <div className="active-contracts-content-right">
//                     <button className="view-btn" onClick={() => handleViewDetails(contract)}>View Details</button>
//                     <button className="end-btn" onClick={() => handleViewDetails(contract)}>complete contract</button>
//                     <button className="end-btn">End Contract</button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Past Contracts Section */}
//         <div className="active-contracts-container">
//           <div className="active-contracts-title">
//             <h1>Past Contracts</h1>
//           </div>
//           <div className="active-contracts-content">
//             {dummyContracts
//               .filter((contract) => !contract.isActive)
//               .map((contract) => (
//                 <div key={contract.id} className="active-contract-card">
//                   <div className="active-contracts-content-left">
//                     <h3><b>Buyer:</b> {contract.buyer}</h3>
//                     <p><b>Crop:</b> {contract.crop}</p>
//                     <p><b>Quantity:</b> {contract.quantity}</p>
//                     <p><b>Start Date:</b> {contract.startDate}</p>
//                   </div>
//                   <div className="active-contracts-content-right">
//                     <button className="view-btn" onClick={() => handleViewDetails(contract)}>View Details</button>
                   
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>

//         {/* Profile Popup */}
//         {selectedContract && (
//           <div className="profile-overlay" onClick={closeProfile}>
//             <div className="contract-profile-container" onClick={(e) => e.stopPropagation()}>
//               <div className="contract-profile">
//                 <img src={selectedContract.profileImg} alt="profile" />
//               </div>
//               <div className="name">
//                 <h1><b>{selectedContract.buyer}</b></h1>
//                 <p className="contact">{selectedContract.contact}</p>
//                 <p className="contact">{selectedContract.location}</p>
//                 <p className="contact"><b>Buyer Type:</b> {selectedContract.buyerType}</p>
//                 <p className="contact"><b>Preferred Delivery Location:</b> {selectedContract.deliveryLocation}</p>
//               </div>
//               <div className="rating">
//                 <h3>Ratings & Reviews</h3>
//                 <span className="stars" style={{ fontSize: "24px", color: "gold" }}>
//                   {"★".repeat(Math.floor(selectedContract.rating))}{"☆".repeat(5 - Math.floor(selectedContract.rating))}
//                 </span>
//                 <span>{selectedContract.rating}/5 ({selectedContract.reviews} reviews)</span>
//               </div>
//               <div className="profile-chat">
//                 <button>Chat</button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ContractsPage;



import React, { useState, useEffect } from "react";

// import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
const ContractsPage = () => {
  const [contracts, setContracts] = useState([]);
  const [selectedContract, setSelectedContract] = useState(null);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await fetch("/api/v1/contract/buyer", {
        credentials: "include",
      });

      if (!response.ok) throw new Error("Failed to fetch contracts");

      const data = await response.json();
      setContracts(data);
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleViewDetails = (contract) => {
    setSelectedContract(contract);
  };

  const closeProfile = () => {
    setSelectedContract(null);
  };

  const handleCompleteContract = async (id) => {
    try {
      const response = await fetch(`/api/v1/contract/complete/${id}`, {
        method: "PUT",
        credentials: "include",
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      alert(result.message);
      fetchContracts();
    } catch (err) {
      alert(err.message);
    }
  };

  const renderContractCard = (contract, isActive) => (
    <div key={contract._id} className="active-contract-card">
      <div className="active-contracts-content-left">
        <h3><b>Farmer:</b> {contract.cropSnapshot?.farmerName}</h3>
        <p><b>Crop:</b> {contract.cropSnapshot?.crop_name}</p>
        <p><b>Quantity:</b> {contract.offeredQuantity}</p>
        {/* <p><b>Start Date:</b> {new Date(contract.offerDate).toLocaleDateString()}</p> */}
      </div>
      <div className="active-contracts-content-right">
        <button className="view-btn" onClick={() => handleViewDetails(contract)}>View Details</button>
        {isActive && (
          <button className="end-btn" onClick={() => handleCompleteContract(contract._id)}>
            Complete Contract
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <Header />
      <Navbar />
      <div className="contracts-page-container">
        {/* Active Contracts */}
        <div className="active-contracts-container">
          <div className="active-contracts-title"><h1>Active Contracts</h1></div>
          <div className="active-contracts-content">
            {contracts.filter(c => c.status === "ongoing").map(c => renderContractCard(c, true))}
          </div>
        </div>

        {/* Past Contracts */}
        <div className="active-contracts-container">
          <div className="active-contracts-title"><h1>Past Contracts</h1></div>
          <div className="active-contracts-content">
            {contracts.filter(c => c.status === "completed").map(c => renderContractCard(c, false))}
          </div>
        </div>

        {/* Profile Modal */}
        {selectedContract && (
          <div className="profile-overlay" onClick={closeProfile}>
            <div className="contract-profile-container" onClick={(e) => e.stopPropagation()}>
              <div className="contract-profile">
                <img src={selectedContract.buyer?.profileImg || "/passport.jpg"} alt="profile" />
              </div>
              <div className="name">
                <h1><b>{selectedContract.buyer?.name}</b></h1>
                {/* <p className="contact">📞 {selectedContract.buyer?.phone}</p> */}
                {/* <p className="contact">📍 {selectedContract.buyer?.location}</p> */}
                {/* <p className="contact"><b>Buyer Type:</b> {selectedContract.buyer?.type}</p> */}
                {/* <p className="contact"><b>Delivery Location:</b> {selectedContract.deliveryLocation}</p> */}
              </div>
              {/* <div className="rating">
                <h3>Ratings & Reviews</h3>
                <span className="stars" style={{ fontSize: "24px", color: "gold" }}>
                  {"★".repeat(Math.floor(selectedContract.buyer?.rating || 0))}{"☆".repeat(5 - Math.floor(selectedContract.buyer?.rating || 0))}
                </span>
                <span>{selectedContract.buyer?.rating}/5 ({selectedContract.buyer?.reviews || 0} reviews)</span>
              </div> */}
              <div className="profile-chat">
                <button>Chat</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContractsPage;


