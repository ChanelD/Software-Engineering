import { useState } from "react";
import "./Inventory.css";

function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { id: "INV001", category: "Dairy", name: "Milk", quantity: 24, expiration: "2026-01-20" },
    { id: "INV002", category: "Produce", name: "Bananas", quantity: 50, expiration: "2026-07-15" },
    { id: "INV003", category: "Bakery", name: "Bread", quantity: 15, expiration: "2026-07-18" },
    { id: "INV004", category: "Meat", name: "Chicken Breast", quantity: 30, expiration: "2026-07-16" },
    { id: "INV005", category: "Beverages", name: "Orange Juice", quantity: 40, expiration: "2026-08-01" },
  ]);

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.expiration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="inventory-page">
      <div className="inventory-header">
        <h1>Inventory</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search what's brewing in stock..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Item ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Expiration Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.expiration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;