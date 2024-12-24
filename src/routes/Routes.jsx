import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Marathons from "../components/Marathons";
import Dashboard from "../components/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList";
import MyApplyList from "../pages/MyApplyList";
import MarathonDetails from "../components/MarathonDetails";
import UpdateMarathon from "../pages/UpdateMarathon";
import ErrorPage from "../pages/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/marathons",
        element: <Marathons />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/dashboard/add-marathon",
        element: <AddMarathon />,
      },

      {
        path: "/dashboard/my-marathon-list",
        element: <MyMarathonList />,
      },
      {
        path: "/dashboard/my-apply-list",
        element: <MyApplyList />,
      },
      {
        path: "/update/:id",
        element: <UpdateMarathon />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathon/${params.id}`),
      },
      {
        path: "/marathon/:id",
        element: <MarathonDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathon/${params.id}`),
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
