import React from 'react';
import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <div className="top-section">
        <h1>SmartProp AI</h1>
        <h2>AI-driven House & Land Price Prediction using Spatial & Temporal Data</h2>
      </div>

      <div className="cards-container">
        <div className="card house-card">
          <div className="icon-container blue">
            <i className="fas fa-home"></i>
          </div>
          <h3>House Price Prediction</h3>
          <p>Get AI-based valuation for homes using smart algorithms and past property data.</p>
          <ul>
            <li>Residential buildings</li>
            <li>Neighborhood trends</li>
          </ul>
          <button className="btn blue-btn" onClick={() => navigate('/predict-house')}>Predict House Price</button>
        </div>

        <div className="card land-card">
          <div className="icon-container green">
            <i className="fas fa-tree"></i>
          </div>
          <h3>Land Price Prediction</h3>
          <p>Evaluate land worth based on zoning, area type, and historical market performance.</p>
          <ul>
            <li>Development potential</li>
            <li>Soil and use analysis</li>
          </ul>
          <button className="btn green-btn" onClick={() => navigate('/predict-land')}>Predict Land Price</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
