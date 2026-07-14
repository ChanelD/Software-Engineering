from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from database import SessionLocal
import models, schemas
from datetime import date

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.get("/")
def get_expiring_items(db: Session = Depends(get_db)):
    # Query items that have an expiration date
    # You can customize this to only show items within X days if you want
    return db.query(models.InventoryItem).filter(models.InventoryItem.expiration_date != None).all()