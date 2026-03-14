import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

// App config
const app = express();
const PORT = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.set('trust proxy', 1);

// middlewares
app.use(express.json());

// Build allowed origins from environment variables and hardcoded defaults
const allowedOrigins = [
    process.env.FRONTEND_URL,
    process.env.ADMIN_URL,
    'https://cart-verse-gold.vercel.app',
    'https://cart-verse-m5e9.vercel.app',
    'https://cartverse.onrender.com',
    'http://localhost:5173',
    'http://localhost:5174'
].filter(Boolean);

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "token"]
};

app.use(cors(corsOptions));

// api endpoints
app.use('/api/cart', cartRouter);
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/order', orderRouter);

app.get('/', (req, res) => {
    res.send('API WORKING');
});

app.listen(PORT, () => console.log('Server started on PORT : ' + PORT));
