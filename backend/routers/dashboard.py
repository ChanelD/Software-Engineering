from fastapi import APIRouter
from routers.sales import sales

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])

@router.get("/")
def get_dashboard():
    total_sales = len(sales)
    total_revenue = sum(sale["total"] for sale in sales)
    total_items_sold = sum(sale["quantity"] for sale in sales)

    average_sale = 0
    if total_sales > 0:
        average_sale = total_revenue / total_sales

    top_sale = None
    if sales:
        top_sale = max(sales, key=lambda sale: sale["total"])

    return {
        "total_sales": total_sales,
        "total_revenue": total_revenue,
        "total_items_sold": total_items_sold,
        "average_sale": average_sale,
        "top_sale": top_sale,
        "recent_sales": sales[-5:]
    }