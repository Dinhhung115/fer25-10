import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Post() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((error) => console.log(error.message));
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((error) => console.log(error.message));
        fetch("https://jsonplaceholder.typicode.com/comments")
            .then((res) => res.json())
            .then((data) => setComments(data))
            .catch((error) => console.log(error.message));
    }, []);

    const handleUserChange = (event) => {
        setSelectedUser(event.target.value);
    };

    const CountCommentById = (id) => {
        const filteredComments = comments.filter((comment) => comment.postId === id);
        return filteredComments.length;
    };
    return (
        <Container>
            <Row>
                <Col style={{ display: "flex" }}>
                    <h2>Filter by user</h2>
                    <select value={selectedUser} onChange={handleUserChange}>
                        <option value="">All Users</option>
                        {users.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.username}
                            </option>
                        ))}
                    </select>
                </Col>
            </Row>
            <Row>
                {posts
                    .filter((item) =>
                        !selectedUser || item.userId == selectedUser
                    )
                    .map((item) => (
                        <Col xs={12} sm={6} md={3} key={item.id}>
                            <Card style={{ width: "100%" }}>
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Body>{item.body}</Card.Body>
                                    <Card.Link href={`/photo/${item.id}`}>Details</Card.Link>
                                    <Card.Link href={`/posts/${item.id}/comments`}>
                                        Comments ({CountCommentById(item.id)})
                                    </Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
            </Row>
        </Container>
    );
}
