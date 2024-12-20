import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'

import './index.css'

import App from './App.jsx'

import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Contact from './routes/Contact.jsx'
import Product from './routes/Product.jsx'
import Error from './routes/Error.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <App />,
  errorElement: <Error />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/About',
      element: <About />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '/products/:id',
      element: <Product />
    }
  ]
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
