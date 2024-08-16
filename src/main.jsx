import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import store from './app/store'
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/root.jsx'

import Cart from './routes/cart.jsx';
import AddCategory from './routes/addCategory.jsx';
import AddProduct,{loader as addProductLoader} from './routes/addProduct.jsx';
import Products from './routes/Products.jsx';
import Login from './routes/Login.jsx';
import Profile, {loader as profileLoader} from './routes/profile.jsx';
import Signup from './routes/signup.jsx';
import Logout from './routes/logout.jsx';
import Admin from './routes/admin.jsx';
import ViewAll from './routes/view.jsx';
import Home from './routes/home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/',
        element: <ViewAll />
      },
      {
        path:'/cart',
        element: <Cart/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/logout',
        element: <Logout/>
      },
      {
        path: '/signup',
        element: <Signup/>
      },
      {
        path: '/admin',
        element: <Admin/>
      },
      
      {
        path: '/add-category',
        element: <AddCategory/>
      },
      {
        path: '/add-product',
        element: <AddProduct/>,
        loader: addProductLoader
      },
      {
        path: '/products',
        element: <Products/>,
        
      },
      {
        path: '/profile',
        element: <Profile/>,
        loader: profileLoader
      },
     
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Provider store={store}>
     <RouterProvider router={router} />
     </Provider>
   
  </StrictMode>,
)
