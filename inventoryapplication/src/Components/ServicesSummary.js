import { serviceRecords } from "../Data/servicesData";
import ServicesHistoryChart from "./ServicesHistoryChart";
import "./ServicesSummary.css";

function ServicesSummary() {
  const totalServices = serviceRecords.length;

  // count how many unique categories exist
  const uniqueCategories = [];
  for (let i = 0; i < serviceRecords.length; i++) {
    const category = serviceRecords[i].category;
    if (!uniqueCategories.includes(category)) {
      uniqueCategories.push(category);
    }
  }

  // find the average price across all services
  let totalPrice = 0;
  for (let i = 0; i < serviceRecords.length; i++) {
    totalPrice += serviceRecords[i].price;
  }
  const averagePrice = totalPrice / serviceRecords.length;

  return (
    <div className="dashboard-widget">
      <h3>Services Overview</h3>
      <div className="card-grid">
        <div className="services-summary-card">
          <h4>Total Services</h4>
          <p>{totalServices}</p>
        </div>
        <div className="services-summary-card">
          <h4>Categories</h4>
          <p>{uniqueCategories.length}</p>
        </div>
        <div className="services-summary-card">
          <h4>Average Price</h4>
          <p>${averagePrice.toFixed(2)}</p>
        </div>
      </div>

      <div className="services-history-charts">
        <ServicesHistoryChart />
      </div>
    </div>
  );
}

export default ServicesSummary;