import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ShopCategory from './pages/ShopCategory/ShopCategory.jsx'
import Product from './pages/Product/Product.jsx'
import Cart from './pages/Cart/Cart.jsx'
import App from './App.jsx'
import Home from './pages/Home/Home.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"categories/electronics",
        element:<ShopCategory/>
      },
      {
        path:"categories/jewelery",
        element:<ShopCategory/>
      },
      {
        path:"categories/men's clothing",
        element:<ShopCategory/>
      },
      {
        path:"categories/women's clothing",
        element:<ShopCategory/>
      },
      {
        path:"products/:id",
        element:<Product/>
      },
      {
        path:"cart",
        element:<Cart/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
