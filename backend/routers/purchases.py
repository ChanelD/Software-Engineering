from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal
import models
import schemas # This works because schemas is in the backend/ folder

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/")
def make_purchase(purchase: schemas.PurchaseCreate, db: Session = Depends(get_db)):
    item = db.query(models.InventoryItem).filter(models.InventoryItem.item_id == purchase.item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    
    item.quantity += purchase.quantity_bought
    
    new_transaction = models.Transaction(
        item_id=purchase.item_id,
        transaction_type="PURCHASE",
        quantity_changed=purchase.quantity_bought,
        timestamp=purchase.timestamp
    )
    
    db.add(new_transaction)
    db.commit()
    db.refresh(new_transaction)
    
    return {"message": "Purchase recorded", "transaction": new_transaction}

@router.get("/")
def get_purchases(db: Session = Depends(get_db)):
    return db.query(models.Transaction).all()