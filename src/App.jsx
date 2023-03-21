
import "./index.css";
import React, { useEffect, useState } from "react";
import { ChakraProvider } from '@chakra-ui/react';
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import { useParams } from "react-router-dom";

const App = () => {
  const { id } = useParams();
  
  const getProducts = async () => {
    const response = await fetch(
        "https://www.balldontlie.io/api/v1/players"
    );
    const data = await response.json();
    return data;
};

const [products, setProducts] = useState([]);

useEffect(() => {
    getProducts().then((product) => setProducts(product));
}, []);


  return (
    <>
      <ChakraProvider>
        {<NavBar />}
        <div>
          <Routes>
            <Route path="/home" element={<h2>Bienvenidos a mi E-commers</h2>} />
            <Route path="/product" element={<ItemListContainer products={products.data} />} />
            <Route path="/product/:categoria" element={<ItemListContainer products={products.data} />} />
          </Routes>
        </div>
      </ChakraProvider>
    </>
  )
}

export default App;
