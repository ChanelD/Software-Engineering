from fastapi import FastAPI
from inventory import router as inventory_router
from purchases import router as purchases_router
from expiration import router as expiration_router
from sales import router as sales_router
from alerts import router as alerts_router
from dashboard import router as dashboard_router
from services import router as services_router

app = FastAPI()

app.include_router(inventory_router)
app.include_router(purchases_router)
app.include_router(expiration_router)
app.include_router(sales_router)
app.include_router(alerts_router)
app.include_router(dashboard_router)
app.include_router(services_router)

@app.get("/")
def root():
    return {"message": "Sleepless N' Caffeinated Backend is online"}