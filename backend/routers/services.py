from fastapi import APIRouter

router = APIRouter(prefix="/services", tags=["Services"])

services = [
    {
        "id": 1,
        "name": "Sales Tracking",
        "description": "Records customer sales and calculates totals.",
        "status": "Active"
    },
    {
        "id": 2,
        "name": "Alert System",
        "description": "Creates alerts based on sales activity.",
        "status": "Active"
    },
    {
        "id": 3,
        "name": "Dashboard Reporting",
        "description": "Shows sales totals, revenue, and recent activity.",
        "status": "Active"
    }
]

@router.get("/")
def get_services():
    return services

@router.get("/{service_id}")
def get_service(service_id: int):
    for service in services:
        if service["id"] == service_id:
            return service

    return {"message": "Service not found"}