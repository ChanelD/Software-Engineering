import { inventoryRecords } from "../Data/inventoryData";
import { isExpired, isNearExpiration } from "../Utilities/expirationHelpers";
import "./ExpirationCard.css";

function ExpirationCard() {
  // only keep items expired or near expiration
  const nearOrExpiredItems = inventoryRecords.filter((item) =>
    isNearExpiration(item.expiration)
  );

  // sort so near expire or expired shows first
  const sortedItems = [...nearOrExpiredItems].sort(
    (a, b) => new Date(a.expiration) - new Date(b.expiration)
  );

  return (
    <div className="dashboard-widget">
      <h3>Expiration Tracking</h3>
      <div className="card-grid">
        {sortedItems.length === 0 ? (
          <p>Nothing expiring soon.</p>
        ) : (
          sortedItems.map((item) => (
            <div
              key={item.id}
              className={`expiration-card ${isExpired(item.expiration) ? "expired" : "expiring-soon"}`}
            >
              <h4>{item.name}</h4>
              <p>{item.category}</p>
              <p>Qty: {item.quantity}</p>
              <p>{item.expiration}</p>
              <span className="expiring-icon">
                {isExpired(item.expiration) ? "🧀❗" : "🥛⚠️"}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ExpirationCard;