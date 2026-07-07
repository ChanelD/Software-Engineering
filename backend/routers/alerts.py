from fastapi import APIRouter
from routers.sales import sales

router = APIRouter(prefix="/alerts", tags=["Alerts"])

@router.get("/")
def get_alerts():
    alerts = []

    if len(sales) == 0:
        alerts.append({
            "type": "No Sales",
            "message": "No sales have been recorded yet."
        })

    high_value_sales = [sale for sale in sales if sale["total"] >= 500]

    for sale in high_value_sales:
        alerts.append({
            "type": "High Value Sale",
            "message": f"{sale['item_name']} sale was ${sale['total']:.2f}."
        })

    if len(sales) >= 5:
        alerts.append({
            "type": "Sales Activity",
            "message": "There has been strong recent sales activity."
        })

    return alerts