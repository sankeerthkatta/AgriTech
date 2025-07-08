import React from "react";

const ContractProfile = ({ contract, onClose }) => {
  if (!contract) return null;

  return (
    <div className="profile-overlay" onClick={onClose}>
      <div className="contract-profile-container" onClick={(e) => e.stopPropagation()}>
        <div className="contract-profile">
          <img src={contract.profileImg} alt="profile" />
        </div>
        <div className="name">
          <h1><b>{contract.farmer}</b></h1>
          <p className="contact">{contract.contact}</p>
          <p className="contact">{contract.location}</p>
          {/* <p className="contact"><b>Buyer Type:</b> {contract.buyerType}</p> */}
          <p className="contact"><b>Preferred Delivery Location:</b> {contract.deliveryLocation}</p>
        </div>
        <div className="rating">
          <h3>Ratings & Reviews</h3>
          <span className="stars" style={{ fontSize: "24px", color: "gold" }}>
            {"★".repeat(Math.floor(contract.rating))}{"☆".repeat(5 - Math.floor(contract.rating))}
          </span>
          <span>{contract.rating}/5 ({contract.reviews} reviews)</span>
        </div>
        <div className="profile-chat">
          <button>Chat</button>
        </div>
      </div>
    </div>
  );
};

export default ContractProfile;
