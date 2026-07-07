from fastapi import FastAPI
from routers import sales, alerts, dashboard, services

app = FastAPI(
    title="Inventory Management API",
    description="Backend API for the Inventory Management System",
    version="1.0.0"
)

app.include_router(sales.router)
app.include_router(alerts.router)
app.include_router(dashboard.router)
app.include_router(services.router)


@app.get("/")
def root():
    return {
        "message": "Inventory Management API is running",
        "status": "online"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }