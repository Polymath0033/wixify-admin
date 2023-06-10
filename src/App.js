import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
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
import Profile, { loader as profileLoader } from "./pages/Profile";
import Chat from "./components/Chat";
import { useCallback, useEffect } from "react";
import { https } from "./lib/http";
import io from "socket.io-client";
import { useState } from "react";
import ResetPin from "./pages/ResetPin";
const socket = io.connect("http://localhost:3001");
function App() {
  const token = localStorage.getItem("token");
  const [room, setRoom] = useState("");
  const fetchData = useCallback(async () => {
    const data = await https("withdrawal/approve", token, "users's data");
    console.log(data);
  }, [token]);
  useEffect(() => {
    fetchData();
    //return () => {};
  }, [fetchData]);

  const getToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return redirect("/");
    }
    return null;
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthLayout />,
      errorElement: <Error />,
      children: [
        { path: "", element: <Login /> },
        {
          path: "/create-an-account",
          element: <SignUp />,
        },
        { path: "/reset-password", element: <ResetPassword /> },
        { path: "/forget-password", element: <ForgetPassword /> },
        { path: "/reset", element: <Reset /> },
        { path: "/reset-pin", element: <ResetPin /> },
        { path: "/success", element: <Success /> },
      ],
    },
    {
      path: "",
      element: <Root />,
      loader: getToken,
      errorElement: <Error />,
      children: [
        {
          path: "/admin",
          element: <Dashboard />,
          errorElement: <p>Error</p>,
        },
        { path: "/notifications", element: <Notification /> },
        {
          path: "orders",
          element: <Orders />,

          loader: async () => {
            const response = await fetch(
              "https://jsonplaceholder.typicode.com/posts"
            );
            if (!response.ok) {
              throw new Error("Failed to fetch order's data");
            }
            const data = await response.json();
            return data;
          },
        },
        {
          path: "drivers",
          element: <Drivers setRoom={setRoom} socket={socket} />,
          loader: driversLoader,
        },
        {
          path: "/drivers/:chat/chat",
          element: <Chat socket={socket} />,
        },
        {
          path: "/drivers/:driver",
          element: <Profile />,
          loader: profileLoader,
          index: true,
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
