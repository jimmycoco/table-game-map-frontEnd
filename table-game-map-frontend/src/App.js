
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <HomePage /> }
    ]
  },
  {
    path: '/login',
    element: <RootLayout />,
    children: [
      { path: '/login', element: <Login /> }
    ]
  },
  {
    path: '/register',
    element: <RootLayout />,
    children: [
      { path: '/register', element: <Register /> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;