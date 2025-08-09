import React, { useState } from 'react';

function UploadProperty() {
  const [property, setProperty] = useState({
    location: '',
    pincode: '',
    size: '',
    roadWidth: '',
    zoneType: '',
    buildYear: '',
    floors: '',
    houseType: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(property));
    // TODO: Send property upload API request
  };

  return (
    <div>
      <h2>Upload Property</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Area Name" value={property.location}
          onChange={(e) => setProperty({ ...property, location: e.target.value })} required />
        <br />
        <input type="text" placeholder="Pincode" value={property.pincode}
          onChange={(e) => setProperty({ ...property, pincode: e.target.value })} required />
        <br />
        <input type="text" placeholder="Size (sq ft)" value={property.size}
          onChange={(e) => setProperty({ ...property, size: e.target.value })} />
        <br />
        <input type="text" placeholder="Road Width (ft)" value={property.roadWidth}
          onChange={(e) => setProperty({ ...property, roadWidth: e.target.value })} />
        <br />
        <input type="text" placeholder="Zone Type" value={property.zoneType}
          onChange={(e) => setProperty({ ...property, zoneType: e.target.value })} />
        <br />
        <input type="text" placeholder="Build Year" value={property.buildYear}
          onChange={(e) => setProperty({ ...property, buildYear: e.target.value })} />
        <br />
        <input type="text" placeholder="No. of Floors" value={property.floors}
          onChange={(e) => setProperty({ ...property, floors: e.target.value })} />
        <br />
        <input type="text" placeholder="House Type" value={property.houseType}
          onChange={(e) => setProperty({ ...property, houseType: e.target.value })} />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default UploadProperty;
