from pydantic import BaseModel
from typing import Optional
from datetime import date, datetime

class InventoryBase(BaseModel):
    name: str
    quantity: int = 0
    category: Optional[str] = None
    low_stock_threshold: int = 0
    expiration_date: Optional[date] = None

class InventoryCreate(InventoryBase):
    pass

class Inventory(InventoryBase):
    item_id: int
    class Config:
        from_attributes = True

class InventoryUpdate(BaseModel):
    name: Optional[str] = None
    quantity: Optional[int] = None
    category: Optional[str] = None
    low_stock_threshold: Optional[int] = None
    expiration_date: Optional[date] = None

# New schema for purchases
class PurchaseCreate(BaseModel):
    item_id: int
    quantity_bought: int
    timestamp: datetime = None