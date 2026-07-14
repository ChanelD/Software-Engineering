from datetime import date, datetime

from sqlalchemy import Date, DateTime, ForeignKey, Integer, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from database import Base


class Inventory(Base):
    __tablename__ = "inventory"

    item_id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    category: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    quantity: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=0,
    )

    low_stock_threshold: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=5,
    )

    expiration_date: Mapped[date | None] = mapped_column(
        Date,
        nullable=True,
    )

    sales: Mapped[list["Sale"]] = relationship(
        back_populates="inventory_item"
    )

    alerts: Mapped[list["Alert"]] = relationship(
        back_populates="inventory_item"
    )

    purchases: Mapped[list["Purchase"]] = relationship(
        back_populates="inventory_item"
    )


class Service(Base):
    __tablename__ = "services"

    service_id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    description: Mapped[str | None] = mapped_column(
        Text,
        nullable=True,
    )

    price: Mapped[float] = mapped_column(
        Numeric(10, 2),
        nullable=False,
    )

    category: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    sales: Mapped[list["Sale"]] = relationship(
        back_populates="service"
    )


class Sale(Base):
    __tablename__ = "sales"

    sale_id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    item_id: Mapped[int | None] = mapped_column(
        ForeignKey("inventory.item_id"),
        nullable=True,
    )

    service_id: Mapped[int | None] = mapped_column(
        ForeignKey("services.service_id"),
        nullable=True,
    )

    name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )

    price: Mapped[float] = mapped_column(
        Numeric(10, 2),
        nullable=False,
    )

    category: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    quantity: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
        default=1,
    )

    sale_date: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow,
    )

    sale_amount: Mapped[float] = mapped_column(
        Numeric(10, 2),
        nullable=False,
    )

    inventory_item: Mapped[Inventory | None] = relationship(
        back_populates="sales"
    )

    service: Mapped[Service | None] = relationship(
        back_populates="sales"
    )


class Alert(Base):
    __tablename__ = "alerts"

    alert_id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    item_id: Mapped[int] = mapped_column(
        ForeignKey("inventory.item_id"),
        nullable=False,
    )

    alert_message: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow,
    )

    inventory_item: Mapped[Inventory] = relationship(
        back_populates="alerts"
    )


class Purchase(Base):
    __tablename__ = "purchases"

    order_id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
    )

    item_id: Mapped[int] = mapped_column(
        ForeignKey("inventory.item_id"),
        nullable=False,
    )

    order_date: Mapped[datetime] = mapped_column(
        DateTime,
        nullable=False,
        default=datetime.utcnow,
    )

    status: Mapped[str] = mapped_column(
        String(50),
        nullable=False,
        default="pending",
    )

    quantity: Mapped[int] = mapped_column(
        Integer,
        nullable=False,
    )

    inventory_item: Mapped[Inventory] = relationship(
        back_populates="purchases"
    )