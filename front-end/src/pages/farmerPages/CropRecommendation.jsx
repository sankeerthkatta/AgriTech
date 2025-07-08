import React, { useState } from "react";
// import "./CropRecommendation.css";
import Navbar from "../../Components/FarmerComp/Navbar";
const CropRecommendation = () => {
  const [formData, setFormData] = useState({
    N: "",
    P: "",
    K: "",
    temperature: "",
    humidity: "",
    ph: "",
    rainfall: "",
  });

  const [recommendedCrop, setRecommendedCrop] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setRecommendedCrop("");

    try {
      const response = await fetch("http://localhost:5000/recommend_crop", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.recommended_crop) {
        setRecommendedCrop(data.recommended_crop);
      } else {
        setError("Failed to get recommendation.");
      }
    } catch (err) {
      setError("Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="crop-recommendation-page">
        <Navbar />
      <div className="crop-recommendation-container">
      <h2>Crop Recommendation System</h2>
      <form onSubmit={handleSubmit}>
        {["N", "P", "K", "temperature", "humidity", "ph", "rainfall"].map((field) => (
          <div className="crop-recommendation-form-group" key={field}>
            <label className="crop-recommendation-label">
              {field.charAt(0).toUpperCase() + field.slice(1)}:
            </label>
            <input
              className="crop-recommendation-input"
              type="number"
              name={field}
              value={formData[field]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button
          className="crop-recommendation-button"
          type="submit"
          disabled={loading}
        >
          {loading ? "Predicting..." : "Get Recommendation"}
        </button>
      </form>

      {recommendedCrop && (
        <div className="crop-recommendation-result">
          🌾 Recommended Crop: <strong>{recommendedCrop}</strong>
        </div>
      )}
      {error && (
        <div className="crop-recommendation-error">{error}</div>
      )}
    </div>
    </div>
  );
};

export default CropRecommendation;
