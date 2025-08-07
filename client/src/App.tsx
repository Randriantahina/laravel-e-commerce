import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Achat from "./pages/Achat";
import ProductPage from "./pages/ProductPage.tsx";
import Guest from "./components/Guest.tsx";
import Protected from "./components/Protected.tsx";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/produit/:id"
            element={
              <Protected>
                <ProductPage />
              </Protected>
            }
          />

          <Route
            path="/login"
            element={
              <Guest>
                <Login />
              </Guest>
            }
          />
          <Route
            path="/register"
            element={
              <Guest>
                <Register />
              </Guest>
            }
          />
          <Route
            path="/achat"
            element={
              <Protected>
                <Achat />
              </Protected>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
