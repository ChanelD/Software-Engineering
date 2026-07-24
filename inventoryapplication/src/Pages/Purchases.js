import { useState } from "react";
import "./Purchases.css";

function Purchases() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { id: "PUR001", order_date: "2026-01-20", status: "Delivered", quantity: 24 },
    { id: "PUR002", order_date: "2026-07-15", status: "Pending", quantity: 50 },
    { id: "PUR003", order_date: "2026-07-18", status: "Delivered", quantity: 15 },
    { id: "PUR004", order_date: "2026-07-16", status: "In Transit", quantity: 30 },
    { id: "PUR005", order_date: "2026-08-01", status: "Pending", quantity: 40 },
  ]);

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.order_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="purchases-page">
      <div className="purchases-header">
        <h1>Purchases</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for brewing orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="purchases-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.order_date}</td>
              <td>{item.status}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Purchases;