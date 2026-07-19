import py test
import psycopg2

def get_connection():
  return psycop2.connect(
    ""postgresql://postgres:/*mMq2!F6gLcHV,@db.nmikzhnpiukcelaniqrn.supabase.co:5432/postgres"
    )


def test_add_inventory_item():
  conn = get_connection()
  cursor = conn.cursor()

  cursor.execute("""
    INSERT INTO Inventory (name, categiry, quantity, low_stock_threshold)
    VALUES ('Not a real product', 'Coffee', 50, 10)
    Returning item_id, name, quantity
    """)

    result = cursor.fetchone()

    assert result is not None
    assert result[1] == 'Test Coffee Beans'
    assert result[2] == 50

    conn.rollback()
    cursor.close()
    conn.close()
