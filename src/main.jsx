import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CreateProduct from './components/dashboard/product/CreateProduct.jsx';
import CreateCategory from './components/dashboard/category/CreateCategory.jsx';
import DashboardLayout from './components/dashboard/DashboardLayout.jsx';
import { DashboardHome } from './components/dashboard/home/dashboardHome.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "/createproduct", element: <CreateProduct /> },
      { path: "/createcategory", element: <CreateCategory /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,

)
