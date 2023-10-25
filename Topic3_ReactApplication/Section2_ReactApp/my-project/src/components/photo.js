import { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

export default function Photo() {
  const [photos, setPhotos] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error.message));
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchValue !== '') {
      const filteredData = photos.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(photos);
    }
  }

  return (
    <Container>
      <Row>
        <Col>
          <input
            placeholder="Enter to search"
            style={{ width: '50%', lineHeight: '30px' }}
            onChange={(e) => searchItems(e.target.value)}
          ></input>
        </Col>
      </Row>
      <Row>
        {searchInput.length > 1 ? (
          filteredResults.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.id}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Link href={`/photo/${item.id}`}>Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          photos.map((item) => (
            <Col xs={12} sm={6} md={4} key={item.id}>
              <Card style={{ width: '100%' }}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Link href={`/photo/${item.id}`}>Details</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}
