import React, { useState, useEffect } from "react";
import "../../css/Dashboard.css";
import '../../css/Menu.css';
import axios from 'axios';

export default function Menu() {
  const [Category, SetCategory] = React.useState<any[]>([]);
  const [Item, SetItem] = React.useState<any>();
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [Filter, SetFilter] = React.useState<any>("Menu");

  useEffect(() => {
    if(Category) {
        axios.get('/Category').then((res) => {
            if (res.status === 200) {
                SetCategory(["Menu", ...res.data]);
            }
        });

        axios.get('/Product').then((res) => {
            if (res.status === 200) {
                SetItem(res.data);
            }
        });
    }
  }),[Item];

  const handleAddToCart = (id: number, name: string, price: number) => {
    const existingItem = cartItems.find((item) => item.name === name);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.name === name ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { id, name, price, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (id: number, name: string, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        Item.name === name ? { ...item, id, quantity: quantity } : item
      )
    );
  };

  const handleRemove = (name: string) => {
    setCartItems(cartItems.filter((item) => item.name!== name));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="ContFull">
      {/* Header */}
      <div className="HeaderTemplate">
        <img className="LogoComp" src="../assets/logo.jpg" alt="Logo" />
        <ul className="ListNavbar">
          <li><a href="/AboutUs">About Us</a></li>
          <li><a href="/ContactForm">Contact Form</a></li>
          <li className="Selected"><a href="/Menu">Menu</a></li>
          <li><a href="/OrderTracking">Order Tracking</a></li>
        </ul>
      </div>

      <div className="menu-container">
        {/* Tabs */}
        <div className="tabs">
        {Category ?
        Category.map((category:any) => (
          <button
            key={category}
            className={`tab-button ${
              Filter === category ? "active" : ""
            }`}
            onClick={() => SetFilter(category)}
          >
            {category}
          </button>
        )) : null}
        </div>

        {/* Main Content */}
        <div className="main-content">
          {/* Products */}
          <div className="products">
            {(Item ?
              Item
              .filter((Item:any) =>
                Filter === "Menu" ? true: Item.ProductCategory === Filter
              )
              .map((Item:any) => (
                <div key={Item.ProductName} className="product-card">
                  <img src={Item.ProductImage} alt={Item.ProductName} className="product-image" />
                  <h3>{Item.ProductName}</h3>
                  <p>RM{Item.ProductPrice.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(Item.ProductID,Item.ProductName, Item.ProductPrice)}
                    className="button"
                  >
                    Add to cart
                  </button>
                </div>
              )) : null
            )}
          </div>

          {/* Cart */}
          <div className="cart">
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.name} className="cart-item">
                    <span style={{ display: 'none' }}>{item.id}</span>
                  <span>{item.name}</span>
                  <input
                    type="number"
                    value={item.quantity}
                    min={1}
                    onChange={(e) => handleQuantityChange(item.id, item.name, parseInt(e.target.value))}
                    className="input"
                  />
                  <span>RM{(item.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => handleRemove(item.name)} className="remove-button">❌</button>
                </div>
              ))
            )}
            <div className="eat-type">
                <button 
                className="button" 
                onClick={() => {
                  if (cartItems.length === 0) {
                  alert("Please choose your items");
                  } else {
                  const orderDetails = {
                    items: cartItems,
                    total: total.toFixed(2)
                  };
                  window.location.href = route('Checkout', orderDetails);
                  }
                }} 
                >
                Checkout (RM{total.toFixed(2)})
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="FooterTemplate">
        <div className="BukoCopyright">
          Buko Ori Philippines <br /> @ Copyright Buko Enterprise 2024
        </div>
        <div className="FooterNavbar">
          <ul className="FooterListNavbar">
            <li><a href="/AboutUs">About Us</a></li>
            <li><a href="/ContactForm">Contact Form</a></li>
            <li><a href="/Menu">Menu</a></li>
            <li><a href="/OrderTracking">Order Tracking</a></li>
          </ul>
        </div>
        <div className="ContactNo">
          Tel: +606 264 5000 <br />
          Fax: +606 264 5016 <br />
        </div>
        <div className="Address">
          Universiti Teknologi MARA (UiTM), Cawangan Melaka Kampus Jasin, 77300 Merlimau, Melaka MALAYSIA.
        </div>
      </div>
    </div>
  );
}
