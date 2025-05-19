import React, { useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';

const ProductUpload = () => {
    const [productName, setProductName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission
        console.log('Product Submitted:', { productName, category, price, stock, description, image });
    };

    return (
        <div className="container mt-5">
            <h4 className="mb-3">Product Upload</h4>
            <Form onSubmit={handleSubmit} className="mt-4">
                <Row>
                    <Col md={6}>
                        <Form.Group controlId="productName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter product category"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={6}>
                        <Form.Group controlId="price">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter product price"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId="stock">
                            <Form.Label>Stock</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="Enter stock quantity"
                                value={stock}
                                onChange={(e) => setStock(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={12}>
                        <Form.Group controlId="description">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter product description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Row className="mt-3">
                    <Col md={12}>
                        <Form.Group controlId="image">
                            <Form.Label>Product Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <Button variant="primary" type="submit" className="mt-4">
                    Upload Product
                </Button>
            </Form>
        </div>
    );
};

export default ProductUpload;
