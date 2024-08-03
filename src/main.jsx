import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './api/routes'; // Import the router from the routes file
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

);
