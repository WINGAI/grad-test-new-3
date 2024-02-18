import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Routes.jsx';
import Root from '../src/layout/Root.jsx'; // Import the Root component containing the loading spinner

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {Children}
    </RouterProvider>
  </React.StrictMode>,
);
