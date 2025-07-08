// import React, { useState } from "react";

// function ContractModal({ crop, onClose, onSubmit }) {
//   const [offeredQuantity, setOfferedQuantity] = useState("");
//   const [offeredPrice, setOfferedPrice] = useState("");
//   const [message, setMessage] = useState("");
//   const user = JSON.parse(localStorage.getItem('user'));
//   console.log(user._id); 
  
//   const handleSubmit = () => {
//     if (!offeredQuantity) {
//       alert("Quantity is required!");
//       return;
//     }

//     const fullContractData = {
//         buyer:user._id|| "",
//         farmer: crop.farmer._id,
//         crop: crop._id,
//         cropSnapshot: {
//           crop_name: crop.crop_name,
//           category: crop.category,
//           variety: crop.variety,
//           quantity: crop.quantity,
//           price: crop.price,
//           harvestDate: crop.harvestDate,
//           image: crop.image,
//           quality: crop.quality,
//           organic: crop.organic,
//           location: crop.location,
//           phone: crop.phone,
//           farmerName: crop.farmer.name,
//         },
//         offeredPrice: offeredPrice || crop.price,
//         offeredQuantity: offeredQuantity,
//         deliveryDate: new Date().toISOString().split("T")[0],
//         message,
//       };
//   };

//   return (
//     <div className="contract-modal-overlay">
//       <div className="contract-modal">
//         <h3>Initiate Contract</h3>

//         <label>Quantity (kg)*</label>
//         <input
//           type="number"
//           value={offeredQuantity}
//           onChange={(e) => setOfferedQuantity(e.target.value)}
//           required
//         />

//         <label>Preferred Price (₹/kg)</label>
//         <input
//           type="number"
//           value={offeredPrice}
//           onChange={(e) => setOfferedPrice(e.target.value)}
//         />

//         <label>Message to Farmer</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         <div className="modal-actions">
//           <button onClick={fullContractData}>Send Contract</button>
//           <button className="cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContractModal;



// import React, { useState } from "react";

// function ContractModal({ crop, onClose, onSubmit }) {
//   const [offeredQuantity, setOfferedQuantity] = useState("");
//   const [offeredPrice, setOfferedPrice] = useState("");
//   const [message, setMessage] = useState("");

//   const user = JSON.parse(localStorage.getItem("user"));

//   const handleSubmit = () => {
//     if (!offeredQuantity) {
//       alert("Quantity is required!");
//       return;
//     }

//     const fullContractData = {
//       buyer: user._id,
//       farmer: crop.farmer._id,
//       crop: crop._id,
//       cropSnapshot: {
//         crop_name: crop.crop_name,
//         category: crop.category,
//         variety: crop.variety,
//         quantity: crop.quantity,
//         price: crop.price,
//         harvestDate: crop.harvestDate,
//         image: crop.image,
//         quality: crop.quality,
//         organic: crop.organic,
//         location: crop.location,
//         phone: crop.phone,
//         farmerName: crop.farmer.name,
//       },
//       offeredPrice: offeredPrice || crop.price,
//       offeredQuantity,
//       deliveryDate: new Date().toISOString().split("T")[0],
//       message,
//     };

//     onSubmit(fullContractData); // ✅ this was missing!
//   };

//   return (
//     <div className="contract-modal-overlay">
//       <div className="contract-modal">
//         <h3>Initiate Contract</h3>

//         <label>Quantity (kg)*</label>
//         <input
//           type="number"
//           value={offeredQuantity}
//           onChange={(e) => setOfferedQuantity(e.target.value)}
//           required
//         />

//         <label>Preferred Price (₹/kg)</label>
//         <input
//           type="number"
//           value={offeredPrice}
//           onChange={(e) => setOfferedPrice(e.target.value)}
//         />

//         <label>Message to Farmer</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />

//         <div className="modal-actions">
//           {/* <button onClick={handleSubmit}>Send Contract</button> */}
//           <button onClick={() => onSubmit(fullContractData)}>Send Contract</button>

//           <button className="cancel" onClick={onClose}>Cancel</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ContractModal;


import React, { useState } from "react";

const user = JSON.parse(localStorage.getItem("user"));
function ContractModal({ crop, onClose, onSubmit }) {
  const [offeredQuantity, setOfferedQuantity] = useState("");
  const [offeredPrice, setOfferedPrice] = useState("");
  const [message, setMessage] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");


  const user = JSON.parse(localStorage.getItem("user"));

  const handleSubmit = () => {
    if (!offeredQuantity) {
      alert("Quantity is required!");
      return;
    }
console.log(user._id);
console.log(crop._id);
    const fullContractData = {
      buyer: user._id,
      farmer: crop.sellerId,
      cropId: crop._id,
      cropSnapshot: {
        crop_name: crop.crop_name,
        category: crop.category,
        variety: crop.variety,
        quantity: crop.quantity,
        price: crop.price,
        harvestDate: crop.harvestDate,
        image: crop.image,
        quality: crop.quality,
        organic: crop.organic,
        location: crop.location,
        phone: crop.phone,
        farmerName: crop.farmerName,
      },
      offeredPrice: offeredPrice || crop.price,
      offeredQuantity,
      deliveryDate: new Date().toISOString().split("T")[0],
      message,
    };

    onSubmit(fullContractData);
  };

  return (
    <div className="contract-modal-overlay">
      <div className="contract-modal">
        <h3>Initiate Contract</h3>

        <label>Quantity (kg)*</label>
        <input
          type="number"
          value={offeredQuantity}
          onChange={(e) => setOfferedQuantity(e.target.value)}
        />

        <label>Preferred Price (₹/kg)</label>
        <input
          type="number"
          value={offeredPrice}
          onChange={(e) => setOfferedPrice(e.target.value)}
        />
         <label>Delivery Date*</label>
    <input
      type="date"
      value={deliveryDate}
      onChange={(e) => setDeliveryDate(e.target.value)}
    />
        <label>Message to Farmer</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="modal-actions">
          <button onClick={handleSubmit}>Send Contract</button>
          <button className="cancel" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default ContractModal;

