// import React, { useState } from "react";
// import Navbar from "../../Components/FarmerComp/Navbar";

// const Cropdiseaseprediction = () => {
//   const [image, setImage] = useState(null);
//   const [prediction, setPrediction] = useState("");
//   const [confidence, setConfidence] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => setImage(e.target.files[0]);

//   const handleSubmit = async () => {
//     if (!image) return alert("Please select an image.");
//     const formData = new FormData();
//     formData.append("image", image);

//     // setLoading(true);
//     // const res = await fetch("http://localhost:3000/predict", {
//     //   method: "POST",
//     //   body: formData,
//     // }).then((res) => res.json())
//     // .then((data) => console.log(data))
//     // .catch((err) => console.error(err));

//     // const data = await res.json();
//     // setPrediction(data.prediction);
//     // setLoading(false);


//     setLoading(true);

// try {
//   const res = await fetch("http://localhost:5000/predict", {
//     method: "POST",
//     body: formData,
//   });

//   const data = await res.json();
//   console.log(data);
//   setPrediction(data.predicted_class); 
//   setConfidence(data.confidence); // Assuming the response contains a field named 'confidence'
//   // Assuming the response contains a field named 'predicted_class'
// } catch (err) {
//   console.error("Prediction error:", err);
// } finally {
//   setLoading(false);
// }

//   };

//   return (
//     <div className="crop-detect-page">
//       <Navbar />
//       <div className="detect-container">
//         <h2>Crop Disease Detection</h2>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
//         <button onClick={handleSubmit}>Submit</button>
//         {loading && <p>Processing...</p>}
//         {prediction && <p><strong>Prediction:</strong> {prediction}</p>}
//         {confidence && <p><strong>Confidence:</strong> {confidence}</p>}
//       </div>
//     </div>
//   );
// };

// export default Cropdiseaseprediction;




// import React, { useState } from "react";
// import Navbar from "../../Components/FarmerComp/Navbar";

// const Cropdiseaseprediction = () => {
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null); // For image preview
//   const [prediction, setPrediction] = useState("");
//   const [confidence, setConfidence] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file)); // Create a local preview URL
//   };

//   const handleSubmit = async () => {
//     if (!image) return alert("Please select an image.");
//     const formData = new FormData();
//     formData.append("image", image);

//     setLoading(true);
//     try {
//       const res = await fetch("http://localhost:5000/predict", {
//         method: "POST",
//         body: formData,
//       });

//       const data = await res.json();
//       console.log(data);
//       setPrediction(data.predicted_class);
//       setConfidence(data.confidence);
//     } catch (err) {
//       console.error("Prediction error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="crop-detect-page">
//       <Navbar />
//       <div className="detect-container">
//         <h2>Crop Disease Detection</h2>
//         <input type="file" accept="image/*" onChange={handleFileChange} />
        
//         {preview && (
//           <div style={{ marginTop: "10px" }}>
//             <img
//               src={preview}
//               alt="Selected Preview"
//               style={{ width: "300px", borderRadius: "8px" }}
//             />
//           </div>
//         )}

//         <button onClick={handleSubmit}>Submit</button>
//         {loading && <p>Processing...</p>}
//         {prediction && <p><strong>Prediction:</strong> {prediction}</p>}
//         {confidence && <p><strong>Confidence:</strong> {confidence.toFixed(2)}%</p>}
//       </div>
//     </div>
//   );
// };

// export default Cropdiseaseprediction;



import React, { useState } from "react";
import Navbar from "../../Components/FarmerComp/Navbar";

const Cropdiseaseprediction = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null); // For image preview
  const [prediction, setPrediction] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // State for popup visibility

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file)); 
  };

  const handleSubmit = async () => {
    if (!image) return alert("Please select an image.");
    const formData = new FormData();
    formData.append("image", image);

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if(data.confidence<95)
      {
        alert("please upload an leaf image");
      }
      else{
      setPrediction(data.predicted_class);
      setConfidence(data.confidence);
      setModalVisible(true); 
      }// Show the popup after prediction
    } catch (err) {
      console.error("Prediction error:", err);
    } finally {
      setLoading(false);
    }
  };

  const closeModal = () => {
    setModalVisible(false); // Close the popup
  };

  const diseaseInfo = {
   "Apple___Apple_scab": {
    cause: "A fungus that thrives in wet weather, causing dark, scabby spots on leaves and fruit.",
    remedies: "Spray Captan or Mancozeb; remove and destroy infected leaves and fruit.",
    prevention: "Prune for airflow, rake fallen debris, and use resistant varieties."
  },
  "Apple___Black_rot": {
    cause: "A fungus that enters through wounds and causes rotting spots on fruit and branches.",
    remedies: "Apply Thiophanate-methyl or Captan; prune out infected limbs and burn them.",
    prevention: "Keep orchard clean, avoid injuring bark, and remove mummified fruit."
  },
  "Apple___Cedar_apple_rust": {
    cause: "A fungus spread between apple and cedar trees, forming orange spots on leaves.",
    remedies: "Spray Myclobutanil or Propiconazole; remove cedar galls nearby.",
    prevention: "Plant resistant varieties and space apples away from cedars."
  },
  "Apple___healthy": {
    cause: "No disease detected.",
    remedies: "Keep watering, feeding, and pruning regularly.",
    prevention: "Maintain good orchard hygiene and monitor for pests early."
  },

  // Blueberry
  "Blueberry___healthy": {
    cause: "No disease detected.",
    remedies: "Maintain soil acidity and mulch; prune dead wood.",
    prevention: "Ensure good drainage and proper fertilization."
  },

  // Cherry
  "Cherry_(including_sour)___Powdery_mildew": {
    cause: "A white, powdery fungus on leaves and fruit during mild, humid weather.",
    remedies: "Spray sulfur or Myclobutanil; remove infected parts.",
    prevention: "Space plants for airflow and water at the base."
  },
  "Cherry_(including_sour)___healthy": {
    cause: "No disease detected.",
    remedies: "Prune for light and air; check for pests regularly.",
    prevention: "Use balanced fertilization and good irrigation practices."
  },

  // Corn diseases
  "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
    cause: "Fungal spots on leaves due to Cercospora fungus in wet conditions.",
    remedies: "Apply Azoxystrobin; remove crop debris.",
    prevention: "Rotate crops and improve field drainage."
  },
  "Corn_(maize)___Common_rust_": {
    cause: "Rust pustules appear on leaves from Puccinia fungus.",
    remedies: "Spray Chlorothalonil; remove early pustules by hand.",
    prevention: "Use resistant varieties and avoid overhead irrigation."
  },
  "Corn_(maize)___Northern_Leaf_Blight": {
    cause: "Long lesions caused by Exserohilum fungus in humid weather.",
    remedies: "Propiconazole sprays; remove infected leaves.",
    prevention: "Space rows for airflow and rotate fields."
  },
  "Corn_(maize)___healthy": {
    cause: "No disease detected.",
    remedies: "Maintain soil health and proper spacing.",
    prevention: "Use clean seed and manage weeds."
  },

  // Grape diseases
  "Grape___Black_rot": {
    cause: "A fungus causing black spots on fruit and leaves.",
    remedies: "Spray Fenarimol; remove and destroy infected clusters.",
    prevention: "Prune for airflow and sanitize tools."
  },
  "Grape___Esca_(Black_Measles)": {
    cause: "Wood-rotting fungi that cause vine decline and spotty fruit.",
    remedies: "No cure; prune and remove affected wood.",
    prevention: "Use healthy cuttings and avoid wounding vines."
  },
  "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
    cause: "Dark leaf spots from Isariopsis fungus.",
    remedies: "Spray sulfur or Chlorothalonil; remove fallen leaves.",
    prevention: "Keep vineyard floor clean and prune for light."
  },
  "Grape___healthy": {
    cause: "No disease detected.",
    remedies: "Maintain balanced fertilization.",
    prevention: "Inspect vines regularly and manage canopy."
  },

  // Citrus
  "Orange___Haunglongbing_(Citrus_greening)": {
    cause: "Spread by psyllids; causes yellow shoots and misshapen fruit.",
    remedies: "No cure; remove infected trees; use Imidacloprid for psyllids.",
    prevention: "Monitor insects and use reflective mulch to repel psyllids."
  },

  // Peach diseases
  "Peach___Bacterial_spot": {
    cause: "Bacteria causing dark spots on leaves and fruit.",
    remedies: "Copper sulfate sprays; prune and burn infected limbs.",
    prevention: "Avoid overhead watering and remove fallen leaves."
  },
  "Peach___healthy": {
    cause: "No disease detected.",
    remedies: "Prune and mulch appropriately.",
    prevention: "Monitor for pests and fertilize as needed."
  },

  // Pepper diseases
  "Pepper,_bell___Bacterial_spot": {
    cause: "Bacterial lesions on leaves and fruit from Xanthomonas.",
    remedies: "Copper fungicides; Streptomycin sprays.",
    prevention: "Use drip irrigation and rotate with other crops."
  },
  "Pepper,_bell___healthy": {
    cause: "No disease detected.",
    remedies: "Maintain soil moisture and fertilize correctly.",
    prevention: "Inspect plants weekly for early signs."
  },

  // Potato diseases
  "Potato___Early_blight": {
    cause: "Sunken leaf spots from Alternaria solani.",
    remedies: "Chlorothalonil sprays; remove lower leaves.",
    prevention: "Space plants and avoid wet leaves."
  },
  "Potato___Late_blight": {
    cause: "Water-soaked lesions by Phytophthora.",
    remedies: "Mancozeb or Fluazinam; remove infected plants.",
    prevention: "Plant resistant varieties and rotate fields."
  },
  "Potato___healthy": {
    cause: "No disease detected.",
    remedies: "Keep soil loose and well-drained.",
    prevention: "Use certified seed potatoes."
  },

  // Raspberry and Soybean
  "Raspberry___healthy": { cause: "No disease detected.", remedies: "--", prevention: "--" },
  "Soybean___healthy": { cause: "No disease detected.", remedies: "--", prevention: "--" },

  // Squash
  "Squash___Powdery_mildew": {
    cause: "White powdery growth by fungus on leaves.",
    remedies: "Sulfur or Myclobutanil sprays.",
    prevention: "Space plants and water soil only."
  },

  // Strawberry
  "Strawberry___Leaf_scorch": {
    cause: "Red lesions by fungus on leaves.",
    remedies: "Myclobutanil or Chlorothalonil; remove infected leaves.",
    prevention: "Rotate beds and avoid overhead irrigation."
  },
  "Strawberry___healthy": { cause: "No disease detected.", remedies: "--", prevention: "--" },

  // Tomato diseases
  "Tomato___Bacterial_spot": {
    cause: "Water-soaked spots by bacteria.",
    remedies: "Copper sprays; Streptomycin.",
    prevention: "Clean stakes and avoid wet leaves."
  },
  "Tomato___Early_blight": {
    cause: "Sunken lesions by Alternaria.",
    remedies: "Chlorothalonil; remove lower leaves.",
    prevention: "Mulch and rotate crops."
  },
  "Tomato___Late_blight": {
    cause: "Wet lesions by Phytophthora.",
    remedies: "Mancozeb; destroy plants after harvest.",
    prevention: "Plant on mounds and improve drainage."
  },
  "Tomato___Leaf_Mold": {
    cause: "Yellow spots turning gray by Passalora.",
    remedies: "Mancozeb or copper sprays.",
    prevention: "Provide good airflow and avoid wet leaves."
  },
  "Tomato___Septoria_leaf_spot": {
    cause: "Small spots by Septoria fungus.",
    remedies: "Chlorothalonil; remove old foliage.",
    prevention: "Rotate beds and mulch."
  },
  "Tomato___Spider_mites Two-spotted_spider_mite": {
    cause: "Tiny mites causing speckled leaves.",
    remedies: "Insecticidal soap or neem oil.",
    prevention: "Maintain humidity and release predatory mites."
  },
  "Tomato___Target_Spot": {
    cause: "Round lesions by Corynespora fungus.",
    remedies: "Chlorothalonil; remove infected leaves.",
    prevention: "Avoid overhead watering and rotate crops."
  },
  "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
    cause: "Virus spread by whiteflies.",
    remedies: "No cure; remove infected plants.",
    prevention: "Control whiteflies with Imidacloprid; use reflective mulch."
  },
  "Tomato___Tomato_mosaic_virus": {
    cause: "Virus causing mottled leaves.",
    remedies: "No chemical cure; remove infected plants.",
    prevention: "Use clean seed and disinfect tools."
  },
  "Tomato___healthy": { cause: "No disease detected.", remedies: "--", prevention: "--" }
    // Add more diseases here with similar information
  };

  return (
    <div className="crop-detect-page">
      <Navbar />
      <div className="detect-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '24px', color: '#4CAF50' }}>Crop Disease Detection</h2>
        
        <div style={{ marginBottom: '15px', textAlign: 'center' }}>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleFileChange} 
            style={{ padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>

        {preview && (
          <div style={{ marginTop: '10px', textAlign: 'center' }}>
            <img
              src={preview}
              alt="Selected Preview"
              style={{ width: '100%', maxWidth: '300px', borderRadius: '8px', marginBottom: '15px' }}
            />
          </div>
        )}

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={handleSubmit} 
            style={{
              backgroundColor: '#4CAF50', 
              color: 'white', 
              padding: '10px 20px', 
              borderRadius: '5px', 
              border: 'none', 
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </div>

        {loading && <p style={{ textAlign: 'center', fontSize: '16px' }}>Processing...</p>}

        {prediction && !modalVisible && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p><strong>Prediction:</strong> {prediction}</p>
            <p><strong>Confidence:</strong> {confidence.toFixed(2)}%</p>
          </div>
        )}
      </div>

      {/* Modal for displaying disease info */}
      {modalVisible && (
        <div className="modal" style={{
          position: 'fixed', top: '0', left: '0', right: '0', bottom: '0', 
          backgroundColor: 'rgba(0,0,0,0.5)', zIndex: '1000', display: 'flex', 
          justifyContent: 'center', alignItems: 'center'
        }}>
          <div style={{
            backgroundColor: 'white', padding: '30px', borderRadius: '8px', 
            width: '90%', maxWidth: '600px', boxShadow: '0px 4px 8px rgba(0,0,0,0.2)'
          }}>
            <h3 style={{ color: '#4CAF50' }}>Disease Information</h3>
            <h4><strong>Cause:</strong></h4>
            <p>{diseaseInfo[prediction].cause}</p>

            <h4><strong>Remedies:</strong></h4>
            <p>{diseaseInfo[prediction].remedies}</p>

            <h4><strong>Prevention:</strong></h4>
            <p>{diseaseInfo[prediction].prevention}</p>

            <button
              onClick={closeModal}
              style={{
                backgroundColor: '#F44336', color: 'white', padding: '10px 20px', 
                borderRadius: '5px', border: 'none', cursor: 'pointer', marginTop: '15px'
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cropdiseaseprediction;
