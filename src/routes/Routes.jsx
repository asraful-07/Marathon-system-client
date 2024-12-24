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
import PrivetRouter from "../PrivetRouter/PrivetRouter";

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
        element: (
          <PrivetRouter>
            <Marathons />
          </PrivetRouter>
        ),
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
        element: (
          <PrivetRouter>
            <AddMarathon />
          </PrivetRouter>
        ),
      },

      {
        path: "/dashboard/my-marathon-list",
        element: (
          <PrivetRouter>
            <MyMarathonList />
          </PrivetRouter>
        ),
      },
      {
        path: "/dashboard/my-apply-list",
        element: (
          <PrivetRouter>
            <MyApplyList />
          </PrivetRouter>
        ),
      },
      {
        path: "/update/:id",
        element: <UpdateMarathon />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/marathon/${params.id}`),
      },
      {
        path: "/marathon/:id",
        element: (
          <PrivetRouter>
            <MarathonDetails />
          </PrivetRouter>
        ),
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
