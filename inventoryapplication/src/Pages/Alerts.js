import coffeeBeanIcon from "../Assets/coffee-bean.png";
import coffeeBeansIcon from "../Assets/coffee-beans.png";
import { useState } from "react";
import "./Alerts.css";

function Alerts() {
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data 
  const [items] = useState([
    { id: "INV001", category: "Dairy", name: "Milk", quantity: 24 },
    { id: "INV002", category: "Produce", name: "Bananas", quantity: 50 },
    { id: "INV003", category: "Bakery", name: "Bread", quantity: 15 },
    { id: "INV004", category: "Meat", name: "Chicken Breast", quantity: 30 },
    { id: "INV005", category: "Beverages", name: "Orange Juice", quantity: 40 },
  ]);

  // Checks if an item's quantity is below the low threshold (under 20)
  const isLow = (item, lowThreshold) => {
    return item.quantity < lowThreshold;
  };

  // Checks if an item is nearing low stock (under 25, includes already-low items too)
  const isNearLowStock = (item, nearThreshold) => {
    return item.quantity < nearThreshold;
  };

  // Search functionality
  const filteredItems = items.filter((item) =>
    item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.quantity.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Only keep items that are low or nearing low stock
  const lowStockItems = filteredItems.filter((item) =>
    isNearLowStock(item, 25) // 25 is the "nearing low" threshold
  );

  // Sorts items so the ones with the lowest quantities show up first
  const sortedItems = [...lowStockItems].sort((a, b) => {
    return a.quantity - b.quantity;
  });

  return (
    <div className="alerts-page">
      <div className="alerts-header">
        <h1>Alerts</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search for low grounds..."
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
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((item) => (
            <tr
              key={item.id}
              className={isLow(item, 20) ? "low-stock" : "near-low-stock"}
            >
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>
                {item.quantity}
                {isLow(item, 20) ? (
                  <img
                    src={coffeeBeanIcon}
                    alt="Low Stock"
                    title="Low Stock"
                    className="low-icon"
                  />
                ) : (
                  <img
                    src={coffeeBeansIcon}
                    alt="Nearing Low Stock"
                    title="Nearing Low Stock"
                    className="low-icon"
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Alerts;