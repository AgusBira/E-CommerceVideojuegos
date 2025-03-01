import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemCard from "./components/ItemCard"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { cartContext, CartProvider } from "./context/CartContext"
export default function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categoria/:catId" element={<ItemListContainer />} />
            <Route exact path="/product/:id" element={<ItemDetailContainer />} />
          </Routes>

        </CartProvider>
      </BrowserRouter>

    </>
  )
}

