import importlib
import sys


def test_database_url_is_loaded_from_workspace_env(monkeypatch):
    monkeypatch.delenv("DATABASE_URL", raising=False)
    sys.modules.pop("backend.database", None)

    module = importlib.import_module("backend.database")

    assert module.DATABASE_URL
