import sys
from pathlib import Path

sys.path.append(str(Path(__file__).resolve().parents[1]))

from fastapi.testclient import TestClient
from main import app
from routers.sales import sales
client = TestClient(app)


def test_add_sale():
    sales.clear()

    response = client.post(
        "/sales/",
        json={
            "item_name": "Coffee",
            "quantity": 3,
            "price": 4.50,
        },
    )

    assert response.status_code == 200

    data = response.json()

    assert data["item_name"] == "Coffee"
    assert data["quantity"] == 3
    assert data["price"] == 4.50
    assert data["total"] == 13.50
    assert "id" in data
    assert "date" in data