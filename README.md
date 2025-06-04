## 🛡️ Admin Panel

The Craftique Admin Panel is a dedicated interface built for administrators to manage every aspect of the e-commerce platform with ease and efficiency. It provides robust tools to maintain product listings, track orders, handle users, and facilitate real-time communication—all from a centralized dashboard.

### ✅ Key Admin Features

- **Dashboard Overview**: Visual summary of total users, products, orders, and revenue.
- **Product Management**: Add, edit, or delete products with images and details.
- **Order Management**: View, filter, and update the status of customer orders.
- **User Management**: View and manage registered user profiles and account details.
- **Real-time Messaging**: Chat feature to send and receive messages with customers instantly.
- **Admin Profile Page**:
  - View and update admin name, email, phone number, and profile picture.
  - Changes are reflected instantly within the admin portal.

### ⚙️ Technology Stack

- **Frontend**: React, React Router, MDB React UI Kit
- **Backend**: Spring Boot, Spring Security, Java Mail Sender
- **Database**: MySQL
- **Other Tools**: Axios, WebSocket (for real-time messaging)

### 🔐 Access Control

- Admin panel routes are protected using role-based authentication.
- Unauthorized access is restricted and redirected.
- Email verification ensures only legitimate users gain access.

### 📁 Admin Panel Directory Structure

frontend/
└── src/
├── admin/
│ ├── Dashboard.jsx
│ ├── Products.jsx
│ ├── Orders.jsx
│ ├── Users.jsx
│ └── Profile.jsx
└── services/
├── AdminService.js
└── AuthService.js


### 🛠️ How to Access

1. Log in as an admin using registered credentials.
2. Click on **"My Account"** in the header to access the profile.
3. Navigate through the sidebar for dashboard, product, order, user, and message management.

> The admin panel is designed to be responsive, intuitive, and secure—giving platform administrators full control over the Craftique ecosystem.
