from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models
import schemas  # This works if schemas.py is in the backend/ folder

router = APIRouter()

# Dependency to provide the database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=schemas.Inventory)
def create_item(item: schemas.InventoryCreate, db: Session = Depends(get_db)):
    new_item = models.InventoryItem(**item.model_dump())
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

@router.get("/", response_model=list[schemas.Inventory])
def get_items(db: Session = Depends(get_db)):
    return db.query(models.InventoryItem).all()

@router.put("/{item_id}")
def update_item(item_id: int, item_update: schemas.InventoryUpdate, db: Session = Depends(get_db)):
    item = db.query(models.InventoryItem).filter(models.InventoryItem.item_id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    update_data = item_update.model_dump(exclude_unset=True)
    for key, value in update_data.items():
        setattr(item, key, value)
    
    db.commit()
    db.refresh(item)
    return {"message": "Item updated successfully", "item": item}
