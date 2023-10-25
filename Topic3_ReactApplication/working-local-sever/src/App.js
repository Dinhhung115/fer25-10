import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Product from './components/Product'
import ProductPost from './components/ProductPost';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/product' element={<Product />} />
        <Route path='/product/create' element={<ProductPost />} />
        <Route path='/products/edit/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
