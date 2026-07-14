from fastapi import APIRouter
from routers.sales import sales


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


def calculate_dashboard(sales_data: list[dict]) -> dict:
    total_sales = len(sales_data)

    total_revenue = sum(
        sale["total"]
        for sale in sales_data
    )

    total_items_sold = sum(
        sale["quantity"]
        for sale in sales_data
    )

    average_sale = (
        total_revenue / total_sales
        if total_sales > 0
        else 0
    )

    top_sale = (
        max(
            sales_data,
            key=lambda sale: sale["total"],
        )
        if sales_data
        else None
    )

    return {
        "total_sales": total_sales,
        "total_revenue": total_revenue,
        "total_items_sold": total_items_sold,
        "average_sale": average_sale,
        "top_sale": top_sale,
        "recent_sales": sales_data[-5:],
    }


@router.get("/")
def get_dashboard():
    # TODO: Replace temporary sales list with a Supabase query.
    return calculate_dashboard(sales)