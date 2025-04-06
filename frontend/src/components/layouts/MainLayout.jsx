// // frontend/src/components/layouts/MainLayout.jsx
// import { Outlet } from 'react-router-dom';
// import Navbar from '../common/Navbar';
// import Footer from '../common/Footer';

// const MainLayout = () => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Navbar />
//       <main className="flex-grow container mx-auto px-4 py-8">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default MainLayout;


// frontend/src/components/layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;