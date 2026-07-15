import { useState } from "react";
import "./Sales.css";

function Sales() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { Sid: "SALE001", id: "INV001", SVid: "SER001", category: "Dairy", name: "Milk", quantity: 24, sale_date: "2026-01-20", sale_amount: 48.00 },
    { Sid: "SALE002", id: "INV002", SVid: "SER002", category: "Produce", name: "Bananas", quantity: 50, sale_date: "2026-07-15", sale_amount: 100.00 },
    { Sid: "SALE003", id: "INV003", SVid: "SER003", category: "Bakery", name: "Bread", quantity: 15, sale_date: "2026-07-18", sale_amount: 30.00 },
    { Sid: "SALE004", id: "INV004", SVid: "SER004", category: "Meat", name: "Chicken Breast", quantity: 30, sale_date: "2026-07-16", sale_amount: 90.00 },
    { Sid: "SALE005", id: "INV005", SVid: "SER005", category: "Beverages", name: "Orange Juice", quantity: 40, sale_date: "2026-08-01", sale_amount: 80.00 },
  ]);

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.Sid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.SVid.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sale_date.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.sale_amount.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sales-page">
      <div className="sales-header">
        <h1>Sales</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search your daily grind..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="sales-table">
        <thead>
          <tr>
            <th>Sale ID</th>
            <th>Item ID</th>
            <th>Service ID</th>
            <th>Category</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Sale Date</th>
            <th>Sale Amount</th>            
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.Sid}</td>
              <td>{item.id}</td>
              <td>{item.SVid}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.sale_date}</td>
              <td>{item.sale_amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sales;