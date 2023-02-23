import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from 'components/App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ```React Transition Group```
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <AppRouter />,
//     children: routes.map((route) => ({
//       index: route.path === '/',
//       path: route.path === '/' ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ])


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={router}/>
// );




