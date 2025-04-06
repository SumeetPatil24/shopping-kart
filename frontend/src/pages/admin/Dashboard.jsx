// // frontend/src/pages/admin/Dashboard.jsx
// import { useState, useEffect } from "react";
// import { FaBox, FaChartLine } from "react-icons/fa";
// import api from "../../services/api";

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     availableProducts: 0,
//     outOfStockProducts: 0,
//     categories: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const [switchingRole, setSwitchingRole] = useState(false);

//   const handleSwitchRole = async () => {
//     try {
//       setSwitchingRole(true);
//       // This is just for demo purposes - in a real app, you'd have proper role management
//       await api.post("/api/auth/switch-role");
//       window.location.reload(); // Reload to update auth state
//     } catch (error) {
//       console.error("Error switching role:", error);
//       alert("Failed to switch role");
//     } finally {
//       setSwitchingRole(false);
//     }
//   };

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get("/api/items");
//         const products = response.data.data;

//         // Calculate stats
//         const availableProducts = products.filter((p) => p.available).length;
//         const outOfStockProducts = products.length - availableProducts;

//         // Get unique categories
//         const categories = [...new Set(products.map((p) => p.category))];

//         setStats({
//           totalProducts: products.length,
//           availableProducts,
//           outOfStockProducts,
//           categories,
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   // Sample data for the charts
//   const recentOrders = [
//     {
//       id: "ORD-001",
//       customer: "John Doe",
//       date: "2023-08-15",
//       total: 125.99,
//       status: "Completed",
//     },
//     {
//       id: "ORD-002",
//       customer: "Jane Smith",
//       date: "2023-08-14",
//       total: 89.5,
//       status: "Processing",
//     },
//     {
//       id: "ORD-003",
//       customer: "Bob Johnson",
//       date: "2023-08-13",
//       total: 210.75,
//       status: "Completed",
//     },
//     {
//       id: "ORD-004",
//       customer: "Alice Brown",
//       date: "2023-08-12",
//       total: 45.25,
//       status: "Shipped",
//     },
//     {
//       id: "ORD-005",
//       customer: "Charlie Wilson",
//       date: "2023-08-11",
//       total: 150.0,
//       status: "Completed",
//     },
//   ];

//   return (
//     <div>
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-blue-100 text-blue-500 mr-4">
//               <FaBox size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Products</p>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {loading ? "..." : stats.totalProducts}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-green-100 text-green-500 mr-4">
//               <FaBox size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Available Products</p>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {loading ? "..." : stats.availableProducts}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-red-100 text-red-500 mr-4">
//               <FaBox size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Out of Stock</p>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {loading ? "..." : stats.outOfStockProducts}
//               </h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-purple-100 text-purple-500 mr-4">
//               <FaChartLine size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Categories</p>
//               <h3 className="text-2xl font-bold text-gray-800">
//                 {loading ? "..." : stats.categories.length}
//               </h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//         <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Customer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Date
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Total
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentOrders.map((order) => (
//                 <tr key={order.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {order.id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {order.customer}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {order.date}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     ${order.total.toFixed(2)}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                       ${
//                         order.status === "Completed"
//                           ? "bg-green-100 text-green-800"
//                           : order.status === "Processing"
//                           ? "bg-yellow-100 text-yellow-800"
//                           : "bg-blue-100 text-blue-800"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Category Distribution */}
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Product Categories
//         </h2>
//         {loading ? (
//           <p>Loading categories...</p>
//         ) : (
//           <div className="space-y-4">
//             {stats.categories.map((category, index) => (
//               <div key={index} className="flex items-center">
//                 <div className="w-32 text-sm text-gray-600">{category}</div>
//                 <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gray-800 rounded-full"
//                     style={{ width: `${Math.random() * 100}%` }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <div className="bg-white rounded-lg shadow-md p-6 mt-8">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">
//           Developer Tools
//         </h2>
//         <div className="border-t border-gray-200 pt-4">
//           <p className="text-gray-600 mb-4">
//             For testing purposes, you can temporarily switch between admin and
//             user roles.
//           </p>
//           <button
//             onClick={handleSwitchRole}
//             disabled={switchingRole}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             {switchingRole ? "Switching..." : "Switch Role (Admin ↔ User)"}
//           </button>
//           <p className="text-sm text-gray-500 mt-2">
//             Note: This is for demonstration purposes only. In a production
//             environment, proper role management would be implemented.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// frontend/src/pages/admin/Dashboard.jsx
// import { useState, useEffect } from "react";
// import { FaBox, FaChartLine, FaUsers, FaShoppingCart, FaMoneyBillWave, FaExclamationTriangle } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import api from "../../services/api";
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
// import { Line, Bar, Doughnut } from 'react-chartjs-2';

// // Register ChartJS components
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement);

// const Dashboard = () => {
//   const [stats, setStats] = useState({
//     totalProducts: 0,
//     availableProducts: 0,
//     outOfStockProducts: 0,
//     categories: [],
//     totalUsers: 0,
//     totalOrders: 0,
//     revenue: 0,
//   });
//   const [loading, setLoading] = useState(true);
//   const [switchingRole, setSwitchingRole] = useState(false);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         setLoading(true);
//         const response = await api.get("/api/items");
//         const products = response.data.data;

//         // Calculate stats
//         const availableProducts = products.filter((p) => p.available).length;
//         const outOfStockProducts = products.length - availableProducts;

//         // Get unique categories
//         const categories = [...new Set(products.map((p) => p.category))];

//         // Simulate other stats for demo
//         const totalUsers = 125;
//         const totalOrders = 342;
//         const revenue = 15789.50;

//         setStats({
//           totalProducts: products.length,
//           availableProducts,
//           outOfStockProducts,
//           categories,
//           totalUsers,
//           totalOrders,
//           revenue,
//         });
//       } catch (error) {
//         console.error("Error fetching stats:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   const handleSwitchRole = async () => {
//     try {
//       setSwitchingRole(true);
//       // This is just for demo purposes - in a real app, you'd have proper role management
//       await api.post('/api/auth/switch-role');
//       window.location.reload(); // Reload to update auth state
//     } catch (error) {
//       console.error('Error switching role:', error);
//       alert('Failed to switch role');
//     } finally {
//       setSwitchingRole(false);
//     }
//   };

//   // Sample data for the charts
//   const recentOrders = [
//     { id: "ORD-001", customer: "John Doe", date: "2023-08-15", total: 125.99, status: "Completed" },
//     { id: "ORD-002", customer: "Jane Smith", date: "2023-08-14", total: 89.5, status: "Processing" },
//     { id: "ORD-003", customer: "Bob Johnson", date: "2023-08-13", total: 210.75, status: "Completed" },
//     { id: "ORD-004", customer: "Alice Brown", date: "2023-08-12", total: 45.25, status: "Shipped" },
//     { id: "ORD-005", customer: "Charlie Wilson", date: "2023-08-11", total: 150.0, status: "Completed" },
//   ];

//   // Sales data for line chart
//   const salesData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//       {
//         label: 'Monthly Sales',
//         data: [1200, 1900, 1500, 2500, 2200, 3000, 3500, 3200, 4000, 3800, 4200, 4500],
//         borderColor: 'rgb(59, 130, 246)',
//         backgroundColor: 'rgba(59, 130, 246, 0.5)',
//         tension: 0.3,
//       },
//     ],
//   };

//   // Category data for doughnut chart
//   const categoryData = {
//     labels: stats.categories,
//     datasets: [
//       {
//         label: 'Products by Category',
//         data: stats.categories.map(() => Math.floor(Math.random() * 50) + 10),
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.7)',
//           'rgba(54, 162, 235, 0.7)',
//           'rgba(255, 206, 86, 0.7)',
//           'rgba(75, 192, 192, 0.7)',
//           'rgba(153, 102, 255, 0.7)',
//           'rgba(255, 159, 64, 0.7)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   // Traffic sources for bar chart
//   const trafficData = {
//     labels: ['Direct', 'Social Media', 'Email', 'Referral', 'Organic Search'],
//     datasets: [
//       {
//         label: 'Traffic Sources',
//         data: [25, 40, 15, 10, 30],
//         backgroundColor: 'rgba(59, 130, 246, 0.7)',
//       },
//     ],
//   };

//   return (
//     <div className="animate-fadeIn">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">Admin Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//         <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
//               <FaBox size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Products</p>
//               <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.totalProducts}</h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
//               <FaUsers size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Users</p>
//               <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.totalUsers}</h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-yellow-100 text-yellow-600 mr-4">
//               <FaShoppingCart size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Orders</p>
//               <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.totalOrders}</h3>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow-md p-6 transform transition duration-300 hover:shadow-lg hover:-translate-y-1">
//           <div className="flex items-center">
//             <div className="p-3 rounded-full bg-purple-100 text-purple-600 mr-4">
//               <FaMoneyBillWave size={24} />
//             </div>
//             <div>
//               <p className="text-gray-500 text-sm">Total Revenue</p>
//               <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : `$${stats.revenue.toFixed(2)}`}</h3>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Charts Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Sales Chart */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Sales Overview</h2>
//           <div className="h-80">
//             <Line 
//               data={salesData} 
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   title: {
//                     display: true,
//                     text: 'Monthly Sales Performance'
//                   }
//                 }
//               }} 
//             />
//           </div>
//         </div>

//         {/* Category Distribution */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Categories</h2>
//           <div className="h-80">
//             <Doughnut 
//               data={categoryData} 
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: {
//                     position: 'right',
//                   },
//                   title: {
//                     display: true,
//                     text: 'Products by Category'
//                   }
//                 }
//               }} 
//             />
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
//         {/* Traffic Sources */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4">Traffic Sources</h2>
//           <div className="h-80">
//             <Bar 
//               data={trafficData} 
//               options={{
//                 responsive: true,
//                 maintainAspectRatio: false,
//                 plugins: {
//                   legend: {
//                     position: 'top',
//                   },
//                   title: {
//                     display: true,
//                     text: 'Website Traffic Sources'
//                   }
//                 }
//               }} 
//             />
//           </div>
//         </div>

//         {/* Low Stock Alert */}
//         <div className="bg-white rounded-lg shadow-md p-6">
//           <h2 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//             <FaExclamationTriangle className="text-yellow-500 mr-2" /> Low Stock Alert
//           </h2>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Product
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Category
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Stock
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Status
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">Wireless Headphones</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">Electronics</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">3</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
//                       Critical
//                     </span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">Smart Watch</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">Wearables</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">5</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       Low
//                     </span>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">Leather Wallet</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">Accessories</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">7</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
//                       Low
//                     </span>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="mt-4">
//             <Link 
//               to="/admin/products" 
//               className="text-blue-600 hover:text-blue-800 text-sm font-medium"
//             >
//               View all inventory →
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
//         <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
//           <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Customer
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Total
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {recentOrders.map((order) => (
//                 <tr key={order.id} className="hover:bg-gray-50">
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{order.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
//                       ${
//                         order.status === "Completed"
//                           ? "bg-green-100 text-green-800"
//                           : order.status === "Processing"
//                             ? "bg-yellow-100 text-yellow-800"
//                             : "bg-blue-100 text-blue-800"
//                       }`}
//                     >
//                       {order.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
//                     <a href="#" className="text-blue-600 hover:text-blue-900">View</a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//         <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
//           <Link to="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
//             View all orders →
//           </Link>
//         </div>
//       </div>

//       {/* Role Switching (for demo) */}
//       <div className="bg-white rounded-lg shadow-md p-6 mt-8">
//         <h2 className="text-lg font-semibold text-gray-800 mb-4">Developer Tools</h2>
//         <div className="border-t border-gray-200 pt-4">
//           <p className="text-gray-600 mb-4">
//             For testing purposes, you can temporarily switch between admin and user roles.
//           </p>
//           <button
//             onClick={handleSwitchRole}
//             disabled={switchingRole}
//             className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300"
//           >
//             {switchingRole ? 'Switching...' : 'Switch Role (Admin ↔ User)'}
//           </button>
//           <p className="text-sm text-gray-500 mt-2">
//             Note: This is for demonstration purposes only. In a production environment, proper role management would be implemented.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

"use client"

import { useState, useEffect } from "react"
import { FaBox, FaUsers, FaExclamationTriangle, FaEye, FaEdit, FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
import api from "../../services/api"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Line, Doughnut } from "react-chartjs-2"
import { useAuth } from "../../context/AuthContext"

// Register ChartJS components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend)

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    availableProducts: 0,
    outOfStockProducts: 0,
    categories: [],
    categoryStats: {},
  })
  const [loading, setLoading] = useState(true)
  const [lowStockProducts, setLowStockProducts] = useState([])
  const [recentProducts, setRecentProducts] = useState([])
  const [switchingRole, setSwitchingRole] = useState(false)
  const { user } = useAuth()

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true)
        const response = await api.get("/api/items")
        const products = response.data.data

        // Calculate stats
        const availableProducts = products.filter((p) => p.available).length
        const outOfStockProducts = products.length - availableProducts

        // Get unique categories and count products in each
        const categories = [...new Set(products.map((p) => p.category))]
        const categoryStats = {}

        categories.forEach((category) => {
          categoryStats[category] = products.filter((p) => p.category === category).length
        })

        // Find low stock products (less than 10 items)
        const lowStock = products
          .filter((p) => p.stock < 10 && p.available)
          .sort((a, b) => a.stock - b.stock)
          .slice(0, 5)

        // Get recently added products
        const recent = [...products].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5)

        setStats({
          totalProducts: products.length,
          availableProducts,
          outOfStockProducts,
          categories,
          categoryStats,
        })

        setLowStockProducts(lowStock)
        setRecentProducts(recent)
      } catch (error) {
        console.error("Error fetching stats:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchStats()
  }, [])

  const handleSwitchRole = async () => {
    try {
      setSwitchingRole(true)
      // For demo purposes - in a real app, you'd have proper role management
      await api.post("/api/auth/switch-role")
      window.location.reload() // Reload to update auth state
    } catch (error) {
      console.error("Error switching role:", error)
      alert("Failed to switch role")
    } finally {
      setSwitchingRole(false)
    }
  }

  // Sample data for the charts
  const salesData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Sales",
        data: [3500, 4200, 3800, 5100, 4800, 5600, 6200],
        borderColor: "rgba(79, 70, 229, 1)",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.3,
        fill: true,
      },
    ],
  }

  const categoryData = {
    labels: Object.keys(stats.categoryStats),
    datasets: [
      {
        label: "Products by Category",
        data: Object.values(stats.categoryStats),
        backgroundColor: [
          "rgba(79, 70, 229, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(16, 185, 129, 0.7)",
          "rgba(239, 68, 68, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(168, 85, 247, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  }

  const ordersData = {
    labels: ["Completed", "Processing", "Shipped", "Cancelled"],
    datasets: [
      {
        data: [63, 15, 12, 10],
        backgroundColor: [
          "rgba(16, 185, 129, 0.7)",
          "rgba(245, 158, 11, 0.7)",
          "rgba(59, 130, 246, 0.7)",
          "rgba(239, 68, 68, 0.7)",
        ],
        borderWidth: 1,
      },
    ],
  }

  // Sample data for the recent orders
  const recentOrders = [
    { id: "ORD-001", customer: "John Doe", date: "2023-08-15", total: 125.99, status: "Completed" },
    { id: "ORD-002", customer: "Jane Smith", date: "2023-08-14", total: 89.5, status: "Processing" },
    { id: "ORD-003", customer: "Bob Johnson", date: "2023-08-13", total: 210.75, status: "Completed" },
    { id: "ORD-004", customer: "Alice Brown", date: "2023-08-12", total: 45.25, status: "Shipped" },
    { id: "ORD-005", customer: "Charlie Wilson", date: "2023-08-11", total: 150.0, status: "Completed" },
  ]

  return (
    <div className="mt-24 px-4 py-6 animate-fadeIn">
      <div className="flex flex-col md:flex-row md:items-center mb-8 justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-600">Welcome back, {user?.username || "Admin"}</p>
        </div>
        <div className="mt-4 md:mt-0">
          <button
            onClick={handleSwitchRole}
            disabled={switchingRole}
            className="bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition duration-300 flex items-center"
          >
            {switchingRole ? "Switching..." : "Switch Role (Admin ↔ User)"}
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-indigo-100 text-indigo-600 mr-4">
              <FaBox size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Products</p>
              <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.totalProducts}</h3>
            </div>
          </div>
          <div className="mt-4 text-sm text-indigo-600">
            <Link to="/admin/products" className="flex items-center hover:underline">
              View all products <FaAngleRight className="ml-1" />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
              <FaBox size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Available Products</p>
              <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.availableProducts}</h3>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-600">
            <span className="flex items-center">
              {((stats.availableProducts / (stats.totalProducts || 1)) * 100).toFixed(1)}% of total inventory
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-red-100 text-red-600 mr-4">
              <FaExclamationTriangle size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Out of Stock</p>
              <h3 className="text-2xl font-bold text-gray-800">{loading ? "..." : stats.outOfStockProducts}</h3>
            </div>
          </div>
          <div className="mt-4 text-sm text-red-600">
            <span className="flex items-center">
              {((stats.outOfStockProducts / (stats.totalProducts || 1)) * 100).toFixed(1)}% of total inventory
            </span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
          <div className="flex items-center">
            <div className="p-3 rounded-full bg-amber-100 text-amber-600 mr-4">
              <FaUsers size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Customers</p>
              <h3 className="text-2xl font-bold text-gray-800">254</h3>
            </div>
          </div>
          <div className="mt-4 text-sm text-amber-600">
            <span className="flex items-center">28 new this month</span>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6 col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Sales Overview</h2>
            <select className="text-sm border rounded-lg p-2">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>Last year</option>
            </select>
          </div>
          <div className="h-80">
            <Line
              data={salesData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  y: {
                    beginAtZero: true,
                    grid: {
                      color: "rgba(0, 0, 0, 0.05)",
                    },
                  },
                  x: {
                    grid: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Product Categories</h2>
          <div className="h-80">
            <Doughnut
              data={categoryData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "bottom",
                    labels: {
                      boxWidth: 12,
                      padding: 15,
                    },
                  },
                },
                cutout: "70%",
              }}
            />
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-2">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recent Orders</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Order ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.customer}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${order.total.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          order.status === "Completed"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Processing"
                              ? "bg-amber-100 text-amber-800"
                              : order.status === "Shipped"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-red-100 text-red-800"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                        <FaEye size={16} />
                      </button>
                      <button className="text-indigo-600 hover:text-indigo-900">
                        <FaEdit size={16} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-center">
            <button className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center">
              View all orders <FaAngleRight className="ml-1" />
            </button>
          </div>
        </div>

        {/* Order Status */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Status</h2>
          <div className="h-52 mb-4">
            <Doughnut
              data={ordersData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: "right",
                    labels: {
                      boxWidth: 12,
                      padding: 15,
                    },
                  },
                },
                cutout: "70%",
              }}
            />
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Completed Orders:</span>
              <span className="font-medium">63</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Orders:</span>
              <span className="font-medium">15</span>
            </div>
            <div className="flex justify-between">
              <span>Shipped Orders:</span>
              <span className="font-medium">12</span>
            </div>
            <div className="flex justify-between">
              <span>Cancelled Orders:</span>
              <span className="font-medium">10</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t">
              <span>Total Orders:</span>
              <span>100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Low Stock Products & Recent Additions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Low Stock Products */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-semibold text-gray-800">Low Stock Products</h2>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              Attention Needed
            </span>
          </div>
          {lowStockProducts.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {lowStockProducts.map((product) => (
                <div key={product._id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.title}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">No img</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
                      <p className="text-xs text-gray-500">Category: {product.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span
                      className={`px-2 py-1 rounded-md text-xs font-medium ${
                        product.stock <= 5 ? "bg-red-100 text-red-800" : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {product.stock} left in stock
                    </span>
                    <Link
                      to={`/admin/products/edit/${product._id}`}
                      className="ml-4 text-indigo-600 hover:text-indigo-900"
                    >
                      <FaEdit size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">No low stock products found.</div>
          )}
          {lowStockProducts.length > 0 && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-center">
              <Link
                to="/admin/products"
                className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
              >
                Manage inventory <FaAngleRight className="ml-1" />
              </Link>
            </div>
          )}
        </div>

        {/* Recent Products */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Recently Added Products</h2>
          </div>
          {recentProducts.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {recentProducts.map((product) => (
                <div key={product._id} className="p-4 hover:bg-gray-50 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      {product.imageUrl ? (
                        <img
                          src={product.imageUrl || "/placeholder.svg"}
                          alt={product.title}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded-md bg-gray-200 flex items-center justify-center">
                          <span className="text-xs text-gray-500">No img</span>
                        </div>
                      )}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{product.title}</h3>
                      <p className="text-xs text-gray-500">
                        ${product.price.toFixed(2)} - {product.category}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/products/${product._id}`} className="text-indigo-600 hover:text-indigo-900">
                      <FaEye size={16} />
                    </Link>
                    <Link to={`/admin/products/edit/${product._id}`} className="text-indigo-600 hover:text-indigo-900">
                      <FaEdit size={16} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">No products found.</div>
          )}
          {recentProducts.length > 0 && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex justify-center">
              <Link
                to="/admin/products/add"
                className="text-indigo-600 hover:text-indigo-900 text-sm font-medium flex items-center"
              >
                Add new product <FaAngleRight className="ml-1" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard