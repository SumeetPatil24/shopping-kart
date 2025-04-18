// // backend/utils/seedData.js
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import Item from '../models/item.model.js';
// import User from '../models/user.model.js';
// import connectDB from '../config/db.js';

// dotenv.config();

// // Sample products data
// const products = [
//   {
//     title: "Wireless Bluetooth Headphones",
//     details:
//       "High-quality sound with noise cancellation, 20-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals working from home.",
//     category: "Electronics",
//     price: 129.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 50,
//     attributes: {
//       Brand: "SoundMaster",
//       Color: "Black",
//       Connectivity: "Bluetooth 5.0",
//       "Battery Life": "20 hours",
//     },
//   },
//   {
//     title: "Smart Fitness Watch",
//     details:
//       "Track your fitness goals with heart rate monitoring, step counting, sleep tracking, and smartphone notifications. Water-resistant and includes a customizable display.",
//     category: "Wearables",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Brand: "FitTech",
//       Color: "Blue",
//       "Water Resistant": "Yes",
//       "Battery Life": "7 days",
//     },
//   },
//   {
//     title: "Portable Bluetooth Speaker",
//     details:
//       "Waterproof, dustproof speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures, beach trips, or poolside parties.",
//     category: "Electronics",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 100,
//     attributes: {
//       Brand: "AudioPro",
//       Color: "Red",
//       Waterproof: "IPX7",
//       "Battery Life": "12 hours",
//     },
//   },
//   {
//     title: "Organic Cotton T-Shirt",
//     details:
//       "Soft, breathable 100% organic cotton t-shirt. Ethically sourced and environmentally friendly. Available in multiple sizes and colors for a comfortable, casual look.",
//     category: "Clothing",
//     price: 24.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 200,
//     attributes: {
//       Material: "Organic Cotton",
//       Sizes: "S, M, L, XL",
//       Care: "Machine wash cold",
//     },
//   },
//   {
//     title: "Professional Chef Knife",
//     details:
//       "High-carbon stainless steel 8-inch chef knife with ergonomic handle. Perfect for professional and home kitchens. Precision-forged for durability and sharpness.",
//     category: "Kitchen",
//     price: 79.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 30,
//     attributes: {
//       Material: "High-carbon stainless steel",
//       Length: "8 inches",
//       "Dishwasher Safe": "No",
//     },
//   },
//   {
//     title: "Leather Wallet",
//     details:
//       "Genuine leather wallet with multiple card slots, ID window, and bill compartment. Slim design fits comfortably in pocket. Available in brown and black.",
//     category: "Accessories",
//     price: 34.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 85,
//     attributes: {
//       Material: "Genuine Leather",
//       Color: "Brown",
//       "Card Slots": "8",
//     },
//   },
//   {
//     title: "Stainless Steel Water Bottle",
//     details:
//       "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly. Perfect for hiking, gym, or everyday use.",
//     category: "Kitchen",
//     price: 29.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 120,
//     attributes: {
//       Material: "Stainless Steel",
//       Capacity: "24 oz",
//       Insulated: "Yes",
//     },
//   },
//   {
//     title: "Yoga Mat",
//     details:
//       "Non-slip, eco-friendly yoga mat with alignment lines. Perfect for yoga, pilates, and floor exercises. Thick padding for comfort and joint protection.",
//     category: "Fitness",
//     price: 42.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       Material: "TPE Foam",
//       Thickness: "6mm",
//       Dimensions: '72" x 24"',
//     },
//   },
//   {
//     title: "Mechanical Keyboard",
//     details:
//       "Mechanical gaming keyboard with RGB backlighting, programmable keys, and anti-ghosting technology. Designed for gamers and professionals who need precision and speed.",
//     category: "Electronics",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 45,
//     attributes: {
//       "Key Type": "Mechanical",
//       Backlight: "RGB",
//       Connection: "USB-C",
//       Switches: "Blue",
//     },
//   },
//   {
//     title: "Cotton Blend Hoodie",
//     details:
//       "Comfortable cotton blend hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for casual wear or light workouts. Available in multiple colors.",
//     category: "Clothing",
//     price: 39.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 150,
//     attributes: {
//       Material: "80% Cotton, 20% Polyester",
//       Sizes: "S, M, L, XL, XXL",
//       Care: "Machine wash cold, tumble dry low",
//     },
//   },
//   {
//     title: "Smart Home Security Camera",
//     details: "Wireless security camera",
//     category: "Electronics",
//     price: 99.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 35,
//     attributes: {
//       Resolution: "1080p",
//       "Night Vision": "Yes",
//       "Motion Detection": "Yes",
//     },
//   },
// ]

// // Sample admin user
// const adminUser = {
//   username: 'admin',
//   email: 'admin@example.com',
//   password: 'admin123',
//   role: 'admin'
// };

// // Sample regular user
// const regularUser = {
//   username: 'user',
//   email: 'user@example.com',
//   password: 'user123',
//   role: 'user'
// };

// // Seed function
// const seedData = async () => {
//   try {
//     // Connect to database
//     await connectDB();
    
//     // Clear existing data
//     await Item.deleteMany({});
    
//     // Insert products
//     await Item.insertMany(products);
//     console.log('Products seeded successfully');
    
//     // Check if admin user exists
//     const existingAdmin = await User.findOne({ email: adminUser.email });
//     if (!existingAdmin) {
//       await User.create(adminUser);
//       console.log('Admin user created');
//     }
    
//     // Check if regular user exists
//     const existingUser = await User.findOne({ email: regularUser.email });
//     if (!existingUser) {
//       await User.create(regularUser);
//       console.log('Regular user created');
//     }
    
//     console.log('Seeding completed successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error('Error seeding data:', error);
//     process.exit(1);
//   }
// };

// seedData();

// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import Item from "../models/item.model.js"
// import User from "../models/user.model.js"

// dotenv.config()

// // Sample products data
// const products = [
//   {
//     title: "Wireless Bluetooth Headphones",
//     details:
//       "High-quality sound with noise cancellation, 20-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals working from home.",
//     category: "Electronics",
//     price: 129.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 50,
//     attributes: {
//       Brand: "SoundMaster",
//       Color: "Black",
//       Connectivity: "Bluetooth 5.0",
//       "Battery Life": "20 hours",
//     },
//   },
//   {
//     title: "Smart Fitness Watch",
//     details:
//       "Track your fitness goals with heart rate monitoring, step counting, sleep tracking, and smartphone notifications. Water-resistant and includes a customizable display.",
//     category: "Wearables",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Brand: "FitTech",
//       Color: "Blue",
//       "Water Resistant": "Yes",
//       "Battery Life": "7 days",
//     },
//   },
//   {
//     title: "Portable Bluetooth Speaker",
//     details:
//       "Waterproof, dustproof speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures, beach trips, or poolside parties.",
//     category: "Electronics",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 100,
//     attributes: {
//       Brand: "AudioPro",
//       Color: "Red",
//       Waterproof: "IPX7",
//       "Battery Life": "12 hours",
//     },
//   },
//   {
//     title: "Organic Cotton T-Shirt",
//     details:
//       "Soft, breathable 100% organic cotton t-shirt. Ethically sourced and environmentally friendly. Available in multiple sizes and colors for a comfortable, casual look.",
//     category: "Clothing",
//     price: 24.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 200,
//     attributes: {
//       Material: "Organic Cotton",
//       Sizes: "S, M, L, XL",
//       Care: "Machine wash cold",
//     },
//   },
//   {
//     title: "Professional Chef Knife",
//     details:
//       "High-carbon stainless steel 8-inch chef knife with ergonomic handle. Perfect for professional and home kitchens. Precision-forged for durability and sharpness.",
//     category: "Kitchen",
//     price: 79.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 30,
//     attributes: {
//       Material: "High-carbon stainless steel",
//       Length: "8 inches",
//       "Dishwasher Safe": "No",
//     },
//   },
//   {
//     title: "Leather Wallet",
//     details:
//       "Genuine leather wallet with multiple card slots, ID window, and bill compartment. Slim design fits comfortably in pocket. Available in brown and black.",
//     category: "Accessories",
//     price: 34.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 85,
//     attributes: {
//       Material: "Genuine Leather",
//       Color: "Brown",
//       "Card Slots": "8",
//     },
//   },
//   {
//     title: "Stainless Steel Water Bottle",
//     details:
//       "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly. Perfect for hiking, gym, or everyday use.",
//     category: "Kitchen",
//     price: 29.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 120,
//     attributes: {
//       Material: "Stainless Steel",
//       Capacity: "24 oz",
//       Insulated: "Yes",
//     },
//   },
//   {
//     title: "Yoga Mat",
//     details:
//       "Non-slip, eco-friendly yoga mat with alignment lines. Perfect for yoga, pilates, and floor exercises. Thick padding for comfort and joint protection.",
//     category: "Fitness",
//     price: 42.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       Material: "TPE Foam",
//       Thickness: "6mm",
//       Dimensions: '72" x 24"',
//     },
//   },
//   {
//     title: "Mechanical Keyboard",
//     details:
//       "Mechanical gaming keyboard with RGB backlighting, programmable keys, and anti-ghosting technology. Designed for gamers and professionals who need precision and speed.",
//     category: "Electronics",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 45,
//     attributes: {
//       "Key Type": "Mechanical",
//       Backlight: "RGB",
//       Connection: "USB-C",
//       Switches: "Blue",
//     },
//   },
//   {
//     title: "Cotton Blend Hoodie",
//     details:
//       "Comfortable cotton blend hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for casual wear or light workouts. Available in multiple colors.",
//     category: "Clothing",
//     price: 39.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 150,
//     attributes: {
//       Material: "80% Cotton, 20% Polyester",
//       Sizes: "S, M, L, XL, XXL",
//       Care: "Machine wash cold, tumble dry low",
//     },
//   },
//   {
//     title: "Smart Home Security Camera",
//     details:
//       "Wireless security camera with 1080p HD video, night vision, and motion detection. Monitor your home from anywhere with the mobile app. Easy setup with no wiring required.",
//     category: "Electronics",
//     price: 99.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 35,
//     attributes: {
//       Resolution: "1080p",
//       "Night Vision": "Yes",
//       "Motion Detection": "Yes",
//     },
//   },
//   // Additional products
//   {
//     title: "Ceramic Coffee Mug Set",
//     details:
//       "Set of 4 ceramic coffee mugs with modern design. Microwave and dishwasher safe. Perfect for your morning coffee or afternoon tea.",
//     category: "Kitchen",
//     price: 24.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Material: "Ceramic",
//       Capacity: "12 oz",
//       "Dishwasher Safe": "Yes",
//       "Microwave Safe": "Yes",
//     },
//   },
//   {
//     title: "Wireless Gaming Mouse",
//     details:
//       "High-precision wireless gaming mouse with adjustable DPI, programmable buttons, and RGB lighting. Ultra-fast response time and ergonomic design for comfortable gaming sessions.",
//     category: "Electronics",
//     price: 49.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       DPI: "Up to 16,000",
//       Buttons: "7 programmable",
//       "Battery Life": "40 hours",
//       RGB: "Yes",
//     },
//   },
//   {
//     title: "Bamboo Cutting Board Set",
//     details:
//       "Set of 3 bamboo cutting boards in different sizes. Eco-friendly, durable, and knife-friendly. Perfect for food prep and serving.",
//     category: "Kitchen",
//     price: 34.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 40,
//     attributes: {
//       Material: "Bamboo",
//       Sizes: "Small, Medium, Large",
//       Care: "Hand wash only",
//     },
//   },
//   {
//     title: "Leather Crossbody Bag",
//     details:
//       "Genuine leather crossbody bag with adjustable strap and multiple compartments. Stylish and functional for everyday use.",
//     category: "Accessories",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 25,
//     attributes: {
//       Material: "Genuine Leather",
//       Color: "Brown",
//       Dimensions: '9" x 7" x 3"',
//       Pockets: "3 internal, 1 external",
//     },
//   },
//   {
//     title: "Adjustable Dumbbell Set",
//     details:
//       "Space-saving adjustable dumbbell set that replaces multiple dumbbells. Weight range from 5 to 52.5 lbs per dumbbell. Perfect for home gyms.",
//     category: "Fitness",
//     price: 299.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 15,
//     attributes: {
//       "Weight Range": "5-52.5 lbs each",
//       Adjustments: "2.5 lb increments",
//       Material: "Steel with rubber grip",
//     },
//   },
//   {
//     title: "Wireless Earbuds",
//     details:
//       "True wireless earbuds with active noise cancellation, touch controls, and 24-hour battery life with charging case. Water-resistant for workouts.",
//     category: "Electronics",
//     price: 79.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 90,
//     attributes: {
//       "Battery Life": "6 hours (24 with case)",
//       "Noise Cancellation": "Active",
//       "Water Resistance": "IPX5",
//       Connectivity: "Bluetooth 5.2",
//     },
//   },
//   {
//     title: "Linen Bed Sheet Set",
//     details:
//       "Premium 100% linen bed sheet set including flat sheet, fitted sheet, and pillowcases. Breathable, temperature-regulating, and gets softer with each wash. Available in various colors and sizes.",
//     category: "Home",
//     price: 129.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 30,
//     attributes: {
//       Material: "100% Linen",
//       "Thread Count": "150",
//       Sizes: "Twin, Full, Queen, King",
//       Care: "Machine wash cold, tumble dry low",
//     },
//   },
//   {
//     title: "Smart LED Light Bulbs",
//     details:
//       "Set of 4 smart LED light bulbs that can be controlled via smartphone app or voice commands. Adjustable brightness and color temperature. Compatible with major smart home systems.",
//     category: "Electronics",
//     price: 39.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1558882224-dda166733046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 120,
//     attributes: {
//       Wattage: "9W (60W equivalent)",
//       Lifespan: "25,000 hours",
//       Compatibility: "Alexa, Google Home, HomeKit",
//       Connectivity: "Wi-Fi",
//     },
//   },
//   {
//     title: "Minimalist Wall Clock",
//     details:
//       "Modern minimalist wall clock with silent sweep movement. Clean design with no numbers. Perfect for living rooms, offices, or bedrooms.",
//     category: "Home",
//     price: 29.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 45,
//     attributes: {
//       Diameter: "12 inches",
//       Material: "Metal and glass",
//       Movement: "Silent sweep",
//       Battery: "AA (not included)",
//     },
//   },
//   {
//     title: "Denim Jacket",
//     details:
//       "Classic denim jacket with button closure and multiple pockets. Versatile wardrobe staple that pairs well with almost anything. Available in light, medium, and dark wash.",
//     category: "Clothing",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Material: "100% Cotton Denim",
//       Sizes: "XS, S, M, L, XL",
//       Wash: "Medium",
//       Care: "Machine wash cold",
//     },
//   },
// ]

// // Sample users data
// const users = [
//   {
//     username: "admin",
//     email: "admin@example.com",
//     password: "password123",
//     role: "admin",
//     profilePicture: "https://ui-avatars.com/api/?name=Admin&background=random&color=fff",
//   },
//   {
//     username: "user",
//     email: "user@example.com",
//     password: "password123",
//     role: "user",
//     profilePicture: "https://ui-avatars.com/api/?name=User&background=random&color=fff",
//   },
// ]

// // Function to seed the database
// const seedDatabase = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log("Connected to MongoDB for seeding")

//     // Clear existing data
//     await Item.deleteMany({})
//     await User.deleteMany({})
//     console.log("Cleared existing data")

//     // Insert products
//     await Item.insertMany(products)
//     console.log(`Inserted ${products.length} products`)

//     // Insert users
//     await User.insertMany(users)
//     console.log(`Inserted ${users.length} users`)

//     console.log("Database seeding completed successfully")
//     process.exit(0)
//   } catch (error) {
//     console.error("Error seeding database:", error)
//     process.exit(1)
//   }
// }

// // Run the seeding function
// seedDatabase()

// import mongoose from "mongoose"
// import dotenv from "dotenv"
// import Item from "../models/item.model.js"
// import User from "../models/user.model.js"
// import Course from "../models/course.model.js"

// dotenv.config()

// // Sample products data
// const products = [
//   {
//     title: "Wireless Bluetooth Headphones",
//     details:
//       "High-quality sound with noise cancellation, 20-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals working from home.",
//     category: "Electronics",
//     price: 129.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 50,
//     attributes: {
//       Brand: "SoundMaster",
//       Color: "Black",
//       Connectivity: "Bluetooth 5.0",
//       "Battery Life": "20 hours",
//     },
//   },
//   {
//     title: "Smart Fitness Watch",
//     details:
//       "Track your fitness goals with heart rate monitoring, step counting, sleep tracking, and smartphone notifications. Water-resistant and includes a customizable display.",
//     category: "Wearables",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Brand: "FitTech",
//       Color: "Blue",
//       "Water Resistant": "Yes",
//       "Battery Life": "7 days",
//     },
//   },
//   {
//     title: "Portable Bluetooth Speaker",
//     details:
//       "Waterproof, dustproof speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures, beach trips, or poolside parties.",
//     category: "Electronics",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 100,
//     attributes: {
//       Brand: "AudioPro",
//       Color: "Red",
//       Waterproof: "IPX7",
//       "Battery Life": "12 hours",
//     },
//   },
//   {
//     title: "Organic Cotton T-Shirt",
//     details:
//       "Soft, breathable 100% organic cotton t-shirt. Ethically sourced and environmentally friendly. Available in multiple sizes and colors for a comfortable, casual look.",
//     category: "Clothing",
//     price: 24.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 200,
//     attributes: {
//       Material: "Organic Cotton",
//       Sizes: "S, M, L, XL",
//       Care: "Machine wash cold",
//     },
//   },
//   {
//     title: "Professional Chef Knife",
//     details:
//       "High-carbon stainless steel 8-inch chef knife with ergonomic handle. Perfect for professional and home kitchens. Precision-forged for durability and sharpness.",
//     category: "Kitchen",
//     price: 79.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 30,
//     attributes: {
//       Material: "High-carbon stainless steel",
//       Length: "8 inches",
//       "Dishwasher Safe": "No",
//     },
//   },
//   {
//     title: "Leather Wallet",
//     details:
//       "Genuine leather wallet with multiple card slots, ID window, and bill compartment. Slim design fits comfortably in pocket. Available in brown and black.",
//     category: "Accessories",
//     price: 34.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 85,
//     attributes: {
//       Material: "Genuine Leather",
//       Color: "Brown",
//       "Card Slots": "8",
//     },
//   },
//   {
//     title: "Stainless Steel Water Bottle",
//     details:
//       "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly. Perfect for hiking, gym, or everyday use.",
//     category: "Kitchen",
//     price: 29.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 120,
//     attributes: {
//       Material: "Stainless Steel",
//       Capacity: "24 oz",
//       Insulated: "Yes",
//     },
//   },
//   {
//     title: "Yoga Mat",
//     details:
//       "Non-slip, eco-friendly yoga mat with alignment lines. Perfect for yoga, pilates, and floor exercises. Thick padding for comfort and joint protection.",
//     category: "Fitness",
//     price: 42.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       Material: "TPE Foam",
//       Thickness: "6mm",
//       Dimensions: '72" x 24"',
//     },
//   },
//   {
//     title: "Mechanical Keyboard",
//     details:
//       "Mechanical gaming keyboard with RGB backlighting, programmable keys, and anti-ghosting technology. Designed for gamers and professionals who need precision and speed.",
//     category: "Electronics",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 45,
//     attributes: {
//       "Key Type": "Mechanical",
//       Backlight: "RGB",
//       Connection: "USB-C",
//       Switches: "Blue",
//     },
//   },
//   {
//     title: "Cotton Blend Hoodie",
//     details:
//       "Comfortable cotton blend hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for casual wear or light workouts. Available in multiple colors.",
//     category: "Clothing",
//     price: 39.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 150,
//     attributes: {
//       Material: "80% Cotton, 20% Polyester",
//       Sizes: "S, M, L, XL, XXL",
//       Care: "Machine wash cold, tumble dry low",
//     },
//   },
//   {
//     title: "Smart Home Security Camera",
//     details:
//       "Wireless security camera with 1080p HD video, night vision, and motion detection. Monitor your home from anywhere with the mobile app. Easy setup with no wiring required.",
//     category: "Electronics",
//     price: 99.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 35,
//     attributes: {
//       Resolution: "1080p",
//       "Night Vision": "Yes",
//       "Motion Detection": "Yes",
//     },
//   },
//   // Additional products
//   {
//     title: "Ceramic Coffee Mug Set",
//     details:
//       "Set of 4 ceramic coffee mugs with modern design. Microwave and dishwasher safe. Perfect for your morning coffee or afternoon tea.",
//     category: "Kitchen",
//     price: 24.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 75,
//     attributes: {
//       Material: "Ceramic",
//       Capacity: "12 oz",
//       "Dishwasher Safe": "Yes",
//       "Microwave Safe": "Yes",
//     },
//   },
//   {
//     title: "Wireless Gaming Mouse",
//     details:
//       "High-precision wireless gaming mouse with adjustable DPI, programmable buttons, and RGB lighting. Ultra-fast response time and ergonomic design for comfortable gaming sessions.",
//     category: "Electronics",
//     price: 49.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       DPI: "Up to 16,000",
//       Buttons: "7 programmable",
//       "Battery Life": "40 hours",
//       RGB: "Yes",
//     },
//   },
//   {
//     title: "Bamboo Cutting Board Set",
//     details:
//       "Set of 3 bamboo cutting boards in different sizes. Eco-friendly, durable, and knife-friendly. Perfect for food prep and serving.",
//     category: "Kitchen",
//     price: 34.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 40,
//     attributes: {
//       Material: "Bamboo",
//       Sizes: "Small, Medium, Large",
//       Care: "Hand wash only",
//     },
//   },
//   {
//     title: "Leather Crossbody Bag",
//     details:
//       "Genuine leather crossbody bag with adjustable strap and multiple compartments. Stylish and functional for everyday use.",
//     category: "Accessories",
//     price: 59.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 25,
//     attributes: {
//       Material: "Genuine Leather",
//       Color: "Brown",
//       Dimensions: '9" x 7" x 3"',
//       Pockets: "3 internal, 1 external",
//     },
//   },
//   {
//     title: "Adjustable Dumbbell Set",
//     details:
//       "Space-saving adjustable dumbbell set that replaces multiple dumbbells. Weight range from 5 to 52.5 lbs per dumbbell. Perfect for home gyms.",
//     category: "Fitness",
//     price: 299.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 30,
//     attributes: {
//       Material: "Steel, Plastic",
//       "Weight Range": "5-52.5 lbs",
//       Adjustable: "Yes",
//     },
//   },
//   {
//     title: "Outdoor Camping Tent",
//     details:
//       "Waterproof and spacious camping tent for 4 people. Easy setup and durable construction for outdoor adventures.",
//     category: "Sports",
//     price: 149.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1532274402911-5a369e19d269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 20,
//     attributes: {
//       Capacity: "4 Person",
//       Waterproof: "Yes",
//       Material: "Polyester",
//     },
//   },
//   {
//     title: "Bluetooth Noise Cancelling Earbuds",
//     details:
//       "Premium Bluetooth earbuds with active noise cancellation and long battery life. Comfortable fit and high-quality sound for immersive listening experience.",
//     category: "Electronics",
//     price: 119.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1560762429-e959a58c99d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 50,
//     attributes: {
//       "Noise Cancellation": "Active",
//       "Battery Life": "8 hours",
//       "Water Resistance": "IPX5",
//     },
//   },
//   {
//     title: "Classic Leather Backpack",
//     details:
//       "Stylish and durable leather backpack with multiple compartments and padded laptop sleeve. Perfect for school, work, or travel.",
//     category: "Accessories",
//     price: 89.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1556020619-5a5569995257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 35,
//     attributes: {
//       Material: "Genuine Leather",
//       "Laptop Sleeve": "Yes",
//       Capacity: "20L",
//     },
//   },
//   {
//     title: "Electric Toothbrush",
//     details:
//       "Rechargeable electric toothbrush with multiple cleaning modes and timer. Improves oral hygiene and promotes healthy gums.",
//     category: "Health",
//     price: 44.99,
//     available: true,
//     imageUrl:
//       "https://images.unsplash.com/photo-1622543450482-565257815997?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     stock: 60,
//     attributes: {
//       "Cleaning Modes": "5",
//       Timer: "2 minutes",
//       Rechargeable: "Yes",
//     },
//   },
// ]

// // Sample courses data
// const courses = [
//   {
//     title: "Web Development Bootcamp",
//     description:
//       "A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and learn modern web development practices.",
//     category: "Programming",
//     price: 99.99,
//     instructor: "John Smith",
//     duration: "12 weeks",
//     level: "Beginner",
//     imageUrl:
//       "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     rating: 4.8,
//     enrolledStudents: 1250,
//     featured: true,
//     lessons: [
//       {
//         title: "Introduction to HTML",
//         description: "Learn the basics of HTML and how to structure web pages.",
//         duration: "45 minutes",
//         videoUrl: "https://example.com/html-intro.mp4",
//       },
//       {
//         title: "CSS Fundamentals",
//         description: "Style your web pages with CSS and learn about selectors, properties, and values.",
//         duration: "60 minutes",
//         videoUrl: "https://example.com/css-fundamentals.mp4",
//       },
//       {
//         title: "JavaScript Basics",
//         description: "Introduction to JavaScript programming language and its core concepts.",
//         duration: "75 minutes",
//         videoUrl: "https://example.com/js-basics.mp4",
//       },
//     ],
//   },
//   {
//     title: "Data Science Fundamentals",
//     description:
//       "Learn the basics of data science, including statistics, Python programming, data visualization, and machine learning algorithms.",
//     category: "Data Science",
//     price: 129.99,
//     instructor: "Sarah Johnson",
//     duration: "10 weeks",
//     level: "Intermediate",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     rating: 4.7,
//     enrolledStudents: 980,
//     featured: true,
//     lessons: [
//       {
//         title: "Introduction to Python",
//         description: "Learn the basics of Python programming language for data science.",
//         duration: "60 minutes",
//         videoUrl: "https://example.com/python-intro.mp4",
//       },
//       {
//         title: "Data Visualization",
//         description: "Create compelling visualizations with matplotlib and seaborn.",
//         duration: "55 minutes",
//         videoUrl: "https://example.com/data-viz.mp4",
//       },
//       {
//         title: "Machine Learning Basics",
//         description: "Introduction to machine learning algorithms and their applications.",
//         duration: "90 minutes",
//         videoUrl: "https://example.com/ml-basics.mp4",
//       },
//     ],
//   },
//   {
//     title: "Digital Marketing Masterclass",
//     description:
//       "Master digital marketing strategies including SEO, social media marketing, email campaigns, and analytics to grow your business online.",
//     category: "Marketing",
//     price: 79.99,
//     instructor: "Michael Brown",
//     duration: "8 weeks",
//     level: "All Levels",
//     imageUrl:
//       "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     rating: 4.5,
//     enrolledStudents: 1560,
//     featured: false,
//     lessons: [
//       {
//         title: "SEO Fundamentals",
//         description: "Learn how to optimize your website for search engines.",
//         duration: "50 minutes",
//         videoUrl: "https://example.com/seo-fundamentals.mp4",
//       },
//       {
//         title: "Social Media Marketing",
//         description: "Strategies for effective marketing on various social media platforms.",
//         duration: "65 minutes",
//         videoUrl: "https://example.com/social-media.mp4",
//       },
//       {
//         title: "Email Marketing",
//         description: "Create effective email campaigns to engage your audience.",
//         duration: "45 minutes",
//         videoUrl: "https://example.com/email-marketing.mp4",
//       },
//     ],
//   },
//   {
//     title: "Photography Essentials",
//     description:
//       "Learn the fundamentals of photography, including camera settings, composition, lighting, and post-processing techniques.",
//     category: "Photography",
//     price: 69.99,
//     instructor: "Emily Chen",
//     duration: "6 weeks",
//     level: "Beginner",
//     imageUrl:
//       "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     rating: 4.9,
//     enrolledStudents: 720,
//     featured: true,
//     lessons: [
//       {
//         title: "Understanding Your Camera",
//         description: "Learn about camera settings, modes, and functions.",
//         duration: "40 minutes",
//         videoUrl: "https://example.com/camera-basics.mp4",
//       },
//       {
//         title: "Composition Techniques",
//         description: "Master the art of composition to create compelling photographs.",
//         duration: "55 minutes",
//         videoUrl: "https://example.com/composition.mp4",
//       },
//       {
//         title: "Lighting Fundamentals",
//         description: "Learn how to work with natural and artificial light.",
//         duration: "60 minutes",
//         videoUrl: "https://example.com/lighting.mp4",
//       },
//     ],
//   },
//   {
//     title: "Mobile App Development with React Native",
//     description:
//       "Build cross-platform mobile applications using React Native. Learn to create iOS and Android apps with a single codebase.",
//     category: "Programming",
//     price: 119.99,
//     instructor: "David Wilson",
//     duration: "10 weeks",
//     level: "Intermediate",
//     imageUrl:
//       "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
//     rating: 4.6,
//     enrolledStudents: 850,
//     featured: false,
//     lessons: [
//       {
//         title: "React Native Basics",
//         description: "Introduction to React Native and its core concepts.",
//         duration: "70 minutes",
//         videoUrl: "https://example.com/react-native-basics.mp4",
//       },
//       {
//         title: "Building UI Components",
//         description: "Create reusable UI components for your mobile apps.",
//         duration: "65 minutes",
//         videoUrl: "https://example.com/ui-components.mp4",
//       },
//       {
//         title: "Navigation and State Management",
//         description: "Implement navigation and manage state in your React Native apps.",
//         duration: "80 minutes",
//         videoUrl: "https://example.com/navigation-state.mp4",
//       },
//     ],
//   },
// ]

// // Sample users data
// const users = [
//   {
//     username: "admin",
//     email: "admin@example.com",
//     firebaseUid: "admin123",
//     role: "admin",
//     profilePicture: "https://ui-avatars.com/api/?name=Admin&background=random&color=fff",
//   },
//   {
//     username: "user",
//     email: "user@example.com",
//     firebaseUid: "user123",
//     role: "user",
//     profilePicture: "https://ui-avatars.com/api/?name=User&background=random&color=fff",
//   },
// ]

// // Function to seed the database
// const seedDatabase = async () => {
//   try {
//     // Connect to MongoDB
//     await mongoose.connect(process.env.MONGODB_URI)
//     console.log("Connected to MongoDB for seeding")

//     // Clear existing data
//     await Item.deleteMany({})
//     await User.deleteMany({})
//     await Course.deleteMany({})
//     console.log("Cleared existing data")

//     // Insert products
//     await Item.insertMany(products)
//     console.log(`Inserted ${products.length} products`)

//     // Insert courses
//     await Course.insertMany(courses)
//     console.log(`Inserted ${courses.length} courses`)

//     // Insert users
//     await User.insertMany(users)
//     console.log(`Inserted ${users.length} users`)

//     console.log("Database seeding completed successfully")
//     process.exit(0)
//   } catch (error) {
//     console.error("Error seeding database:", error)
//     process.exit(1)
//   }
// }

// // Run the seeding function
// seedDatabase()

import mongoose from "mongoose"
import dotenv from "dotenv"
import Item from "../models/item.model.js"
import User from "../models/user.model.js"
import Course from "../models/course.model.js"

dotenv.config()

// Sample products data
const products = [
  {
    title: "Wireless Bluetooth Headphones",
    details:
      "High-quality sound with noise cancellation, 20-hour battery life, and comfortable over-ear design. Perfect for music lovers and professionals working from home.",
    category: "Electronics",
    price: 129.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 50,
    attributes: {
      Brand: "SoundMaster",
      Color: "Black",
      Connectivity: "Bluetooth 5.0",
      "Battery Life": "20 hours",
    },
  },
  {
    title: "Smart Fitness Watch",
    details:
      "Track your fitness goals with heart rate monitoring, step counting, sleep tracking, and smartphone notifications. Water-resistant and includes a customizable display.",
    category: "Wearables",
    price: 89.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 75,
    attributes: {
      Brand: "FitTech",
      Color: "Blue",
      "Water Resistant": "Yes",
      "Battery Life": "7 days",
    },
  },
  {
    title: "Portable Bluetooth Speaker",
    details:
      "Waterproof, dustproof speaker with 360-degree sound and 12-hour battery life. Perfect for outdoor adventures, beach trips, or poolside parties.",
    category: "Electronics",
    price: 59.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 100,
    attributes: {
      Brand: "AudioPro",
      Color: "Red",
      Waterproof: "IPX7",
      "Battery Life": "12 hours",
    },
  },
  {
    title: "Organic Cotton T-Shirt",
    details:
      "Soft, breathable 100% organic cotton t-shirt. Ethically sourced and environmentally friendly. Available in multiple sizes and colors for a comfortable, casual look.",
    category: "Clothing",
    price: 24.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 200,
    attributes: {
      Material: "Organic Cotton",
      Sizes: "S, M, L, XL",
      Care: "Machine wash cold",
    },
  },
  {
    title: "Professional Chef Knife",
    details:
      "High-carbon stainless steel 8-inch chef knife with ergonomic handle. Perfect for professional and home kitchens. Precision-forged for durability and sharpness.",
    category: "Kitchen",
    price: 79.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1593618998160-e34014e67546?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 30,
    attributes: {
      Material: "High-carbon stainless steel",
      Length: "8 inches",
      "Dishwasher Safe": "No",
    },
  },
  {
    title: "Leather Wallet",
    details:
      "Genuine leather wallet with multiple card slots, ID window, and bill compartment. Slim design fits comfortably in pocket. Available in brown and black.",
    category: "Accessories",
    price: 34.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 85,
    attributes: {
      Material: "Genuine Leather",
      Color: "Brown",
      "Card Slots": "8",
    },
  },
  {
    title: "Stainless Steel Water Bottle",
    details:
      "Double-walled insulated water bottle keeps drinks cold for 24 hours or hot for 12 hours. BPA-free and eco-friendly. Perfect for hiking, gym, or everyday use.",
    category: "Kitchen",
    price: 29.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 120,
    attributes: {
      Material: "Stainless Steel",
      Capacity: "24 oz",
      Insulated: "Yes",
    },
  },
  {
    title: "Yoga Mat",
    details:
      "Non-slip, eco-friendly yoga mat with alignment lines. Perfect for yoga, pilates, and floor exercises. Thick padding for comfort and joint protection.",
    category: "Fitness",
    price: 42.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 60,
    attributes: {
      Material: "TPE Foam",
      Thickness: "6mm",
      Dimensions: '72" x 24"',
    },
  },
  {
    title: "Mechanical Keyboard",
    details:
      "Mechanical gaming keyboard with RGB backlighting, programmable keys, and anti-ghosting technology. Designed for gamers and professionals who need precision and speed.",
    category: "Electronics",
    price: 89.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 45,
    attributes: {
      "Key Type": "Mechanical",
      Backlight: "RGB",
      Connection: "USB-C",
      Switches: "Blue",
    },
  },
  {
    title: "Cotton Blend Hoodie",
    details:
      "Comfortable cotton blend hoodie with kangaroo pocket and adjustable drawstring hood. Perfect for casual wear or light workouts. Available in multiple colors.",
    category: "Clothing",
    price: 39.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 150,
    attributes: {
      Material: "80% Cotton, 20% Polyester",
      Sizes: "S, M, L, XL, XXL",
      Care: "Machine wash cold, tumble dry low",
    },
  },
  {
    title: "Smart Home Security Camera",
    details:
      "Wireless security camera with 1080p HD video, night vision, and motion detection. Monitor your home from anywhere with the mobile app. Easy setup with no wiring required.",
    category: "Electronics",
    price: 99.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 35,
    attributes: {
      Resolution: "1080p",
      "Night Vision": "Yes",
      "Motion Detection": "Yes",
    },
  },
  // Additional products
  {
    title: "Ceramic Coffee Mug Set",
    details:
      "Set of 4 ceramic coffee mugs with modern design. Microwave and dishwasher safe. Perfect for your morning coffee or afternoon tea.",
    category: "Kitchen",
    price: 24.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 75,
    attributes: {
      Material: "Ceramic",
      Capacity: "12 oz",
      "Dishwasher Safe": "Yes",
      "Microwave Safe": "Yes",
    },
  },
  {
    title: "Wireless Gaming Mouse",
    details:
      "High-precision wireless gaming mouse with adjustable DPI, programmable buttons, and RGB lighting. Ultra-fast response time and ergonomic design for comfortable gaming sessions.",
    category: "Electronics",
    price: 49.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 60,
    attributes: {
      DPI: "Up to 16,000",
      Buttons: "7 programmable",
      "Battery Life": "40 hours",
      RGB: "Yes",
    },
  },
  {
    title: "Bamboo Cutting Board Set",
    details:
      "Set of 3 bamboo cutting boards in different sizes. Eco-friendly, durable, and knife-friendly. Perfect for food prep and serving.",
    category: "Kitchen",
    price: 34.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 40,
    attributes: {
      Material: "Bamboo",
      Sizes: "Small, Medium, Large",
      Care: "Hand wash only",
    },
  },
  {
    title: "Leather Crossbody Bag",
    details:
      "Genuine leather crossbody bag with adjustable strap and multiple compartments. Stylish and functional for everyday use.",
    category: "Accessories",
    price: 59.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 25,
    attributes: {
      Material: "Genuine Leather",
      Color: "Brown",
      Dimensions: '9" x 7" x 3"',
      Pockets: "3 internal, 1 external",
    },
  },
  {
    title: "Adjustable Dumbbell Set",
    details:
      "Space-saving adjustable dumbbell set that replaces multiple dumbbells. Weight range from 5 to 52.5 lbs per dumbbell. Perfect for home gyms.",
    category: "Fitness",
    price: 299.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 30,
    attributes: {
      Material: "Steel, Plastic",
      "Weight Range": "5-52.5 lbs",
      Adjustable: "Yes",
    },
  },
  {
    title: "Outdoor Camping Tent",
    details:
      "Waterproof and spacious camping tent for 4 people. Easy setup and durable construction for outdoor adventures.",
    category: "Sports",
    price: 149.99,
    available: true,
    imageUrl:
      "https://images.unsplash.com/photo-1532274402911-5a369e19d269?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stock: 20,
    attributes: {
      Capacity: "4 Person",
      Waterproof: "Yes",
      Material: "Polyester",
    },
  },
]

// Sample courses data
const courses = [
  {
    title: "Web Development Bootcamp",
    description:
      "A comprehensive course covering HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and learn modern web development practices.",
    category: "Programming",
    price: 99.99,
    instructor: "John Smith",
    duration: "12 weeks",
    level: "Beginner",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.8,
    enrolledStudents: 1250,
    featured: true,
    lessons: [
      {
        title: "Introduction to HTML",
        description: "Learn the basics of HTML and how to structure web pages.",
        duration: "45 minutes",
        videoUrl: "https://example.com/html-intro.mp4",
      },
      {
        title: "CSS Fundamentals",
        description: "Style your web pages with CSS and learn about selectors, properties, and values.",
        duration: "60 minutes",
        videoUrl: "https://example.com/css-fundamentals.mp4",
      },
      {
        title: "JavaScript Basics",
        description: "Introduction to JavaScript programming language and its core concepts.",
        duration: "75 minutes",
        videoUrl: "https://example.com/js-basics.mp4",
      },
    ],
  },
  {
    title: "Data Science Fundamentals",
    description:
      "Learn the basics of data science, including statistics, Python programming, data visualization, and machine learning algorithms.",
    category: "Data Science",
    price: 129.99,
    instructor: "Sarah Johnson",
    duration: "10 weeks",
    level: "Intermediate",
    imageUrl:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.7,
    enrolledStudents: 980,
    featured: true,
    lessons: [
      {
        title: "Introduction to Python",
        description: "Learn the basics of Python programming language for data science.",
        duration: "60 minutes",
        videoUrl: "https://example.com/python-intro.mp4",
      },
      {
        title: "Data Visualization",
        description: "Create compelling visualizations with matplotlib and seaborn.",
        duration: "55 minutes",
        videoUrl: "https://example.com/data-viz.mp4",
      },
      {
        title: "Machine Learning Basics",
        description: "Introduction to machine learning algorithms and their applications.",
        duration: "90 minutes",
        videoUrl: "https://example.com/ml-basics.mp4",
      },
    ],
  },
  {
    title: "Digital Marketing Masterclass",
    description:
      "Master digital marketing strategies including SEO, social media marketing, email campaigns, and analytics to grow your business online.",
    category: "Marketing",
    price: 79.99,
    instructor: "Michael Brown",
    duration: "8 weeks",
    level: "All Levels",
    imageUrl:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.5,
    enrolledStudents: 1560,
    featured: false,
    lessons: [
      {
        title: "SEO Fundamentals",
        description: "Learn how to optimize your website for search engines.",
        duration: "50 minutes",
        videoUrl: "https://example.com/seo-fundamentals.mp4",
      },
      {
        title: "Social Media Marketing",
        description: "Strategies for effective marketing on various social media platforms.",
        duration: "65 minutes",
        videoUrl: "https://example.com/social-media.mp4",
      },
      {
        title: "Email Marketing",
        description: "Create effective email campaigns to engage your audience.",
        duration: "45 minutes",
        videoUrl: "https://example.com/email-marketing.mp4",
      },
    ],
  },
  {
    title: "Photography Essentials",
    description:
      "Learn the fundamentals of photography, including camera settings, composition, lighting, and post-processing techniques.",
    category: "Photography",
    price: 69.99,
    instructor: "Emily Chen",
    duration: "6 weeks",
    level: "Beginner",
    imageUrl:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.9,
    enrolledStudents: 720,
    featured: true,
    lessons: [
      {
        title: "Understanding Your Camera",
        description: "Learn about camera settings, modes, and functions.",
        duration: "40 minutes",
        videoUrl: "https://example.com/camera-basics.mp4",
      },
      {
        title: "Composition Techniques",
        description: "Master the art of composition to create compelling photographs.",
        duration: "55 minutes",
        videoUrl: "https://example.com/composition.mp4",
      },
      {
        title: "Lighting Fundamentals",
        description: "Learn how to work with natural and artificial light.",
        duration: "60 minutes",
        videoUrl: "https://example.com/lighting.mp4",
      },
    ],
  },
  {
    title: "Mobile App Development with React Native",
    description:
      "Build cross-platform mobile applications using React Native. Learn to create iOS and Android apps with a single codebase.",
    category: "Programming",
    price: 119.99,
    instructor: "David Wilson",
    duration: "10 weeks",
    level: "Intermediate",
    imageUrl:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    rating: 4.6,
    enrolledStudents: 850,
    featured: false,
    lessons: [
      {
        title: "React Native Basics",
        description: "Introduction to React Native and its core concepts.",
        duration: "70 minutes",
        videoUrl: "https://example.com/react-native-basics.mp4",
      },
      {
        title: "Building UI Components",
        description: "Create reusable UI components for your mobile apps.",
        duration: "65 minutes",
        videoUrl: "https://example.com/ui-components.mp4",
      },
      {
        title: "Navigation and State Management",
        description: "Implement navigation and manage state in your React Native apps.",
        duration: "80 minutes",
        videoUrl: "https://example.com/navigation-state.mp4",
      },
    ],
  },
]

// Sample users data
const users = [
  {
    username: "admin",
    email: "admin@example.com",
    firebaseUid: "admin123",
    role: "admin",
    profilePicture: "https://ui-avatars.com/api/?name=Admin&background=random&color=fff",
  },
  {
    username: "user",
    email: "user@example.com",
    firebaseUid: "user123",
    role: "user",
    profilePicture: "https://ui-avatars.com/api/?name=User&background=random&color=fff",
  },
]

// Function to seed the database
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log("Connected to MongoDB for seeding")

    // Clear existing data
    await Item.deleteMany({})
    await User.deleteMany({})
    await Course.deleteMany({})
    console.log("Cleared existing data")

    // Insert products
    await Item.insertMany(products)
    console.log(`Inserted ${products.length} products`)

    // Insert courses
    await Course.insertMany(courses)
    console.log(`Inserted ${courses.length} courses`)

    // Insert users
    await User.insertMany(users)
    console.log(`Inserted ${users.length} users`)

    console.log("Database seeding completed successfully")
    process.exit(0)
  } catch (error) {
    console.error("Error seeding database:", error)
    process.exit(1)
  }
}

// Run the seeding function
seedDatabase()