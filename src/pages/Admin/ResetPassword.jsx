import React, { useState } from 'react';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [success, setSuccess] = useState(false);

  // When user submits email to send reset link (and OTP)
  const handleSendResetLink = (e) => {
    e.preventDefault();

    // Simulate sending reset link & OTP (replace with real API call)
    setOtpSent(true);
    setSuccess(false);
    setOtp('');
    // Optionally clear email or keep it for user reference
  };

  // When user submits OTP
  const handleVerifyOtp = (e) => {
    e.preventDefault();

    // Simulate OTP verification (replace with real API call)
    if (otp === '123456') { // Example OTP for demo
      setSuccess(true);
      setOtpSent(false);
      setEmail('');
      setOtp('');
      // Further action like redirect or password reset can happen here
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="reset-container d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="reset-card p-4 shadow rounded bg-white" style={{ maxWidth: '400px', width: '100%' }}>
        <h2 className="mb-3 text-center">Reset Password</h2>

        {/* Step 1: Enter email and send reset link */}
        {!otpSent && (
          <form onSubmit={handleSendResetLink}>
            <div className="form-group mb-3">
              <label htmlFor="email">Enter your email</label>
              <input
                type="email"
                className="form-control"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="example@email.com"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Reset Link</button>
          </form>
        )}

        {/* Step 2: Enter OTP if reset link sent */}
        {otpSent && (
          <form onSubmit={handleVerifyOtp}>
            <div className="form-group mb-3">
              <label htmlFor="otp">Enter OTP sent to your email</label>
              <input
                type="text"
                className="form-control"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                maxLength={6}
              />
            </div>
            <button type="submit" className="btn btn-success w-100">Verify OTP</button>
          </form>
        )}

        {/* Success message */}
        {success && (
          <div className="alert alert-success mt-3 text-center">
            OTP verified successfully! You can now reset your password.
          </div>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
