import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./index.css";
import DetailPage from "./pages/Details";
import Cart from "./pages/Cart";
import Congrats from "./pages/Congrats";
import PageNotfound from "./pages/PageNotfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/categories/:idc" element={<DetailPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/congratulation" element={<Congrats />} />
        <Route path="*" element={<PageNotfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
