# Inventory Management System

## Overview

The Inventory Management System is a web application designed to help businesses manage inventory, monitor sales, and track inventory-related activity. The application provides an intuitive interface for viewing inventory information while offering a scalable backend API for managing business operations.

This project is being developed as part of a Software Engineering course using Agile Scrum practices.

---

## Features

### Current Features
- Backend REST API built with FastAPI
- Sales management endpoints
- Dashboard statistics
- Alert system
- Service information endpoints
- Interactive API documentation with Swagger UI

### Planned Features
- User authentication
- Inventory management
- Product search and filtering
- Database integration
- Sales history
- Low stock notifications
- Reporting and analytics
- React frontend
- Role-based user permissions
---

## Technologies Used

### Frontend
- React
  
### Backend
- Python
- FastAPI
- Uvicorn


Start the FastAPI server.

```
uvicorn main:app --reload
```

### Sales

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /sales | Retrieve all sales |
| POST | /sales | Create a new sale |
| GET | /sales/total | View sales totals |

### Dashboard

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /dashboard | Dashboard statistics |

### Alerts

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /alerts | Retrieve system alerts |

### Services

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | /services | View available backend services |

---

## Future Improvements

- Connect backend to a SQL database
- Inventory alerts based on stock levels
- Authentication and authorization
- Sales analytics dashboard
- Reporting features
- Frontend integration with React
- Unit and integration testing

---

## Contributors

- Chanel Dang 2 – Frontend
- Mikahil 3 – Database
- Aakansha Gupta – Backend for Sales, Alerts, Dashboard, and Services
- Cornelius Moore: - Backend for Inventory, Purchases, Expiration tracking


---

## License

This project was developed for educational purposes as part of a Software Engineering course at Georgia State University.
