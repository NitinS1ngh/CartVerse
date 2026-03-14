# CartVerse - Full Stack E-Commerce Platform

A feature-rich MERN stack e-commerce application with a customer-facing storefront and a dedicated admin portal. Built using React, Node.js, Express, MongoDB, and styled with Tailwind CSS.

## Features

- **Storefront (Frontend):** Modern, responsive shopping experience where users can browse products, add items to cart, filter by categories, and subscribe to newsletters. Includes Razorpay integration for checkout.
- **Admin Panel (Admin):** Dedicated dashboard for store owners to add/edit products, manage orders, and track inventory.
- **Backend API (Backend):** Robust RESTful API handling authentication, product management, order processing, and image uploads via Cloudinary.

## Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, React Router, Context API
- **Admin Panel:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (via Mongoose)
- **Authentication:** JWT (JSON Web Tokens), bcrypt
- **File Storage:** Cloudinary (via Multer)
- **Payments:** Stripe / Razorpay (depending on configuration)

## Project Structure

The project is divided into three main directories, each functioning as its own independent service:

```
ecommerce-app-main/
│
├── frontend/    # Customer-facing React Vite application (runs on port 5173)
├── admin/       # Store owner dashboard (runs on port 5174)
└── backend/     # Node.js/Express API server (runs on port 4000)
```

## Running Locally

To run the application locally, you will need three terminal windows to start each service independently.

### 1. Backend Setup
```bash
cd backend
npm install
npm run server
```

**Required `.env` for Backend:**
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
CLOUDINARY_NAME=your_cloudinary_name
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CURRENCY=usd
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174
```

### 2. Frontend Setup (Storefront)
```bash
cd frontend
npm install
npm run dev
```

**Required `.env` for Frontend:**
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_for_newsletter
```

### 3. Admin Setup (Dashboard)
```bash
cd admin
npm install
npm run dev
```

**Required `.env` for Admin:**
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CLOUDINARY_URL=your_cloudinary_url
```

## Deployment Guide

When deploying to production, each service should be hosted separately.

1. **Deploy the Database:**
   - Host your MongoDB instance on **MongoDB Atlas**.
2. **Deploy the Backend:**
   - Platform recommendation: **Render** or **Railway**
   - In the deployment settings, configure the **Root Directory** as `backend`.
   - Set the build command to `npm install` and start command to `npm start`.
   - Add all environment variables from `backend/.env`.
3. **Deploy the Frontend & Admin:**
   - Platform recommendation: **Vercel** or **Netlify**
   - Create *two* separate projects on Vercel from the same repository.
   - For Project 1, set the **Root Directory** to `frontend`.
   - For Project 2, set the **Root Directory** to `admin`.
   - Update `VITE_BACKEND_URL` in both deployment dashboards to point to your live Render backend URL instead of localhost.
