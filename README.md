🛒 Grocery App

A modern full-featured grocery shopping web application built with React.
Users can browse products, add items to cart, manage quantities, and admins can manage inventory.

🚀 Features
🏠 Home Page

Modern hero section

Featured categories

Promotional banner

🛍 Shop Page

Fetches products from JSON Server

Displays responsive product grid

Add to Cart functionality

🛒 Cart Page

View added items

Update quantities

Remove items

Real-time grand total calculation

Persistent cart using backend API

🔧 Admin Dashboard

Add new products

Delete products

Form validation

Confirmation modals

🔔 User Feedback

Toast notifications

SweetAlert confirmations

Error handling

🧱 Tech Stack

React (Vite)

React Router DOM

Context API (Global Cart State)

Axios

JSON Server (Mock Backend)

React Hot Toast

SweetAlert2

Modern CSS (Custom Styling)

📂 Project Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Shop.jsx
│   ├── Cart.jsx
│   └── Admin.jsx
│
├── context/
│   └── CartContext.jsx
│
├── App.jsx
└── main.jsx
⚙️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/josephndemo/GroceryApp---Group1.git
cd grocery-mvp
2️⃣ Install dependencies
npm install
3️⃣ Install JSON Server (if not installed)
npm install -g json-server
4️⃣ Add db.json

Create a db.json file in the root directory:

{
  "products": [],
  "cart": []
}

Or use your sample product data.

5️⃣ Start JSON Server
npx json-server --watch db.json --port 3000

Backend runs at: http://localhost:3000

6️⃣ Start React App
npm run dev

App runs at: http://localhost:5173

📡 API Endpoints
Method	Endpoint	Description
GET	/products	Fetch all products
POST	/products	Add product
DELETE	/products/:id	Delete product
GET	/cart	Fetch cart
POST	/cart	Add to cart
PUT	/cart/:id	Update quantity
DELETE	/cart/:id	Remove from cart
💡 Key Architecture Decisions

Global cart state handled with Context API

Backend persistence via JSON Server

Optimistic UI updates for better UX

Functional state updates to prevent stale state bugs

Modular component structure

🧠 Improvements & Future Enhancements

Product search & filtering

Checkout page

User authentication

Protected admin route

Payment integration (Stripe)

Dark mode toggle

Deployment to Vercel / Render

🌍 Deployment

You can deploy the frontend on:

Vercel

Netlify

Render

And the backend JSON server on:

Render

Railway

👨‍💻 Authors

Joseph Ndemo

Agnes Nganga

Charles Wabera

Mark Warunge

Timothy Kangangi