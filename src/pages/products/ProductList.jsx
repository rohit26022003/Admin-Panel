import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const mockProducts = [
    { id: 1, name: 'Apple iPhone 14', category: 'Electronics', price: 799, stock: 10 },
    { id: 2, name: 'Nike Running Shoes', category: 'Footwear', price: 120, stock: 25 },
    { id: 3, name: 'Sony Headphones', category: 'Electronics', price: 199, stock: 5 },
    { id: 4, name: 'Cotton T-shirt', category: 'Clothing', price: 25, stock: 40 },
];

const ProductList = () => {
    const [products, setProducts] = useState(mockProducts);

    const handleDelete = (id) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            const updatedProducts = products.filter((product) => product.id !== id);
            setProducts(updatedProducts);
            console.log(`Deleted product with id: ${id}`);
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Product List</h2>
            <Table striped bordered hover responsive>
                <thead className="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Product Name</th>
                        <th>Category</th>
                        <th>Price ($)</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{index + 1}</td>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.stock}</td>
                            <td>
                                {/* <Link to={`/product-edit/${product.id}`}>
                                    <Button variant="warning" size="sm" className="me-2">Edit</Button>
                                </Link> */}
                                <Button variant="danger" size="sm" onClick={() => handleDelete(product.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ProductList;
