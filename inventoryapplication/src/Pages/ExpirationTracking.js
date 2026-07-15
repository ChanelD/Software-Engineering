import { useState } from "react";
import "./ExpirationTracking.css";

function ExpirationTracking() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { id: "INV001", category: "Dairy", name: "Milk", quantity: 24, expiration: "2026-01-20" },
    { id: "INV002", category: "Produce", name: "Bananas", quantity: 50, expiration: "2026-07-15" },
    { id: "INV003", category: "Bakery", name: "Bread", quantity: 15, expiration: "2026-07-18" },
    { id: "INV004", category: "Meat", name: "Chicken Breast", quantity: 30, expiration: "2026-07-16" },
    { id: "INV005", category: "Beverages", name: "Orange Juice", quantity: 40, expiration: "2026-08-01" },
  ]);

  // Checks if an item's expiration date has already passed
  const isExpired = (expirationDate) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    return expDate < today;
  };

  // Checks if an item's expiration date is within 14 days of today (includes already-expired items)
  const isNearExpiration = (expirationDate) => {
    const today = new Date();
    const expDate = new Date(expirationDate);
    const diffTime = expDate - today;
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    return diffDays <= 14;
  };

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.expiration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Only keep items that are expired or near expiration
  const nearOrExpiredItems = filteredItems.filter((item) =>
    isNearExpiration(item.expiration)
  );

  // Sorts items so the ones nearest to expiring (or most expired) show up first
  const sortedItems = [...nearOrExpiredItems].sort((a, b) => {
    return new Date(a.expiration) - new Date(b.expiration);
  });

  return (
    <div className="expiration-tracking-page">
      <div className="expiration-tracking-header">
        <h1>Expiration Tracking</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for Expired Milk..."
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
          {sortedItems.map((item) => (
            <tr
              key={item.id}
              className={isExpired(item.expiration) ? "expired" : "expiring-soon"}
            >
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                {item.expiration}
                {isExpired(item.expiration) ? (
                  <span className="expiring-icon" title="Expired">
                    🧀❗
                  </span>
                ) : (
                  <span className="expiring-icon" title="Expiring soon">
                    🥛⚠️
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExpirationTracking;