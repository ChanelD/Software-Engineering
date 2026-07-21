from datetime import date, datetime

from pydantic import BaseModel, ConfigDict, Field


# ==========================
# Services
# ==========================

class ServiceCreate(BaseModel):
    name: str = Field(min_length=1, max_length=100)
    description: str | None = None
    price: int = Field(gt=0)
    category: str | None = Field(default=None, max_length=100)


class ServiceUpdate(BaseModel):
    name: str | None = Field(default=None, min_length=1, max_length=100)
    description: str | None = None
    price: int | None = Field(default=None, gt=0)
    category: str | None = Field(default=None, max_length=100)


class ServiceResponse(BaseModel):
    service_id: int
    name: str
    description: str | None
    price: int
    category: str | None

    model_config = ConfigDict(from_attributes=True)


# ==========================
# Sales
# ==========================

class SaleCreate(BaseModel):
    item_id: int | None = None
    service_id: int | None = None
    price: int = Field(gt=0)
    sale_date: date
    sale_amount: int = Field(gt=0)


class SaleResponse(BaseModel):
    sale_id: int
    item_id: int | None
    service_id: int | None
    price: int
    sale_date: date
    sale_amount: int

    model_config = ConfigDict(from_attributes=True)


# ==========================
# Alerts
# ==========================

class AlertResponse(BaseModel):
    alert_id: int
    item_id: int
    alert_type: str
    alert_message: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)


# ==========================
# Dashboard
# ==========================

class DashboardResponse(BaseModel):
    total_inventory_items: int
    total_inventory_quantity: int
    low_stock_items: int

    total_services: int
    service_categories: int
    average_service_price: float

    total_sales: int
    total_revenue: float
    average_sale: float

    recent_sales: list[SaleResponse]