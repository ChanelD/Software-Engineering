from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from datetime import datetime

router = APIRouter(prefix="/sales", tags=["Sales"])

sales = []

class SaleCreate(BaseModel):
    item_name: str
    quantity: int
    price: float

@router.get("/")
def get_sales():
    return sales

@router.post("/")
def add_sale(sale: SaleCreate):
    if sale.quantity <= 0:
        raise HTTPException(status_code=400, detail="Quantity must be greater than 0")

    if sale.price <= 0:
        raise HTTPException(status_code=400, detail="Price must be greater than 0")

    new_sale = {
        "id": len(sales) + 1,
        "item_name": sale.item_name,
        "quantity": sale.quantity,
        "price": sale.price,
        "total": sale.quantity * sale.price,
        "date": datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    }

    sales.append(new_sale)
    return new_sale

@router.get("/total")
def get_sales_total():
    return {
        "total_sales": len(sales),
        "total_revenue": sum(sale["total"] for sale in sales)
    }