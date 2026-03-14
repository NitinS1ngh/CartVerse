import mongoose from 'mongoose';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import orderModel from './models/orderModel.js';
import productModel from './models/productModel.js';

const seedOrders = async () => {
    try {
        await connectDB();
        
        // Fetch some products to use in dummy orders
        const products = await productModel.find().limit(5);
        if (products.length === 0) {
            console.log("No products found in the database. Please add some products first.");
            process.exit(1);
        }

        const dummyOrders = [
            {
                userId: "user_6789abc",
                items: [
                    {
                        ...products[0].toObject(),
                        quantity: 2,
                        size: products[0].sizes[0] || 'M'
                    }
                ],
                amount: products[0].price * 2 + 10,
                address: {
                    firstName: "John",
                    lastName: "Doe",
                    email: "johndoe@example.com",
                    street: "123 Main St",
                    city: "New York",
                    state: "NY",
                    zipcode: "10001",
                    country: "USA",
                    phone: "1234567890"
                },
                status: "Order Placed",
                paymentMethod: "COD",
                payment: false,
                date: Date.now() - 86400000 * 2 // 2 days ago
            },
            {
                userId: "user_def123",
                items: [
                    {
                        ...products[1 % products.length].toObject(),
                        quantity: 1,
                        size: products[1 % products.length].sizes[0] || 'L'
                    },
                    {
                        ...products[2 % products.length].toObject(),
                        quantity: 1,
                        size: products[2 % products.length].sizes[0] || 'S'
                    }
                ],
                amount: products[1 % products.length].price + products[2 % products.length].price + 10,
                address: {
                    firstName: "Jane",
                    lastName: "Smith",
                    email: "janesmith@example.com",
                    street: "456 Oak Ave",
                    city: "Los Angeles",
                    state: "CA",
                    zipcode: "90001",
                    country: "USA",
                    phone: "0987654321"
                },
                status: "Shipped",
                paymentMethod: "Stripe",
                payment: true,
                date: Date.now() - 86400000 * 5 // 5 days ago
            },
            {
                userId: "user_xyz789",
                items: [
                    {
                        ...products[3 % products.length].toObject(),
                        quantity: 3,
                        size: products[3 % products.length].sizes[0] || 'XL'
                    }
                ],
                amount: products[3 % products.length].price * 3 + 10,
                address: {
                    firstName: "Emily",
                    lastName: "Johnson",
                    email: "emilyj@example.com",
                    street: "789 Pine Rd",
                    city: "Chicago",
                    state: "IL",
                    zipcode: "60601",
                    country: "USA",
                    phone: "5551234567"
                },
                status: "Delivered",
                paymentMethod: "Razorpay",
                payment: true,
                date: Date.now() - 86400000 * 10 // 10 days ago
            }
        ];

        await orderModel.insertMany(dummyOrders);
        console.log("Successfully seeded 3 dummy orders!");
        process.exit(0);

    } catch (error) {
        console.error("Error seeding orders:", error);
        process.exit(1);
    }
};

seedOrders();
