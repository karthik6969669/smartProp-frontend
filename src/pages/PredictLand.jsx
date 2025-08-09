import React, { useState } from 'react';
import axios from 'axios';
import './PredictForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function PredictLand() {
  const [formData, setFormData] = useState({
    location: '',
    area: '',
    landType: '',
    soilQuality: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/predict/land', formData);
      setPrediction(res.data.predictedPrice); // Expecting { predictedPrice: number }
    } catch (err) {
      console.error('Prediction failed', err);
    }
  };

  return (
    <div className="predict-form-container">
      <h2>🌾 Land Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px', color: '#f44336' }} />
  Location
</label>

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Area (sq ft)</label>
          <input
            type="number"
            name="area"
            value={formData.area}
            onChange={handleChange}
            required
            min="100"
          />
        </div>

        <div className="form-group">
          <label>Land Type</label>
          <input
            type="text"
            name="landType"
            value={formData.landType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Soil Quality</label>
          <input
            type="text"
            name="soilQuality"
            value={formData.soilQuality}
            onChange={handleChange}
            required
          />
        </div>

        <button className="predict-btn" type="submit">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-result">
          <h3>Predicted Price:</h3>
          <p>₹ {prediction.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}

export default PredictLand;
