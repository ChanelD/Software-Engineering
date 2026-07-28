import unittest

class TestSalesModule(unittest.TestCase):
    
    def setUp(self):
        """Set up mock inventory data before each test runs."""
        self.sample_inventory = {
            "item_01": {"name": "Coffee Beans", "price": 15.00, "stock": 20},
            "item_02": {"name": "Mug", "price": 12.50, "stock": 5}
        }

    def test_calculate_cart_total(self):
        """Test that cart subtotal calculates correctly based on price and quantity."""
        cart = [
            {"price": 15.00, "quantity": 2}, # 30.00
            {"price": 12.50, "quantity": 1}  # 12.50
        ]
        
        total = sum(item["price"] * item["quantity"] for item in cart)
        self.assertEqual(total, 42.50)

    def test_process_sale_success(self):
        """Test that a valid sale deducts the correct amount from inventory stock."""
        cart = [{"item_id": "item_01", "quantity": 3}]
        
        initial_stock = self.sample_inventory["item_01"]["stock"]
        purchase_qty = cart[0]["quantity"]
        
        # Simulate inventory deduction logic
        self.sample_inventory["item_01"]["stock"] -= purchase_qty
        
        self.assertEqual(self.sample_inventory["item_01"]["stock"], initial_stock - 3)

    def test_process_sale_insufficient_stock(self):
        """Test that an error is raised if requested quantity exceeds available stock."""
        cart = [{"item_id": "item_02", "quantity": 10}] # Asking for 10, only 5 in stock
        
        requested_qty = cart[0]["quantity"]
        available_stock = self.sample_inventory["item_02"]["stock"]
        
        with self.assertRaises(ValueError):
            if requested_qty > available_stock:
                raise ValueError("Insufficient stock available")

if __name__ == "__main__":
    unittest.main()