import React, { useState } from 'react';
import axios from 'axios';
import './PredictForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


function PredictHouse() {
  const [formData, setFormData] = useState({
    location: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    yearBuilt: ''
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const currentYear = new Date().getFullYear();
    const year = parseInt(formData.yearBuilt);

    if (year < 1800 || year > currentYear || formData.yearBuilt.length !== 4) {
      alert(`Please enter a valid 4-digit year between 1800 and ${currentYear}`);
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/predict/house', formData);
      setPrediction(res.data.predictedPrice);
    } catch (err) {
      console.error('Prediction failed', err);
    }
  };

  return (
    <div className="predict-form-container">
      <h2>🏠 House Price Prediction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
  <FontAwesomeIcon icon={faLocationDot} style={{ marginRight: '8px', color: '#c5f436ff' }} />
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
          <label>Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="form-group">
          <label>Year Built</label>
          <input
            type="number"
            name="yearBuilt"
            value={formData.yearBuilt}
            onChange={handleChange}
            required
            min="1800"
            max={new Date().getFullYear()}
            title="Enter a valid 4-digit year"
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

export default PredictHouse;
