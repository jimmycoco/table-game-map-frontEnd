
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import RootLayout from './pages/Root';
import HomePage from './pages/Home';
import MapPage from './pages/Map'

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
  },
  {
    path: '/map',
    element: <RootLayout />,
    children: [
      { path: '/map', element: <MapPage /> }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;