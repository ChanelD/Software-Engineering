from fastapi import FastAPI

from .database import Base, engine
from .routers import (
    alerts,
    dashboard,
    expiration,
    inventory,
    purchases,
    sales,
    services,
)


Base.metadata.create_all(bind=engine)


app = FastAPI(
    title="Inventory Management API",
    description="Backend API for the Inventory Management System",
    version="1.0.0",
)

app.include_router(sales.router)
app.include_router(services.router)
app.include_router(alerts.router)
app.include_router(dashboard.router)
app.include_router(inventory.router)
app.include_router(purchases.router)
app.include_router(expiration.router)


@app.get("/")
def root():
    return {
        "message": "Inventory Management API is running",
        "status": "online",
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
    }
