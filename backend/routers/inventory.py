from fastapi import APIRouter
from schemas import InventoryItem  # This imports the model you just created

router = APIRouter(prefix="/inventory", tags=["inventory"])

@router.get("/")
def get_inventory():
    return {"message": "Inventory endpoint is working"}

@router.post("/")
def create_item(item: InventoryItem):
    # This will now accept data in the format you defined in schemas.py
    return {"message": f"Successfully added {item.name} to the inventory", "data": item}