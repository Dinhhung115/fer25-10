import { useEffect, useState } from "react"
import { Alert, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Product() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [message, setMessage] = useState('');
    useEffect(() => {
        axios.get("http://localhost:9999/products")
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }, [])
    const postDelete = (id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:9999/products/${id}`)
            .then(res => {
                if (res.status == 200)
                    setMessage("Deleted successfully");
                Navigate('/product')

            }).catch(err => console.log(err));
    }
    return (
        <Container>
            <div>
                <h2>List of Products</h2>
                <Link to={'/product/create'}>Create a new Product</Link>
                {
                    message.length > 0 && <Alert variant="success">{message}</Alert>
                }
                <Table striped hover>
                    <thead>
                        <tr>
                            <th>Id</th><th>Name</th><th>Price</th><th>Category</th><th colSpan={2}></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(({ id, name, price, catId }) => (
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{price}</td>
                                    <td>{catId}</td>
                                    <td><Link to={'/products/edit/' + id}>Edit</Link></td>
                                    <td><button onClick={(e) => postDelete(id, e)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    )
}