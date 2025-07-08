import React from 'react';

const CropAddForm = ({ formData, handleChange, handleSubmit, setShowModal, editingIndex }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{editingIndex !== null ? "Edit Crop Details" : "Add Crop Details"}</h2>
        <div className="modal-body">
          <form className="crop-form" onSubmit={handleSubmit}>
            {/* All your form sections here */}
            <div className="form-section">
              <h3>Basic Crop Details</h3>
              <label>Crop Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter crop name" />
              {/* Include all other fields... */}
            </div>
            
            {/* Add other form sections similarly */}

            <div className="form-actions">
              <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
              <button type="submit" className="submit-btn">{editingIndex !== null ? "Update" : "Submit"}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CropAddForm;