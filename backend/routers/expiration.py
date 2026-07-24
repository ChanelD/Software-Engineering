from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from ..database import get_db
from .. import models, schemas
from datetime import date

router = APIRouter(prefix="/expiration", tags=["expiration"])


@router.get("/")
def get_expiring_items(db: Session = Depends(get_db)):
    # Query items that have an expiration date
    # You can customize this to only show items within X days if you want
    return db.query(models.Inventory).filter(models.Inventory.expiration_date != None).all()