import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
export default function Details() {
    const { id } = useParams(); 
    const [photo, setPhoto] = useState({});

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/'+id)
      .then((res) => res.json())
      .then((data) => setPhoto(data))
      .catch((error) => console.log(error.message));
  }, []);


  return (
    <Container>
        {
            !photo && <Alert key={'warning'} variant={'warning'}>không có</Alert>
        }
            <div>ID: {id}</div>
            <div>Album ID: {photo.albumId}</div>
            <div>Title: {photo.title}</div>
            <div>URL : {photo.url}</div>
    </Container>
  );
}
