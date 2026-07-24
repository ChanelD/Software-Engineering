import { inventoryRecords } from "../Data/inventoryData";
import "./LowStockCard.css";

// Filtering items that are low in stock based on their quantity and reorder level
function LowStockCard() {
  const lowStockItems = inventoryRecords.filter(
    (item) => item.quantity <= item.reorderLevel
  );

  return (
    <div className="dashboard-widget">
      <h3>Low Stock Alerts</h3>
      <div className="card-grid">
        {lowStockItems.length === 0 ? (
          <p>No low stock items right now.</p>
        ) : (
          lowStockItems.map((item) => (
            <div key={item.id} className="low-stock-card">
              <h4>{item.name}</h4>
              <p>{item.category}</p>
              <p>Qty: {item.quantity} (reorder at {item.reorderLevel})</p>
              <span className="alert-icon">📦⚠️</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default LowStockCard;