import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Comments() {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((error) => console.log(error.message));
    }, []);

    return (
        <Container>
            <Row style={{ textAlign: "center" }}>
                <h1>List of Comments</h1>
            </Row>
            <Row style={{ display: "flex" }}>
                <Col>PostID: {id}</Col>
                <Col style={{ display: "flex", alignItems: "flex-end" }}>
                    <Link to={`/posts/${id}/comments/create`}>Create New</Link>
                </Col>
            </Row>

            <Row>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.body}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}
