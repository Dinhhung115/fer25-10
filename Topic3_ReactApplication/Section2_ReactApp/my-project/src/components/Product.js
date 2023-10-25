import { Container, Row, Col } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
export default function Product(data) {
    return (
        <Container>
            <Row>
                <Col>
                    <h3>Product Management</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type="text" placeholder="Enter product name"></input>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to={'/product/create'}>Create new product</Link>
                </Col>
            </Row>
            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Pice</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Image</th>
                            <th>Create Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Product 1</td>
                            <td>10</td>
                            <td>25</td>
                            <td>Handmane</td>
                            <td>Image</td>
                            <td>09/10/2023</td>
                            <td>yes</td>
                            <td></td>
                            <td>
                                <Link to="/product/edit/1">Edit</Link>
                            </td>
                            <td>
                                <Link to="/product/delete/1">Delete</Link>
                            </td>

                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    )
}