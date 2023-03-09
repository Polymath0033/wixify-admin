import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import Drivers, { loader as driversLoader } from "./pages/Drivers";
import Customers from "./pages/Customers";
import Root from "./pages/Root";
import Error from "./pages/Error";
import AuthLayout from "./pages/AuthLayout";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import ForgetPassword from "./pages/ForgetPassword";
import Reset from "./pages/Reset";
import Success from "./pages/Success";
import Notification from "./pages/Notification";
import Revenue from "./pages/Revenue";
function App() {
  // const routeError = useRouteError();

  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      // errorElement: (
      //   <div>
      //     <h1>There is error</h1>There is error{routeError}
      //   </div>
      // ),
      children: [
        { path: "", element: <Login /> },
        {
          path: "/create-an-account",
          element: <SignUp />,
        },
        { path: "/reset-password", element: <ResetPassword /> },
        { path: "/forget-password", element: <ForgetPassword /> },
        { path: "/reset", element: <Reset /> },
        { path: "/success", element: <Success /> },
      ],
    },
    {
      path: "",
      element: <Root />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
          errorElement: <Error />,
        },
        { path: "/notifications", element: <Notification /> },
        {
          path: "/orders",
          element: <Orders />,
          loader: async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
            }
            const data = await response.json();
            return data;
          },
        },
        {
          path: "drivers",
          element: <Drivers />,
          loader: driversLoader,
        },
        {
          path: "customers-feedback",
          element: <Customers />,
        },
        { path: "revenue", element: <Revenue /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
