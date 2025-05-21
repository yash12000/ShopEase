# 🛒 Mini E-commerce App

A simple, modern, and responsive mini e-commerce app built with **React Native** and **Expo**.  
Browse products, view details, add to cart, and manage your shopping cart with persistent storage.

---

## ✨ Features

- **Product List:**  
  Browse a grid of products fetched from a remote API (Fake Store API).

- **Product Details:**  
  View detailed information, images, price, and ratings for each product.

- **Add to Cart:**  
  Add products to your cart from the product detail page.

- **Cart Management:**  
  - View all items in your cart  
  - Adjust item quantities  
  - Remove items  
  - See the total price  
  - Cart state is saved with local persistence (AsyncStorage)

- **Cart Badge:**  
  Instantly see the number of items in your cart with a badge on the cart tab.

- **State Management:**  
  Uses React Context API for global cart state.

- **Navigation:**  
  Bottom tab navigation for Products and Cart, with stack navigation for product details.

---

## 🚀 Getting Started

### 1. **Clone the repository**
```bash
git clone <your-repo-url>
cd mini-ecommerce-app
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Start the development server**
```bash
npm start
```

### 4. **Run the app**
- **On your phone:**  
  Scan the QR code with [Expo Go](https://expo.dev/client) (Android/iOS)
- **On an emulator:**  
  Press `a` (Android) or `i` (iOS) in the terminal
- **On the web:**  
  Press `w` in the terminal (UI navigation only; direct URL navigation is not supported)

---

## 🗂️ Project Structure

```
mini-ecommerce-app/
├── app/
│   └── index.tsx         
├── components/
│   ├── Cart.js           
│   ├── ProductDetail.js  
│   └── ProductList.js    
├── contexts/
│   └── CartContext.js    
├── package.json
└── ...
```

---

## 🛠️ Tech Stack

- **React Native** (with Expo)
- **React Navigation** (stack & bottom tabs)
- **Context API** (cart state)
- **AsyncStorage** (cart persistence)
- **Axios** (API requests)
- **Fake Store API** (product data)

---

## 📦 API Reference

- [Fake Store API](https://fakestoreapi.com/products)

---

## 📝 License

MIT

---

**Happy shopping! 🛍️**
