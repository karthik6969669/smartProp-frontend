import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyEmail() {
  const { token } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/auth/verify-email?token=${token}`)
      .then(res => {
        alert(res.data || "Email verified successfully");
        navigate("/login");
      })
      .catch(() => {
        alert("Invalid or expired token");
        navigate("/login");
      });
  }, [token, navigate]);

  return <p>Verifying your email...</p>;
}
