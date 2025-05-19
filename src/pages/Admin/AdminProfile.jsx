import React, { useState } from 'react';

const AdminProfile = () => {
  const [admin, setAdmin] = useState({
    name: 'Ranajit Sekh',
    email: 'ranajit@example.com',
    phone: '+91 1234567890',
    role: 'Super Admin',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
  });

  const [imagePreview, setImagePreview] = useState(admin.image);
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setImagePreview(imgURL);
      setAdmin({ ...admin, image: imgURL });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Updated admin info:', admin);
    
    // Simulate update success
    setSuccessMessage('Updated successfully');

    // Hide message after 3 seconds
    setTimeout(() => setSuccessMessage(''), 3000);

    // You can send updated data to backend here
  };

  return (
    <div className="container" style={{ marginTop: '80px' }}>
      <h2 className="mb-4">Admin Profile</h2>

      {successMessage && (
        <div className="alert alert-success" role="alert">
          {successMessage}
        </div>
      )}

      <div className="row">
        {/* Form Section */}
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={admin.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={admin.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={admin.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label>Role</label>
              <input
                type="text"
                className="form-control"
                name="role"
                value={admin.role}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Save Changes</button>
          </form>
        </div>

        {/* Image Section */}
        <div className="col-md-4 text-center">
          <img
            src={imagePreview}
            alt="Admin"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div className="form-group">
            <input
              type="file"
              accept="image/*"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
