import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function EditProduct() {
    const { id } = useParams(); // Assuming you are using React Router to get the product ID from the URL
    const [product, setProduct] = useState({});
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [catId, setCatId] = useState(1);
    const [message, setMessage] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:9999/products/${id}`)
            .then(res => {
                setProduct(res.data);
                setName(res.data.name);
                setPrice(res.data.price);
                setCatId(res.data.catId);
            })
            .catch(error => console.log(error));
    }, [id]);

    useEffect(() => {
        axios.get("http://localhost:9999/categories")
            .then(res => setCategories(res.data))
            .catch(error => console.log(error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:9999/products/${id}`, {
            name: name,
            price: price,
            catId: catId
        }).then(res => {
            if (res.status === 200)
                setMessage("Updated successfully");
        }).catch(err => console.log(err));
    }

    return (
        <div>
            <h4 className="text-center">Edit Product</h4>
            {
                message.length > 0 && <Alert variant="success">{message}</Alert>
            }
            <Form onSubmit={(e) => handleSubmit(e)}>
                <Form.Group className="mb-3">
                    <Form.Label>Name<span className="text-danger">*</span></Form.Label>
                    <Form.Control type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Price <span className="text-danger">*</span></Form.Label>
                    <Form.Control type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Categories <span className="text-danger">*</span></Form.Label>
                    <Form.Select value={catId} onChange={(e) => setCatId(parseInt(e.target.value))}>
                        <option value='' hidden>Select categories</option>
                        {categories.map(c => (
                            <option key={c.id} value={c.id}>{c.name}</option>
                        ))}
                    </Form.Select>
                </Form.Group>
                <Button type="submit">Update</Button>
            </Form>
        </div>
    );
}