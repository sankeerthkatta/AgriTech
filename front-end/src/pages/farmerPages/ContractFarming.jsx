
import React, { useState, useEffect } from "react";
import Navbar from "../../Components/FarmerComp/Navbar"; 
import { useNavigate } from "react-router-dom";
import BuyerOfferings from "../../Components/FarmerComp/Buyer-listings";
import AvailableListings from "../../Components/FarmerComp/AvailableListings";  

const ContractFarming = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    // const [crops, setCrops] = useState(() => {
    //     if (typeof window !== 'undefined') {
    //         return JSON.parse(localStorage.getItem("crops")) || [];
    //     }
    //     return [];
    // });
    const [crops, setCrops] = useState([]);
    useEffect(() => {
        const fetchCrops = async () => {
          try {
            const res = await fetch("api/v1/contractfarm/mycrops", {
              credentials: "include", // important if you're using httpOnly cookies
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message || "Failed to fetch crops");
            setCrops(data);
          } catch (err) {
            console.error("Error fetching crops:", err.message);
          }
        };
      
        fetchCrops();
      }, []);
      
    const [editingIndex, setEditingIndex] = useState(null);
    const [formData, setFormData] = useState({
        crop_name: "mango",
        category: "Fruits",
        variety: "",
        quantity: "",
        price: "",
        quality: "",
        harvestDate: "",
        organic: false,
        // certification: "",
        // pesticideUsage: "",
        location: "",
        // deliveryOption: "Self-pickup",
        // shippingCharges: "",
        image: "",
        // description: "",
        farmerName: "",
        phone: "",
        // contactMethod: "Call",
        // paymentMethod: "UPI",
    });

    // useEffect(() => {
    //     localStorage.setItem("crops", JSON.stringify(crops));
    // }, [crops]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     setCrops((prevCrops) => {
    //         let updatedCrops;
    //         if (editingIndex !== null) {
    //             updatedCrops = [...prevCrops];
    //             updatedCrops[editingIndex] = formData;
    //         } else {
    //             updatedCrops = [...prevCrops, formData];
    //         }
    //         return updatedCrops;
    //     });

    //     setShowModal(false);
    //     setFormData({
    //         name: "",
    //         category: "Fruits",
    //         variety: "",
    //         quantity: "",
    //         price: "",
    //         harvestDate: "",
    //         quality: "",
    //         organic: false,
    //         certification: "",
    //         pesticideUsage: "",
    //         location: "",
    //         deliveryOption: "Self-pickup",
    //         shippingCharges: "",
    //         images: [],
    //         description: "",
    //         farmerName: "",
    //         phone: "",
    //         contactMethod: "Call",
    //         paymentMethod: "UPI",
    //     });
    //     setEditingIndex(null);
    // };
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
      
    //     const url = editingIndex !== null
    //       ? `/api/v1/contractfarm/updatecrop/${crops[editingIndex]._id}`
    //       : "/api/v1/contractfarm/addcrop";
      
    //     const method = editingIndex !== null ? "PUT" : "POST";
      
    //     try {
    //       const res = await fetch(url, {
    //         method,
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //         credentials: "include", // for cookies
    //         body: JSON.stringify(formData),
    //       });
      
    //       const data = await res.json();
    //       if (!res.ok) throw new Error(data.message || "Operation failed");
      
    //       // Refresh crop list
    //     //   const refreshed = await fetch("/api/v1/contractfarm/mycrops", {
    //     //     credentials: "include",
    //     //   });
    //     //   const updatedCrops = await refreshed.json();
    //     //   setCrops(updatedCrops);

    //     if (res.ok) {
    //         // const data = await res.json();
          
    //         if (editingIndex !== null) {
    //           // It's an edit: update the crop at that index
    //           const updatedList = [...crops];
    //           updatedList[editingIndex] = data;
    //           setCrops(updatedList);
    //         } else {
    //           // It's a new crop: add it to the list
    //           setCrops([...crops, data]);
    //         }
          
    //         // Reset form and editing state if needed
    //         // setFormData(initialFormData);
    //         setEditingIndex(null);
    //         setFormData(false);
    //     }
    const handleSubmit = async (e) => {
      e.preventDefault();
    
      const isEditing = editingIndex !== null;
      console.log("isEditing", isEditing);
      const url = isEditing
        ? `/api/v1/contractfarm/updatecrop/${crops?.[editingIndex]?._id}`
        : "/api/v1/contractfarm/addcrop";
      const method = isEditing ? "PUT" : "POST";
    
      try {
        // const  dataToSend = JSON.stringify(formData)
        // console.log(dataToSend);
        // for (const key in formData) {
        //   dataToSend.append(key, formData[key]);ac
        // }
        const dataToSend = new FormData();

for (const key in formData) {
  dataToSend.append(key, formData[key]);
}

    
        const res = await fetch(url, {
          method,
          credentials: "include",
          body: dataToSend, // Send FormData directly
        });
    
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to save crop");
    
        if (isEditing) {
          const updatedList = [...crops];
          updatedList[editingIndex] = data;
          setCrops(updatedList);
        } else {
          setCrops([...crops, data]);
        }
    
        resetForm();
      } catch (err) {
        console.error("Error saving crop:", err.message);
      }
    };
    




//       const resetForm = () => {
//   setFormData({
//     crop_name: "",
//     category: "Fruits",
//     variety: "",
//     quantity: "",
//     price: "",
//     harvestDate: "",
//     quality: "",
//     organic: false,
//     image: "",
//     location: "",
//     farmerName: "",
//     phone: "",
//   });
//   setEditingIndex(null);
//   setShowModal(false);
// };

// Use it when resetting the form
// resetForm();
// } catch (err) {
//     console.error("Error saving crop:", err.message);
//   }
// }
  const resetForm = () => {
          // Reset modal
          setShowModal(false);
          setFormData({
            crop_name: "",
            category: "Fruits",
            variety: "",
            quantity: "",
            price: "",
            harvestDate: "",
            quality: "",
            organic: false,
            // certification: "",
            // pesticideUsage: "",
            location: "",
            // deliveryOption: "Self-pickup",
            // shippingCharges: "",
            image:"",
            // description: "",
            farmerName: "",
            phone: "",
            // contactMethod: "Call",
            // paymentMethod: "UPI",
          });
          setEditingIndex(null);
      
        
      };
      

    const handleEdit = (index) => {
        setFormData(crops[index]);
        setEditingIndex(index);
        setShowModal(true);
    };

    // const handleDismiss = async (index) => {
    //   const cropId = crops[index]._id;
    //   try {
    //     const res = await fetch(`/api/v1/contractfarm/deletecrop/${cropId}`, {
    //       method: "DELETE",
    //       credentials: "include",
    //     });
    //     const data = await res.json();
    //     if (!res.ok) throw new Error(data.message || "Delete failed");
    
    //     // Refresh crop list
    //     const updated = await fetch("/api/v1/contractfarm/mycrops", {
    //       credentials: "include",
    //     });
    //     const cropsData = await updated.json();
    //     setCrops(cropsData);
    //   } catch (err) {
    //     console.error("Error deleting crop:", err.message);
    //   }
    // };
    // const handleDismiss = (index) => {
    //     setCrops((prevCrops) => {
    //         const updatedCrops = prevCrops.filter((_, i) => i !== index);
    //         localStorage.setItem("crops", JSON.stringify(updatedCrops));
    //         return updatedCrops;
    //     });
    // };

    const handleDismiss = async (index) => {
      const cropId = crops[index]._id;
      try {
        const res = await fetch(`/api/v1/contractfarm/deletecrop/${cropId}`, { method: "DELETE", credentials: "include" });
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Delete failed");
    
        setCrops(prev => prev.filter(crop => crop._id !==cropId));
      } catch (err) {
        console.error("Error deleting crop:", err.message);
      }
    };
    const handleFileChange = (e) => {
      const file = e.target.files[0];
      setFormData({ ...formData, image: file }); // file object
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
      //   const data = new FormData();
        
      //   for (let key in formData) {
      //     data.append(key, formData[key]);
      //   }
      
      //   const response = await fetch('/api/crops', {
      //     method: 'POST',
      //     body: data,
      //   });
      
      //   const result = await response.json();
      //   console.log(result);
      // };
    };
    
    
    
      

    return (
        <div className="contract-farming-page">
            <Navbar />
            <div className="main-content-container" style={{
                width: '80%',
                margin: '0 auto',
                maxWidth: '1200px'
            }}>
            <div className="content-container">
                <h1>Contract Farming</h1>
                <button className="add-crop-btn" onClick={() => setShowModal(true)}>
                    ADD CROP
                </button>
                <button className="farmer-contracts-btn" onClick={() => navigate("/contracts")}>
                    Contracts
                </button>
            </div>

            {showModal && (
                <div className="c-modal-overlay" onClick={() =>{setShowModal(false);resetForm();}}>
                    <div className="c-modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{editingIndex !== null ? "Edit Crop Details" : "Add Crop Details"}</h2>
                        <form className="crop-form" onSubmit={handleSubmit}>
                            <div className="form-section">
                                <h3>Basic Crop Details</h3>
                                <label>Crop Name:</label>
                                <input type="text" name="crop_name" value={formData.crop_name} onChange={handleChange} placeholder="Enter crop name" />
                                <label>Category:</label>
                                <select name="category" value={formData.category} onChange={handleChange}>
                                    <option>Fruits</option>
                                    <option>Vegetables</option>
                                    <option>Grains</option>
                                    <option>Pulses</option>
                                </select>
                                <label>Variety:</label>
                                <input type="text" name="variety" value={formData.variety} onChange={handleChange}  placeholder="Enter crop variety" />
                                <label>Quantity Available:</label>
                                <input type="text" name="quantity" value={formData.quantity} onChange={handleChange}  placeholder="Enter quantity" />
                                <label>Price per Unit:</label>
                                <input type="number" name="price" value={formData.price} onChange={handleChange}  placeholder="Enter price" />
                                <label>Harvest Date:</label>
                                <input type="date" name="harvestDate" value={formData.harvestDate} onChange={handleChange} />
                                <label>Image URL or Path:</label>
                                <label>Upload Image:</label>
<input
  type="file"
  name="image"
  accept="image/*"
  onChange={handleFileChange}
/>

                            </div>

                            <div className="form-section">
                                <h3>Quality & Certification</h3>
                                <label>Crop Grade/Quality:</label>
                                <input type="text" name="quality" value={formData.quality} onChange={handleChange}  placeholder="Enter grade (A, B, etc.)" />
                                <label>Organic:</label>
                                <input type="checkbox" name="organic" checked={formData.organic} onChange={handleChange} />
                                {/* <label>Certification (if any):</label>
                                <input type="text" name="certification" value={formData.certification} onChange={handleChange} placeholder="Enter certification details" />
                                <label>Pesticide Usage Details:</label>
                                <textarea name="pesticideUsage" value={formData.pesticideUsage} onChange={handleChange} placeholder="Enter pesticide usage details"></textarea> */}
                            </div>

                            <div className="form-section">
                                <h3>Location & Delivery</h3>
                                <label>Farmer's Location:</label>
                                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Enter district, state" />
                                {/* <label>Delivery Options:</label>
                                <select name="deliveryOption" value={formData.deliveryOption} onChange={handleChange}>
                                    <option>Self-pickup</option>
                                    <option>Farmer delivery</option>
                                    <option>Third-party logistics</option>
                                </select>
                                <label>Shipping Charges:</label>
                                <input type="number" name="shippingCharges" value={formData.shippingCharges} onChange={handleChange} placeholder="Enter shipping cost (if any)" /> */}
                            </div>

                            <div className="form-section">
                                <h3>Contact & Payment Details</h3>
                                <label>Farmer's Name:</label>
                                <input type="text" name="farmerName" value={formData.farmerName} onChange={handleChange} placeholder="Enter your name" />
                                <label>Phone Number / WhatsApp:</label>
                                <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
                                {/* <label>Preferred Contact Method:</label>
                                <select name="contactMethod" value={formData.contactMethod} onChange={handleChange}>
                                    <option>Call</option>
                                    <option>Message</option>
                                    <option>WhatsApp</option>
                                </select>
                                <label>Payment Method Accepted:</label>
                                <select name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                                    <option>UPI</option>
                                    <option>Bank Transfer</option>
                                    <option>Cash on Delivery</option>
                                </select> */}
                            </div>

                            <div className="form-actions">
                                <button type="button" className="cancel-btn" onClick={() => {setShowModal(false) ;resetForm();} }>Cancel</button>
                                <button type="submit" className="submit-btn">{editingIndex !== null ? "Update" : "Submit"}</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}


            <BuyerOfferings />

          
            <AvailableListings crops={crops} handleEdit={handleEdit} handleDismiss={handleDismiss} />
        </div>
        </div>
    );
};

export default ContractFarming;
