# Inventory Management System

## Overview

The Inventory Management System is a web application designed to help businesses manage inventory, monitor sales, and track inventory-related activity. The application provides an intuitive interface for viewing inventory information while offering a scalable backend API for managing business operations.

This project is being developed as part of a Software Engineering course using Agile Scrum practices.

---

## Features

### ✅ Implemented Features
- **Full CRUD Operations** for Inventory, Purchases, Sales, and Services
- **React Frontend** with responsive UI and real-time data display
- **FastAPI Backend** with RESTful API and automatic documentation (Swagger)
- **PostgreSQL Database** integration via Supabase
- **Alert System** for low stock and expiring items with visual indicators
- **Expiration Tracking** with category-specific icons
- **Real-time Data Validation** using Pydantic
- **CORS Support** for cross-origin requests
- **Search Functionality** across multiple tables
- **Responsive Design** with coffee-themed styling

### Planned Features
- User authentication and authorization
- Role-based user permissions
- Sales analytics dashboard with charts
- Inventory reporting features
- Transaction audit trail
- Email notifications for alerts
- Batch operations
- Data export (CSV/PDF)
---

## Technologies Used

### Frontend
- React 18+
- Node.js
- Axios for HTTP requests

### Backend
- Python 3.10+
- FastAPI
- SQLAlchemy (ORM)
- Pydantic v2
- PostgreSQL (Supabase)

### Database
- PostgreSQL hosted on Supabase

---

## Prerequisites

Before you start, ensure you have the following installed:

- **Python** 3.10 or higher
- **Node.js** 16 or higher (includes npm)
- **Git**
- A **Supabase account** with a PostgreSQL database (or any PostgreSQL database)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/ChanelD/Software-Engineering.git
cd inventory-management
```

### 2. Backend Setup

#### Install Python Dependencies

Navigate to the backend directory and install required packages:

```bash
cd backend
pip install -r requirements.txt
```

**Required packages include:**
- fastapi
- uvicorn
- sqlalchemy
- pydantic
- python-dotenv
- databases

#### Configure Environment Variables

Create a `.env` file in the `backend/` directory with:

```
DATABASE_URL=postgresql://user:password@host:port/database_name
```

Example for Supabase:
```
DATABASE_URL=postgresql://postgres:password@db.supabase.co:5432/postgres
```

#### Initialize Database

Run the schema to create tables:

```bash
psql -h your_host -U your_user -d your_database -f ../Database/schema.sql
```

Or using Python:
```bash
python database.py
```

### 3. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd inventoryapplication
npm install
```

---

## Running the Application

### Start the Backend Server

From the `backend/` directory:

```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```

The backend will be available at: `http://127.0.0.1:8000`

**Swagger API Documentation:** `http://127.0.0.1:8000/docs`

### Start the Frontend Server

From the `inventoryapplication/` directory:

```bash
npm start
```

The frontend will open at: `http://localhost:3000`

---

## Project Structure

```
inventory-management/
├── backend/
│   ├── main.py              # FastAPI app & CORS setup
│   ├── database.py          # Database connection
│   ├── models.py            # SQLAlchemy models
│   ├── schemas.py           # Pydantic validation schemas
│   ├── requirements.txt      # Python dependencies
│   └── routers/             # API endpoints
│       ├── inventory.py     # Inventory CRUD
│       ├── purchases.py     # Purchase order CRUD
│       ├── sales.py         # Sales CRUD
│       ├── services.py      # Services CRUD
│       ├── alerts.py        # Alert management
│       ├── expiration.py    # Expiration tracking
│       └── dashboard.py     # Dashboard stats
├── inventoryapplication/
│   ├── package.json         # Node dependencies
│   ├── public/              # Static assets
│   └── src/
│       ├── api.js           # Centralized API helper
│       ├── Pages/           # Page components
│       ├── Components/      # Reusable components
│       └── index.css        # Global styles
├── Database/
│   └── schema.sql           # PostgreSQL schema
└── Unit Testing/            # Test files
```

---

## API Endpoints

### Inventory
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/inventory/` | Get all inventory items |
| POST | `/inventory/` | Create new inventory item |
| PUT | `/inventory/{item_id}` | Update inventory item |
| DELETE | `/inventory/{item_id}` | Delete inventory item |

### Purchases
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/purchase_orders/` | Get all purchase orders |
| POST | `/purchase_orders/` | Create new purchase order |
| DELETE | `/purchase_orders/{order_id}` | Delete purchase order |

### Sales
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/sales/` | Get all sales |
| POST | `/sales/` | Create new sale |
| DELETE | `/sales/{sale_id}` | Delete sale |

### Services
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/services/` | Get all services |
| POST | `/services/` | Create new service |
| PUT | `/services/{service_id}` | Update service |
| DELETE | `/services/{service_id}` | Delete service |

### Alerts
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/alerts/` | Get all alerts (low stock & expiring) |
| DELETE | `/alerts/{alert_id}` | Resolve/delete alert |

### Expiration Tracking
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/expiration/` | Get items with expiration dates |
| DELETE | `/expiration/{item_id}` | Resolve expiration |

### Dashboard
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/dashboard/` | Get dashboard statistics |

---

## Future Improvements

- User authentication and login system
- Role-based access control (Admin, Manager, User)
- Advanced sales analytics with charts and trends
- Inventory forecasting and recommendations
- Supplier management
- Multi-warehouse support
- API rate limiting and security hardening
- Comprehensive test coverage
- Docker containerization for deployment
- CI/CD pipeline setup

---

## Troubleshooting

### Backend Issues

**Port Already in Use:**
```bash
# If port 8000 is in use, run on a different port:
uvicorn main:app --reload --port 8001
```

**Database Connection Error:**
- Verify `DATABASE_URL` is correct in `.env`
- Check PostgreSQL server is running
- Ensure firewall allows database connections

**CORS Errors in Browser:**
- The backend supports localhost:3000, 3001, 3002
- If running on different port, add to `CORS_ORIGINS` in `backend/main.py`

### Frontend Issues

**Blank Tables:**
- Ensure backend is running on `http://127.0.0.1:8000`
- Check browser console for API errors
- Verify database has data

**npm install fails:**
```bash
# Clear npm cache and retry
npm cache clean --force
npm install
```

**Port 3000 already in use:**
```bash
# Run on different port
PORT=3001 npm start
```

---

## Testing

Run unit tests:

```bash
cd backend
python -m pytest
```

Or run specific test files:
```bash
python -m pytest test_database.py -v
```

---

- Chanel Dang 2 – Frontend
- Mikahil 3 – Database
- Aakansha Gupta – Backend for Sales, Alerts, Dashboard, and Services
- Cornelius Moore: - Backend for Inventory, Purchases, Expiration tracking


---

## License

This project was developed for educational purposes as part of a Software Engineering course at Georgia State University.
