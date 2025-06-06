// src/pages/ProductView.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Row, Col } from 'react-bootstrap';

// Mock product data
const mockProduct = {
    id: 1,
    name: 'Apple iPhone 14',
    category: 'Electronics',
    price: 799,
    stock: 10,
    description: 'The latest iPhone with A15 Bionic chip, dual-camera system, and improved battery life.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-select-202209-6-1inch?wid=470&hei=556&fmt=png-alpha&.v=1661027787281'
};

const ProductView = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(mockProduct);

    useEffect(() => {
        console.log(`Fetching data for product ID: ${productId}`);
        setProduct(mockProduct);
    }, [productId]);

    const handleDelete = () => {
        setProduct(null); // Simulate deletion
    };

    if (!product) {
        return <div>Product has been deleted</div>;
    }

    return (
        <div className="container mt-5">
            <h4 className="mb-4">Product View</h4>
            <Card className="p-3 shadow-sm" style={{ marginTop: '30px' }}>
                <Row>
                    <Col md={4}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid rounded"
                            style={{ height: '250px', objectFit: 'cover', marginBottom: '20px' }}
                        />
                    </Col>
                    <Col md={8}>
                        <h6>{product.name}</h6>
                        <p><strong>Category:</strong> {product.category}</p>
                        <p><strong>Price:</strong> ₹{product.price}</p>
                        <p><strong>Stock:</strong> {product.stock} available</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <div className="d-flex gap-2">
                            {/* <Button
                                variant="primary"
                                size="sm"
                                onClick={() => navigate(`/edit-product/${product.id}`)}
                            >
                                Edit
                            </Button> */}
                            <Button
                                variant="danger"
                                size="sm"
                                onClick={handleDelete}
                            >
                                Delete
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ProductView;
