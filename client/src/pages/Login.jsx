import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./login.css"

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const switchTab = (tab) => {
    setActiveTab(tab);
    setError("");
  };

  async function register(ev) {
    ev.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch('http://localhost:4000/api/register', {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json();
      
      if (response.ok) {
        alert('Registration successful! Please login to continue.');
        // Switch to login tab after successful registration
        setActiveTab("login");
        // Clear form
        setUsername("");
        setEmail("");
        setPassword("");
      } else {
        setError(data.message || 'Registration failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  async function login(ev) {
    ev.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await fetch('http://localhost:4000/api/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
      
      const data = await response.json();
      
      if (response.ok) {
        // Store token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        alert('Login successful!');
        // Redirect to admin dashboard after login
        navigate('/admin-dashboard');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => switchTab("login")}
          >
            <FaSignInAlt /> Login
          </button>
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => switchTab("register")}
          >
            <FaUserPlus /> Register
          </button>
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="form-container">
          {activeTab === "login" ? (
            <form className="auth-form" onSubmit={login}>
              <h2>Welcome Back</h2>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          ) : (
            <form className="auth-form" onSubmit={register}>
              <h2>Create Account</h2>
              <div className="input-group">
                <FaUser className="icon" />
                <input 
                  type="text" 
                  placeholder="Username" 
                  value={username} 
                  onChange={e => setUsername(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  required 
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input 
                  type="password" 
                  placeholder="Password" 
                  value={password} 
                  onChange={e => setPassword(e.target.value)} 
                  required 
                />
              </div>
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? 'Registering...' : 'Register'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
