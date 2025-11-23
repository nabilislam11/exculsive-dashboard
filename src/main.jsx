import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CreateProduct from './components/dashboard/product/CreateProduct.jsx';
import CreateCategory from './components/dashboard/category/CreateCategory.jsx';
import DashboardLayout from './components/dashboard/DashboardLayout.jsx';
import DashboardHome from './components/dashboard/home/DashboardHome.jsx';
import AllCategory from './components/dashboard/category/AllCategory.jsx';
import UpdateCategory from './components/dashboard/category/UpdateCategory.jsx';
import CreateSubCategory from './components/dashboard/subcategory/CreateSubCategory.jsx';
import AllSubCategory from './components/dashboard/subcategory/AllSubCategory.jsx';
import UpdateSubcategory from './components/dashboard/subcategory/UpdateSubcategory.jsx';
import AllProduct from './components/dashboard/product/AllProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "/createproduct", element: <CreateProduct /> },
      { path: "/get-allproduct", element: < AllProduct /> },
      { path: "/createcategory", element: <CreateCategory /> },
      { path: "/allcategory", element: <AllCategory /> },
      { path: "/update-category/:id", element: <UpdateCategory /> },
      { path: "/create-subcategory", element: <CreateSubCategory /> },
      { path: "/get-allsubcategory", element: <AllSubCategory /> },
      { path: "/update-subcategory/:id", element: <UpdateSubcategory /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)
