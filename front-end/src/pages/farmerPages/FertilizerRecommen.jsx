import React, { useState } from 'react';
// import './FertilizerRecommendation.css';
import Navbar from "../../Components/FarmerComp/Navbar";
const FertilizerRecommendation = () => {
  const [form, setForm] = useState({
    temperature: '',
    humidity: '',
    moisture: '',
    soil_type: '',
    crop_type: '',
    nitrogen: '',
    phosphorous: '',
    potassium: '',
  });

  const [result, setResult] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult('Processing...');

    try {
      const res = await fetch('http://localhost:5000/recommend_fertilizer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      setResult(data.recommendation || `Error: ${data.error}`);
    } catch (error) {
      setResult('Failed to connect to server.');
    }
  };

  return (

    < div className="fertilizer-recommendation-page">
       <Navbar />
    <div className="fertilizer-card">
      <h2 className="fertilizer-title">🧪 Fertilizer Recommendation</h2>
      <form onSubmit={handleSubmit} className="fertilizer-form">
        <input type="number" name="temperature" placeholder="Temperature (°C)" onChange={handleChange} required />
        <input type="number" name="humidity" placeholder="Humidity (%)" onChange={handleChange} required />
        <input type="number" name="moisture" placeholder="Moisture (%)" onChange={handleChange} required />

       <select name="soil_type" onChange={handleChange} required>
  <option value="">Select Soil Type</option>
  <option value="Sandy">Sandy</option>
  <option value="Loamy">Loamy</option>
  <option value="Black">Black</option>
  <option value="Red">Red</option>
  <option value="Clayey">Clayey</option>
</select>

<select name="crop_type" onChange={handleChange} required>
  <option value="">Select Crop</option>
  <option value="Barley">Barley</option>
  <option value="Cotton">Cotton</option>
  <option value="Ground Nuts">Ground Nuts</option>
  <option value="Maize">Maize</option>
  <option value="Millets">Millets</option>
  <option value="Oil seeds">Oil seeds</option>
  <option value="Paddy">Paddy</option>
  <option value="Pulses">Pulses</option>
  <option value="Sugarcane">Sugarcane</option>
  <option value="Tobacco">Tobacco</option>
  <option value="Wheat">Wheat</option>
  <option value="coffee">Coffee</option>
  <option value="kidneybeans">Kidney Beans</option>
  <option value="orange">Orange</option>
  <option value="pomegranate">Pomegranate</option>
  <option value="rice">Rice</option>
  <option value="watermelon">Watermelon</option>
</select>


        <input type="number" name="nitrogen" placeholder="Nitrogen (N)" onChange={handleChange} required />
        <input type="number" name="phosphorous" placeholder="Phosphorous (P)" onChange={handleChange} required />
        <input type="number" name="potassium" placeholder="Potassium (K)" onChange={handleChange} required />

        <button type="submit">Get Recommendation</button>
      </form>

      {result && <div className="fertilizer-result">{result}</div>}
    </div>
    </div>
  );
};

export default FertilizerRecommendation;
