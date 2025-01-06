import EmployeeList from "../pages/EmployeeList";
import EmployeeForm from "../pages/EmployeeForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const publicRoutes = [
    {
        path: '/',
        element: <EmployeeList />
    },
    {
        path: '/employee-form',
        element: <EmployeeForm />
    }
]

const RouteProvider = () => (
  <RouterProvider
    router={createBrowserRouter([...publicRoutes])}
  />
);

export default RouteProvider;