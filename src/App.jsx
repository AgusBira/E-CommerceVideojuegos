import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemCard from "./components/ItemCard"
import ProductDetail from "./components/ProductDetail"
export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/categoria/:catId" element={<ItemListContainer/>}/>
          <Route exact path="/product/:id" element={<ProductDetail/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

