import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      navigate('/'); // redirect if logged in
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    if (email === 'admin@example.com' && password === 'password123') {
      localStorage.setItem('authToken', 'dummy-auth-token');
      localStorage.setItem('user', JSON.stringify({ name: 'Admin User', email: 'admin@example.com' }));
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
        padding: '1rem',
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: '2.5rem 2rem',
          borderRadius: '8px',
          backgroundColor: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          width: '320px',
          boxSizing: 'border-box',
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
        noValidate
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1.8rem', color: '#1976d2' }}>
          Admin Login
        </h2>

        {error && (
          <div
            role="alert"
            style={{
              marginBottom: '1.2rem',
              padding: '0.75rem',
              backgroundColor: '#ffe6e6',
              color: '#cc0000',
              borderRadius: '4px',
              fontSize: '0.95rem',
              fontWeight: '600',
            }}
          >
            {error}
          </div>
        )}

        <div style={{ marginBottom: '1.25rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            autoComplete="email"
            style={{
              width: '100%',
              padding: '0.55rem 0.75rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.2s',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1976d2')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </div>

        <div style={{ marginBottom: '1.75rem', position: 'relative' }}>
          <label htmlFor="password" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
            Password
          </label>
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            autoComplete="current-password"
            style={{
              width: '100%',
              padding: '0.55rem 3rem 0.55rem 0.75rem',
              borderRadius: '4px',
              border: '1px solid #ccc',
              fontSize: '1rem',
              transition: 'border-color 0.2s',
              boxSizing: 'border-box',
            }}
            onFocus={(e) => (e.target.style.borderColor = '#1976d2')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '65%',   // nudged downward from 50% to 55%
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1976d2',
              fontWeight: '600',
              fontSize: '0.85rem',
              userSelect: 'none',
              padding: '0',
              lineHeight: 1,
            }}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#1976d2',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#115293')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#1976d2')}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
