import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';

// Mock product data (you would fetch this from an API using the productId in a real app)
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
    const { productId } = useParams(); // This would be used to fetch the product dynamically
    const [product, setProduct] = useState(mockProduct); // For now, using mock data
    const [isEditMode, setIsEditMode] = useState(false); // Track edit mode
    const [editedProduct, setEditedProduct] = useState({ ...mockProduct }); // To track edits

    useEffect(() => {
        console.log(`Fetching data for product ID: ${productId}`);
        // If you want to fetch the product dynamically, you can use productId like this:
        // Example API call:
        // fetch(`/api/products/${productId}`)
        //     .then(response => response.json())
        //     .then(data => setProduct(data));

        // For now, let's just simulate setting the product with mock data
        setProduct(mockProduct);
        setEditedProduct(mockProduct); // Set initial values for the form
    }, [productId]);

    // Handle changes in the edit form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    // Handle the form submission for editing the product
    const handleEditSubmit = (e) => {
        e.preventDefault();
        // Update the product with edited values
        setProduct(editedProduct);
        setIsEditMode(false); // Exit edit mode after saving changes
    };

    // Handle delete action
    const handleDelete = () => {
        // Here we simulate deleting by clearing the product data
        setProduct(null); // In a real app, you would send a delete request to the API
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
                            alt={product.name} // Make sure alt is descriptive, without using "image"
                            className="img-fluid rounded"
                            style={{ height: '250px', objectFit: 'cover', marginBottom: '20px' }}
                        />
                    </Col>
                    <Col md={8}>
                        {!isEditMode ? (
                            <>
                                <h6>{product.name}</h6>
                                <p><strong>Category:</strong> {product.category}</p>
                                <p><strong>Price:</strong> ₹{product.price}</p>
                                <p><strong>Stock:</strong> {product.stock} available</p>
                                <p><strong>Description:</strong> {product.description}</p>
                                <div className="d-flex gap-2">
                                    <Button
                                        variant="primary"
                                        size="sm"
                                        onClick={() => setIsEditMode(true)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        size="sm"
                                        onClick={handleDelete}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </>
                        ) : (
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
                                    onClick={() => setIsEditMode(false)}
                                    className="ms-2"
                                >
                                    Cancel
                                </Button>
                            </Form>
                        )}
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default ProductView;
