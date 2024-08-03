import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import App from '../App';
import Login from '../../Login';
import Register from '../Register';
import Home from '../Home';
// Create the router configuration
export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        // Redirect to login page
        loader: () => {
            window.location.replace('login');
            return null;
        }
    },
    {
        path: 'login',
        element: <Login />
    },
    {
        path: 'register',
        element: <Register />
    },
    {
        path: 'home',
        element: <Home />
    }
]);
