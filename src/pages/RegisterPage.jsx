import React, { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Customer' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      alert(res.data.message);
      navigate('/login');
    } catch (err) {
      console.error(err);

      if (err.response?.status === 409) {
        setError("User already exists. Try logging in.");
      } else if (err.response?.status === 400) {
        setError("Please fill in all required fields.");
      } else {
        setError("Registration failed. Try again.");
      }
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2>Register</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          required
        />
        <select
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
        >
          <option value="Customer">Customer</option>
          <option value="Owner">Owner</option>
        </select>
        <button type="submit">Register</button>

        <p className="login-link">
          Already have an account?{" "}
          <button type="button" onClick={() => navigate('/login')}>
            Login
          </button>
        </p>
      </form>
    </div>
  );
}

export default RegisterPage;
