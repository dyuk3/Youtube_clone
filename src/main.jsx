import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body.jsx';
import MainContainer from './components/MainContainer.jsx';
import WatchPage from './components/WatchPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContainer />,
        // children: [{
        //   path: '/',
        //   element: < />
        // },
        // {
        //   path: '/watch',
        //   element: <WatchPage />
        // }
        // ]
      },
      {
        path: '/watch',
        element: <WatchPage />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>,
);
