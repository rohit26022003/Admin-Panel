import React, { useState } from 'react';
import { Card, Button, Collapse } from 'react-bootstrap';
import { ChevronDown, ChevronUp } from 'react-bootstrap-icons';

// Mock order data
const orders = [
    {
        id: 1,
        productName: 'Apple iPhone 14',
        customerName: 'John Doe',
        orderDate: '2025-05-10',
        status: 'Delivered',
        shippingAddress: '123 Main Street, City, Country',
        quantity: 1,
        totalPrice: 799,
    },
    {
        id: 2,
        productName: 'Samsung Galaxy S21',
        customerName: 'Jane Smith',
        orderDate: '2025-05-09',
        status: 'Pending',
        shippingAddress: '456 Park Ave, City, Country',
        quantity: 2,
        totalPrice: 1598,
    },
    {
        id: 3,
        productName: 'MacBook Pro 14"',
        customerName: 'Alice Johnson',
        orderDate: '2025-05-08',
        status: 'Shipped',
        shippingAddress: '789 Elm Street, City, Country',
        quantity: 1,
        totalPrice: 2499,
    },
];

const OrderDetails = () => {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    const handleToggle = (id) => {
        setExpandedOrderId(prevId => (prevId === id ? null : id));
    };

    return (
        <div className="container mt-5">
            <h4 className="mb-4">All Order Details</h4>
            {orders.map((order) => (
                <Card key={order.id} className="mb-3 shadow-sm">
                    <Card.Header className="d-flex justify-content-between align-items-center">
                        <div>
                            <strong>Order ID:</strong> {order.id} | <strong>Product Name:</strong> {order.productName}
                        </div>
                        <Button
                            variant="link"
                            onClick={() => handleToggle(order.id)}
                            aria-controls={`order-collapse-${order.id}`}
                            aria-expanded={expandedOrderId === order.id}
                        >
                            {expandedOrderId === order.id ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                    </Card.Header>
                    <Collapse in={expandedOrderId === order.id}>
                        <div id={`order-collapse-${order.id}`}>
                            <Card.Body>
                                <p><strong>Customer Name:</strong> {order.customerName}</p>
                                <p><strong>Order Date:</strong> {order.orderDate}</p>
                                <p><strong>Status:</strong> {order.status}</p>
                                <p><strong>Shipping Address:</strong> {order.shippingAddress}</p>
                                <p><strong>Quantity:</strong> {order.quantity}</p>
                                <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
                            </Card.Body>
                        </div>
                    </Collapse>
                </Card>
            ))}
        </div>
    );
};

export default OrderDetails;
