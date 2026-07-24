import { inventoryRecords } from "../Data/inventoryData";
import "./InventorySummary.js";

function InventorySummary() {
  // total number of different items (just count the array length)
  const totalItems = inventoryRecords.length;

  // total quantity across all items
  let totalQuantity = 0;
  for (let i = 0; i < inventoryRecords.length; i++) {
    totalQuantity += inventoryRecords[i].quantity;
  }

  // reuse the same filter logic from LowStockCard.js
  const lowStockItems = inventoryRecords.filter(
    (item) => item.quantity <= item.reorderLevel
  );

  return (
    <div className="dashboard-widget">
      <h3>Inventory Overview</h3>
      <div className="card-grid">
        <div className="low-stock-card">
          <h4>Total Items</h4>
          <p>{totalItems}</p>
        </div>
        <div className="low-stock-card">
          <h4>Total Quantity</h4>
          <p>{totalQuantity}</p>
        </div>
        <div className="low-stock-card">
          <h4>Low Stock Items</h4>
          <p>{lowStockItems.length}</p>
        </div>
      </div>
    </div>
  );
}

export default InventorySummary;