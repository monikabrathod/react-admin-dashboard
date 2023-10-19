import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./Dashboard";
import Products from "./Products";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Products" element={<Products />} />
        </Route>
        <Route path="login" element={<div>this is login page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
