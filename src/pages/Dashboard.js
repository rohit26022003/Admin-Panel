// File: /src/pages/Analytics.js

import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
    ResponsiveContainer,
} from 'recharts';

const Analytics = () => {
    const stats = [
        { title: 'Products', value: 1200, color: 'primary' },
        { title: 'Revenue', value: '₹85,000', color: 'success' },
        { title: 'Active Users', value: 420, color: 'info' },
        { title: 'Orders', value: 7, color: 'danger' },
    ];

    const lineData = [
        { month: 'Jan', orders: 200 },
        { month: 'Feb', orders: 300 },
        { month: 'Mar', orders: 250 },
        { month: 'Apr', orders: 400 },
        { month: 'May', orders: 500 },
        { month: 'Jun', orders: 650 },
    ];

    const pieData = [
        { name: 'Electronics', value: 45 },
        { name: 'Clothing', value: 30 },
        { name: 'Home & Kitchen', value: 15 },
        { name: 'Other', value: 10 },
    ];

    const pieColors = ['#007bff', '#28a745', '#ffc107', '#dc3545'];

    return (
        <div className="container mt-5">
            <h4 className="mb-4 text-primary fw-semibold">📊Dashboard</h4>

            {/* KPI Cards */}
            <div className="row mb-4">
                {stats.map((stat, index) => (
                    <div key={index} className="col-md-3 mb-3">
                        <div className={`card text-white bg-${stat.color} shadow h-100`}>
                            <div className="card-body d-flex flex-column justify-content-center">
                                <h6 className="card-title">{stat.title}</h6>
                                <h4 className="fw-bold">{stat.value}</h4>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Charts Section */}
            <div className="row">
                {/* Line Chart */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">Monthly Orders Trend</h5>
                            <ResponsiveContainer width="100%" height={250}>
                                <LineChart data={lineData}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="orders" stroke="#007bff" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Pie Chart */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow h-100">
                        <div className="card-body">
                            <h5 className="card-title text-secondary mb-3">Category Sales Distribution</h5>
                            <ResponsiveContainer width="100%" height={250}>
                                <PieChart>
                                    <Pie
                                        data={pieData}
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={80}
                                        fill="#8884d8"
                                        dataKey="value"
                                        nameKey="name"
                                    >
                                        {pieData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value, name) => [`${value}%`, `${name}`]}
                                    />
                                    <Legend verticalAlign="bottom" height={36} />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
