import { useState } from "react";
import { salesRecords } from "../Data/salesData";
import "./Sales.css";

function Sales() {
  const [searchTerm, setSearchTerm] = useState("");
  const [items] = useState(salesRecords);

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