from sqlalchemy import Column, Integer, String, Float, Date, ForeignKey
from database import Base

class InventoryItem(Base):
    __tablename__ = "inventory"

    # Updated to match the 'item_id' Primary Key in your diagram
    item_id = Column(Integer, primary_key=True, index=True)
    # Updated to match the 'name' column in your diagram
    name = Column(String, index=True) 
    category = Column(String, nullable=True)
    quantity = Column(Integer, default=0)
    low_stock_threshold = Column(Integer, default=0)
    expiration_date = Column(Date, nullable=True)

class Transaction(Base):
    __tablename__ = "transactions"
    
    id = Column(Integer, primary_key=True, index=True)
    # Linked to inventory.item_id as shown in your diagram
    item_id = Column(Integer, ForeignKey("inventory.item_id")) 
    transaction_type = Column(String) 
    quantity_changed = Column(Integer)
    timestamp = Column(String)