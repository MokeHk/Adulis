import { BrowserRouter, Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Catagories from "./pages/Catagories";
import Login from "./pages/Login";
import CreateStore from "./pages/CreateStore";
import ShowProduct from "./pages/Product/ShowProduct";
import CreateProduct from "./pages/Product/CreateProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="catagories" element={<Catagories />} />
          <Route path="login" element={<Login />} />
          <Route path="create-store" element={<CreateStore />} />
          <Route path=":id" element={<ShowProduct />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
