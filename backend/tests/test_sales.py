import unittest

class TestSalesModule(unittest.TestCase):
    def setUp(self):
        self.sample_inventory = {"item_01": {"name": "Coffee Beans", "price": 15.00, "stock": 20}}

    def test_calculate_cart_total(self):
        cart = [{"price": 15.00, "quantity": 2}]
        total = sum(item["price"] * item["quantity"] for item in cart)
        self.assertEqual(total, 30.00)

if __name__ == "__main__":
    unittest.main()
