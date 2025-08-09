// ResetPassword.jsx
import './ResetPassword.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

function ResetPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  const handleReset = async () => {
    try {
      const res = await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, {
        password,
      });
      setMsg(res.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Reset failed');
      setMsg('');
    }
  };

  return (
    <div className="reset-password-container">

      <h2>Set New Password</h2>
      {msg && <p style={{ color: 'green' }}>{msg}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
}

export default ResetPassword;
