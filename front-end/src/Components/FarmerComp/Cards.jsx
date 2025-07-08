import React, { useState } from "react";

const AvailableListings = ({ crops, buyers, onEdit, onDismiss }) => {
  return (
    <div className="listings-wrapper">
      {/* Buyer Offerings Section */}
      <div className="buyer-offerings">
        <h2>Buyer Offerings</h2>
        {buyers.length === 0 ? (
          <p>No buyers offered yet.</p>
        ) : (
          buyers.map((buyer, index) => (
            <div key={index} className="buyer-card">
              <img
                src={buyer.image || "default-profile.jpg"}
                alt={buyer.name}
                className="buyer-image"
              />
              <div className="buyer-details">
                <h3>{buyer.name}</h3>
                <p>{buyer.position}</p>
                <p>{buyer.company}</p>
                <p>{buyer.connections} connections</p>
                <p className="timestamp">{buyer.timestamp}</p>
                <button className="message-btn">Message</button>
                <button className="accept-btn">Accept</button>
                <button className="ignore-btn">Ignore</button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Available Listings Section */}
      <h2>Available Listings</h2>
      <div className="listings-container">
        {crops.length === 0 ? (
          <p>No crops listed yet.</p>
        ) : (
          crops.map((crop, index) => (
            <div key={index} className="crop-card">
              <img
                src={crop.image || "default-image.jpg"}
                alt={crop.name}
                className="crop-image"
              />
              <div className="crop-details">
                <h3>
                  {crop.name} - {crop.variety}
                </h3>
                <p>
                  <strong>Category:</strong> {crop.category}
                </p>
                <p>
                  <strong>Quantity:</strong> {crop.quantity} kg
                </p>
                <p>
                  <strong>Price:</strong> ₹{crop.price} per unit
                </p>
                <p>
                  <strong>Quality:</strong> {crop.quality}
                </p>
              </div>
              <div className="card-actions">
                <button className="edit-btn" onClick={() => onEdit(index)}>
                  Edit
                </button>
                <button className="dismiss-btn" onClick={() => onDismiss(index)}>
                  Dismiss Post
                </button>
                <button className="history-btn">Previous History</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AvailableListings;