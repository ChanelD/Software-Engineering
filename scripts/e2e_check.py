from playwright.sync_api import sync_playwright

PAGES = {
    'Inventory': 'http://localhost:3001/inventory',
    'Purchases': 'http://localhost:3001/purchases',
    'Services': 'http://localhost:3001/services',
    'Sales': 'http://localhost:3001/sales'
}

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    results = {}
    for name, url in PAGES.items():
        try:
            console_msgs = []
            reqs = []
            def on_console(msg):
                console_msgs.append(msg.text)
            def on_request(r):
                reqs.append((r.method, r.url))

            page.on('console', lambda m: on_console(m))
            page.on('request', lambda r: on_request(r))

            page.goto(url, timeout=20000)
            # give SPA time to fetch and render
            page.wait_for_timeout(2500)
            rows = page.query_selector_all('table tbody tr')
            results[name] = len(rows)
            print(f'{name}: {len(rows)} rows')
            if console_msgs:
                print('  console:', console_msgs[:10])
            if reqs:
                print('  requests:', [u for _,u in reqs if '/inventory' in u or '/sales' in u or '/services' in u or '/purchase' in u][:10])
        except Exception as e:
            print(f'{name}: ERROR - {e}')
            results[name] = 0
    browser.close()
    raise SystemExit(0)
