import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Inventory from "./Pages/Inventory";
import Purchases from "./Pages/Purchases";
import ExpirationTracking from "./Pages/ExpirationTracking";
import Sales from "./Pages/Sales";
import Alerts from "./Pages/Alerts";
import Services from "./Pages/Services";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <h1>Inventory System</h1>
      </div>

      <div className="layout">
        <div className="sidenav">
          <Link to="/">Dashboard</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/purchases">Purchases</Link>
          <Link to="/expiration-tracking">Expiration Tracking</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/alerts">Alerts</Link>
          <Link to="/services">Services</Link>
        </div>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/expiration-tracking" element={<ExpirationTracking />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>

      <div className="footer">
        <p>Footer</p>
      </div>
    </BrowserRouter>
  );
}

export default App;