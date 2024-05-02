import React from 'react'
import { RouterProvider } from "react-router-dom";

import ReactDOM from 'react-dom/client'
import './index.css'
import myCreatedRoute from './Route/Route';
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={myCreatedRoute}>

      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
