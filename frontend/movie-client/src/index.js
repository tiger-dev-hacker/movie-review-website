import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <App />, 
    errorElement: <NotFound/>
  }, 
  {
    path: '/trailer/:movieId',
    element: <Trailer/>
  }, 
  {
    path: '/reviews/:movieId', 
    element: <Reviews/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

      </Routes>
    </BrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);


