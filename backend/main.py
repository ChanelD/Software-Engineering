from fastapi import FastAPI
from database import engine, Base
import models
from routers import inventory, purchases, expiration

# 1. This command creates the database file and the tables. 
# Make sure this line starts at the very beginning of the line (no indentation).
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Inventory Management API")

# Register your routers
app.include_router(inventory.router, prefix="/inventory", tags=["inventory"])
app.include_router(purchases.router, prefix="/purchases", tags=["purchases"])
app.include_router(expiration.router, prefix="/expiration", tags=["expiration"])
