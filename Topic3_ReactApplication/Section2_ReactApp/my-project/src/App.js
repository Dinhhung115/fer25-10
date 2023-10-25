import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import { Col, Container, Row } from "react-bootstrap"
import { Home, Product, Category, Photo, Album, Details, Post, Comments } from "./components/Index"
//fake: get all data from Api


function App() {
  return (
    <Container>
      <BrowserRouter>

        <Row>
          <Col xs="12" md="2">
            <ul>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/Category"}>Category</Link></li>
              <li><Link to={"/Product"}>Product</Link></li>
              <li><Link to={"/album"}>album</Link></li>
              <li><Link to={"/Photo"}>Photo</Link></li>
              <li><Link to={"/posts"}>Post</Link></li>
            </ul>
          </Col>
          <Col xs="12" md="10">
            <Routes>
              <Route path="/" element={<Home />}></Route>   /** http://localhost:3000/ */
              <Route path="/product" element={<Product />}></Route>  /** http://localhost:3000/product */
              <Route path="/category" element={<Category />}></Route>  /** http://localhost:3000/category */
              {/* <Route path="/posts/:id/comments/create" element={<Create />}></Route>  /** http://localhost:3000/category */}
              < Route path="/Photo" element={<Photo />} />
              <Route path="/photo/:id" element={<Details />} />
              <Route path="/posts" element={<Post />} />
              <Route path="/posts/:id/comments" element={<Comments />} />
            </Routes>
          </Col>
        </Row>
      </BrowserRouter>
    </Container >
  );
}

export default App;
