import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: Array, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    sizes: { type: Array, required: true },
    bestseller: { type: Boolean },
    date: { type: Number, required: true }
});

const productModel = mongoose.models.product || mongoose.model('product', productSchema);

const products = [
    // ── MEN ──────────────────────────────────────────────────────────────────
    {
        name: "Men's Classic White Oxford Shirt",
        description: "A timeless white Oxford shirt crafted from premium 100% cotton. Perfect for both formal and casual occasions with a tailored modern fit.",
        price: 1299,
        image: [
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80",
            "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Slim Fit Chino Trousers",
        description: "Versatile slim-fit chinos in a neutral khaki tone. Crafted from stretch-cotton blend for all-day comfort and style.",
        price: 1899,
        image: [
            "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36", "38"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Formal Blazer – Navy",
        description: "A single-breasted navy blazer with notched lapels and a structured silhouette. Ideal for business meetings or smart-casual events.",
        price: 4999,
        image: [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
            "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Graphic Print T-Shirt",
        description: "Comfortable crew-neck tee with bold graphic print. Made from soft ring-spun cotton for everyday casual wear.",
        price: 699,
        image: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
            "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Slim Jeans – Dark Indigo",
        description: "Classic dark-wash slim-fit jeans with a modern cut. Features five-pocket styling and durable denim construction.",
        price: 2199,
        image: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80",
            "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["30", "32", "34", "36"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Men's Hooded Sweatshirt – Grey",
        description: "Cozy fleece-lined pullover hoodie in heather grey. Features a kangaroo pocket and adjustable drawstring hood.",
        price: 1599,
        image: [
            "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80",
            "https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Linen Shirt – Sky Blue",
        description: "Breathable linen shirt perfect for summer. Relaxed fit with a classic collar and chest pocket.",
        price: 1499,
        image: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4b4e37?w=600&q=80",
            "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Men's Athletic Jogger Pants",
        description: "High-performance joggers with moisture-wicking fabric. Features tapered leg, elastic waistband, and side zip pockets.",
        price: 1299,
        image: [
            "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&q=80",
            "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?w=600&q=80"
        ],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["S", "M", "L", "XL", "XXL"],
        bestseller: true,
        date: Date.now()
    },

    // ── WOMEN ────────────────────────────────────────────────────────────────
    {
        name: "Women's Floral Wrap Dress",
        description: "Elegant wrap dress with a flattering V-neckline and flowing floral print. Perfect for brunch, weddings, or casual evenings out.",
        price: 2499,
        image: [
            "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80",
            "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Dresses",
        sizes: ["XS", "S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's High-Waist Skinny Jeans",
        description: "Sculpting high-waist skinny jeans in classic blue denim. Stretch fabric ensures a perfect fit all day long.",
        price: 1999,
        image: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80",
            "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["24", "26", "28", "30", "32"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Silk Blouse – Ivory",
        description: "Luxurious satin-finish blouse with a relaxed drape and tie-front detail. Transitions effortlessly from office to evening.",
        price: 2199,
        image: [
            "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=600&q=80",
            "https://images.unsplash.com/photo-1566206091558-7f218b696731?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Blazer – Camel",
        description: "Structured single-button blazer in warm camel tones. A wardrobe staple that pairs beautifully with trousers or jeans.",
        price: 3999,
        image: [
            "https://images.unsplash.com/photo-1594938298603-c8148c4b4e37?w=600&q=80",
            "https://images.unsplash.com/photo-1506634572416-48cdfe9168f2?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Pleated Midi Skirt",
        description: "Flowy pleated midi skirt in blush pink satin. The perfect piece for both formal and smart casual outfits.",
        price: 1799,
        image: [
            "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80",
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Women's Knit Turtleneck Sweater",
        description: "Cozy ribbed turtleneck in a chunky knit. Made from soft acrylic blend, perfect for the winter season.",
        price: 2299,
        image: [
            "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=600&q=80",
            "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Lace Trim Cami Top",
        description: "Delicate lace-trim camisole in cream. Features adjustable straps and a satin finish for an elegant everyday look.",
        price: 999,
        image: [
            "https://images.unsplash.com/photo-1551163943-3f7053a8f0de?w=600&q=80",
            "https://images.unsplash.com/photo-1559628233-4923f5dd1a42?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["XS", "S", "M", "L"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Women's Wide-Leg Palazzo Pants",
        description: "Elegant wide-leg palazzo trousers in lightweight crepe. Flowy silhouette with an elastic waistband for comfort.",
        price: 1699,
        image: [
            "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
            "https://images.unsplash.com/photo-1475180098004-ca77a66827be?w=600&q=80"
        ],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["XS", "S", "M", "L", "XL"],
        bestseller: true,
        date: Date.now()
    },

    // ── KIDS ─────────────────────────────────────────────────────────────────
    {
        name: "Kids' Dinosaur Print T-Shirt",
        description: "Fun and colourful dinosaur graphic tee made from 100% organic cotton. Soft, hypoallergenic, and machine washable.",
        price: 499,
        image: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Topwear",
        sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids' Denim Dungaree Overalls",
        description: "Classic bib-front dungaree overalls in soft denim. Adjustable straps, roomy pockets, and durable stitching for active kids.",
        price: 1299,
        image: [
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids' Hooded Raincoat – Yellow",
        description: "Waterproof hooded raincoat in bright yellow. Sealed seams and reflective strips for safety on rainy days.",
        price: 1599,
        image: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Outerwear",
        sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y", "11-12Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids' Floral Frock – Pink",
        description: "Adorable floral-print frock with a twirl-worthy skirt. Soft cotton lining and back button closure for easy dressing.",
        price: 899,
        image: [
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80",
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Dresses",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids' Track Suit Set",
        description: "Matching jacket and jogger set in a sporty colourblock style. Breathable polyester with elastic cuffs for a snug fit.",
        price: 1199,
        image: [
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Sets",
        sizes: ["4-5Y", "6-7Y", "8-9Y", "10-11Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids' Striped Cotton Shorts",
        description: "Comfortable striped pull-on shorts in lightweight cotton. Elasticated waistband and relaxed fit for playful days.",
        price: 549,
        image: [
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["3-4Y", "5-6Y", "7-8Y", "9-10Y"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Kids' Warm Parka Jacket",
        description: "Cosy winter parka with faux-fur trimmed hood and quilted filling. Water-resistant outer shell and insulating inner lining.",
        price: 2499,
        image: [
            "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
            "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Outerwear",
        sizes: ["5-6Y", "7-8Y", "9-10Y", "11-12Y"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Kids' Cartoon Graphic Pajama Set",
        description: "Soft 100% cotton pajama set with fun cartoon prints. Long sleeves and full-length pants for a cosy night's sleep.",
        price: 799,
        image: [
            "https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?w=600&q=80",
            "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&q=80"
        ],
        category: "Kids",
        subCategory: "Sets",
        sizes: ["2-3Y", "4-5Y", "6-7Y", "8-9Y"],
        bestseller: false,
        date: Date.now()
    },

    // ── ACCESSORIES ──────────────────────────────────────────────────────────
    {
        name: "Leather Tote Bag – Tan",
        description: "Spacious genuine leather tote with suede interior. Features a top zip closure, two interior pockets, and gold hardware.",
        price: 3499,
        image: [
            "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80",
            "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Bags",
        sizes: ["Free Size"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Classic Aviator Sunglasses",
        description: "Timeless metal-frame aviator sunglasses with UV400 polarised lenses. Lightweight and durable for everyday use.",
        price: 1299,
        image: [
            "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&q=80",
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Eyewear",
        sizes: ["Free Size"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Minimalist Leather Watch – Black",
        description: "Slim-profile leather strap watch with Japanese quartz movement. Clean dial design with luminous hour markers.",
        price: 4999,
        image: [
            "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80",
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Watches",
        sizes: ["Free Size"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Cashmere Blend Scarf – Beige",
        description: "Luxuriously soft cashmere-blend scarf in classic beige. Generously sized for versatile styling throughout the year.",
        price: 1799,
        image: [
            "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=600&q=80",
            "https://images.unsplash.com/photo-1517353534858-9e15fa1c4e41?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Scarves",
        sizes: ["Free Size"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Braided Leather Belt – Brown",
        description: "Handcrafted braided belt in genuine leather. Fits waist sizes 28–40 with a solid brass buckle.",
        price: 899,
        image: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
            "https://images.unsplash.com/photo-1594938298603-c8148c4b4e37?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Belts",
        sizes: ["S", "M", "L", "XL"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Canvas Backpack – Olive Green",
        description: "Sturdy waxed canvas backpack with laptop compartment (fits up to 15\"). Padded straps and multiple organiser pockets.",
        price: 2799,
        image: [
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&q=80",
            "https://images.unsplash.com/photo-1473188588951-666fce8e7c68?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Bags",
        sizes: ["Free Size"],
        bestseller: false,
        date: Date.now()
    },
    {
        name: "Silver Chain Necklace",
        description: "Delicate 925 sterling silver chain necklace, 45 cm length. Hypoallergenic and tarnish-resistant for lasting wear.",
        price: 1499,
        image: [
            "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
            "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Jewellery",
        sizes: ["Free Size"],
        bestseller: true,
        date: Date.now()
    },
    {
        name: "Wool Flat Cap – Charcoal",
        description: "Classic flat cap in herringbone wool blend. Structured brim and satin inner lining for a polished look.",
        price: 1099,
        image: [
            "https://images.unsplash.com/photo-1521369909029-2afed882baee?w=600&q=80",
            "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80"
        ],
        category: "Accessories",
        subCategory: "Hats",
        sizes: ["S/M", "L/XL"],
        bestseller: false,
        date: Date.now()
    }
];

async function seed() {
    try {
        console.log('🔗 Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('✅ Connected to MongoDB');

        // Clear existing products
        const deleted = await productModel.deleteMany({});
        console.log(`🗑️  Cleared ${deleted.deletedCount} existing products`);

        // Insert new products
        const inserted = await productModel.insertMany(products);
        console.log(`🌱 Successfully seeded ${inserted.length} products:`);

        const categories = [...new Set(products.map(p => p.category))];
        categories.forEach(cat => {
            const count = products.filter(p => p.category === cat).length;
            console.log(`   • ${cat}: ${count} items`);
        });

        console.log('\n✅ Seed complete!');
    } catch (err) {
        console.error('❌ Seed failed:', err);
    } finally {
        await mongoose.disconnect();
        console.log('🔌 Disconnected from MongoDB');
    }
}

seed();
