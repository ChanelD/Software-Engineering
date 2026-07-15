import { useState } from "react";
import "./Services.css";

function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { SVid: "SER001", category: "Food & Beverages Services", name: "Takeout", description: "Takeout service for customers", price: 10.99, quantity: 50 },
    { SVid: "SER002", category: "Amenities", name: "Free Wi-Fi", description: "Free Wi-Fi access for customers", price: 0, quantity: 1 },
    { SVid: "SER003", category: "Business Services", name: "Wholesale", description: "Wholesale pricing for businesses", price: 5.99, quantity: 15 },
  ]);

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.SVid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.price.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="services-page">
      <div className="services-header">
        <h1>Services</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for Services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="services-table">
        <thead>
          <tr>
            <th>Service ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.SVid}>
              <td>{item.SVid}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Services;