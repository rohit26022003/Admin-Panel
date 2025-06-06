// src/pages/EditProduct.js

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button, Card } from 'react-bootstrap';

// Mock product
const mockProduct = {
    id: 1,
    name: 'Apple iPhone 14',
    category: 'Electronics',
    price: 799,
    stock: 10,
    description: 'The latest iPhone with A15 Bionic chip, dual-camera system, and improved battery life.',
    image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-select-202209-6-1inch?wid=470&hei=556&fmt=png-alpha&.v=1661027787281'
};

const EditProduct = () => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [editedProduct, setEditedProduct] = useState(mockProduct);

    useEffect(() => {
        console.log(`Fetching product ${productId} for editing...`);
        setEditedProduct(mockProduct); // Simulated fetch
    }, [productId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log('Updated product:', editedProduct);
        navigate(`/product/${productId}`); // Redirect back after saving
    };

    return (
        <div className="container mt-5">
            <h4 className="mb-4">Edit Product</h4>
            <Card className="p-4 shadow-sm">
                <Form onSubmit={handleEditSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={editedProduct.name}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            type="text"
                            name="category"
                            value={editedProduct.category}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="number"
                            name="price"
                            value={editedProduct.price}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type="number"
                            name="stock"
                            value={editedProduct.stock}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={editedProduct.description}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="success" type="submit">Save Changes</Button>
                    <Button
                        variant="secondary"
                        onClick={() => navigate(`/product/${productId}`)}
                        className="ms-2"
                    >
                        Cancel
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default EditProduct;
