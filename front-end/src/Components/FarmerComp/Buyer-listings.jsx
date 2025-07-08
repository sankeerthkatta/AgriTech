
// import "../index.css";

// const buyers = [
//     {
//       name: "Ram Kumar",
//       quantityNeeded: "500 kg",
//       rating: 4.8,
      
//       image: "ram.jpg"
//     },
//     {
//       name: "Karthik",
//       quantityNeeded: "1000 kg",
//       rating: 4.5,
      
//       image: "karthik.jpg"
//     },
//     {
//       name: "Kopparapu Manish Sai",
//       quantityNeeded: "250 kg",
//       rating: 4.7,
      
//       image: "sumanth.jpg"
//     }
//   ];

  
//   import React from "react";

// const BuyerOfferings = () => {
//   return (
//     <div className="buyer-offerings">
//       <h2>Buyer Offerings</h2>
//       {buyers.length === 0 ? (
//         <p>No buyers have offered yet.</p>
//       ) : (
//         buyers.map((buyer, index) => (
//           <div key={index} className="buyer-card">
//             <img src={buyer.image} alt={buyer.name} className="buyer-image" />
//             <div className="buyer-details">
//               <h3>{buyer.name}</h3>
//               <p><strong>Quantity Needed:</strong> {buyer.quantityNeeded}</p>
//               <p><strong>Buyer Rating:</strong> ⭐{buyer.rating}</p>
//             </div>
//             <div className="buyer-actions">
//               <button className="ignore-btn" onClick={() => onIgnore(index)}>Ignore</button>
//               <button className="accept-btn" onClick={() => onAccept(index)}>Accept</button>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default BuyerOfferings;



import React, { useEffect, useState } from "react";

const BuyerOfferings = () => {
  const [contracts, setContracts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContracts = async () => {
    try {
      const res = await fetch("/api/v1/contract/farmer", {
        credentials: "include", // for HTTP-only cookies
      });
      const data = await res.json();
      console.log(data);
      // Filter only 'pending' contracts
      const pendingContracts = data.filter((contract) => contract.status === "pending");
      setContracts(pendingContracts);
    } catch (error) {
      console.error("Failed to fetch contracts", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = async (id) => {
    try {
      const res = await fetch(`/api/v1/contract/accept/${id}`, {
        method: "PUT",
        credentials: "include",
      });
      const data = await res.json();
      alert("Contract accepted successfully");
      fetchContracts(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to accept contract");
    }
  };

  const handleReject = async (id) => {
    try {
      const res = await fetch(`/api/v1/contract/reject/${id}`, {
        method: "PUT",
        credentials: "include",
      });
      const data = await res.json();
      alert("Contract rejected");
      fetchContracts(); // Refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to reject contract");
    }
  };

  useEffect(() => {
    fetchContracts();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="buyer-offerings">
      <h2>Buyer Offerings</h2>
      {contracts.length === 0 ? (
        <p>No buyers have offered yet.</p>
      ) : (
        contracts.map((contract, index) => (
          <div key={contract._id} className="buyer-card">
            <img
              src={"/passport.jpg"}
              alt={contract.buyer?.name || "Buyer"}
              className="buyer-image"
            />
            <div className="buyer-details">
              <strong>Buyer Name : </strong>{contract.buyer?.name}
              <p><strong>Quantity Needed:</strong> {contract.offeredQuantity} kg</p>
              {/* <p><strong>Buyer Rating:</strong> ⭐{contract.buyer?.rating || "N/A"}</p> */}
              <p><strong>Preferred Price:</strong> ₹{contract.offeredPrice}/kg</p>
              <p><strong>Delivery Date:</strong> {contract.deliveryDate?.split("T")[0]}</p>
              {contract.message && <p><strong>Message:</strong> {contract.message}</p>}
            </div>
            <div className="buyer-actions">
              <button className="ignore-btn" onClick={() => handleReject(contract._id)}>Reject</button>
              <button className="accept-btn" onClick={() => handleAccept(contract._id)}>Accept</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BuyerOfferings;

