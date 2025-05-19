// import React, { useState, useEffect } from 'react';
// import { Form, Button, Card } from 'react-bootstrap';

// const Settings = () => {
//     const [form, setForm] = useState({
//         name: 'John Doe',
//         email: 'john@example.com',
//         phone: '9876543210',
//         theme: 'light',
//         notifications: true,
//         newPassword: '',
//         confirmPassword: '',
//     });

//     // Apply theme class to body
//     useEffect(() => {
//         document.body.className = ''; // reset
//         document.body.classList.add(form.theme === 'dark' ? 'dark-theme' : 'light-theme');
//     }, [form.theme]);

//     const handleChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setForm({
//             ...form,
//             [name]: type === 'checkbox' ? checked : value,
//         });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Settings saved successfully!');
//     };

//     return (
//         <div className="container mt-5">
//             <h4 className="mb-4 text-primary fw-semibold">⚙️ Account Settings</h4>

//             <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                     <h5 className="mb-3 text-secondary">👤 Profile Information</h5>
//                     <Form>
//                         <div className="row mb-3">
//                             <div className="col-md-4">
//                                 <Form.Label>Full Name</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="name"
//                                     value={form.name}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="col-md-4">
//                                 <Form.Label>Email</Form.Label>
//                                 <Form.Control
//                                     type="email"
//                                     name="email"
//                                     value={form.email}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="col-md-4">
//                                 <Form.Label>Phone</Form.Label>
//                                 <Form.Control
//                                     type="text"
//                                     name="phone"
//                                     value={form.phone}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                     </Form>
//                 </Card.Body>
//             </Card>

//             <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                     <h5 className="mb-3 text-secondary">🎨 Preferences</h5>
//                     <Form>
//                         <div className="row mb-3">
//                             <div className="col-md-6">
//                                 <Form.Label>Theme</Form.Label>
//                                 <Form.Select name="theme" value={form.theme} onChange={handleChange}>
//                                     <option value="light">Light</option>
//                                     <option value="dark">Dark</option>
//                                 </Form.Select>
//                             </div>
//                             <div className="col-md-6 d-flex align-items-end">
//                                 <Form.Check
//                                     type="switch"
//                                     label="Enable Notifications"
//                                     name="notifications"
//                                     checked={form.notifications}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                     </Form>
//                 </Card.Body>
//             </Card>

//             <Card className="shadow-sm mb-4">
//                 <Card.Body>
//                     <h5 className="mb-3 text-secondary">🔒 Change Password</h5>
//                     <Form>
//                         <div className="row mb-3">
//                             <div className="col-md-6">
//                                 <Form.Label>New Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     name="newPassword"
//                                     value={form.newPassword}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                             <div className="col-md-6">
//                                 <Form.Label>Confirm Password</Form.Label>
//                                 <Form.Control
//                                     type="password"
//                                     name="confirmPassword"
//                                     value={form.confirmPassword}
//                                     onChange={handleChange}
//                                 />
//                             </div>
//                         </div>
//                     </Form>
//                 </Card.Body>
//             </Card>

//             <div className="text-end">
//                 <Button variant="primary" onClick={handleSubmit}>
//                     💾 Save Changes
//                 </Button>
//             </div>
//         </div>
//     );
// };

// export default Settings;
