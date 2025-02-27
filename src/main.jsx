import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../components/Home';
import Route from '../Routes/Route';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Blog from '../components/Blog';
import Projects from '../components/Projects';
import Pages from '../components/Pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route></Route>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/services',
        element: <Services></Services>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/pricing',
        element: <Pages></Pages>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
