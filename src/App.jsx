import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
export default function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/categoria/:catId" element={<ItemListContainer/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

