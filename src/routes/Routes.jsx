import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Marathons from "../components/Marathons";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddMarathon from "../pages/AddMarathon";
import MyMarathonList from "../pages/MyMarathonList";
import MyApplyList from "../pages/MyApplyList";
import MarathonDetails from "../components/MarathonDetails";
import ErrorPage from "../pages/ErrorPage";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/DashboardHome";

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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
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
      // dashboard routes
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardHome />,
          },
          {
            path: "add-marathon",
            element: (
              <PrivetRouter>
                <AddMarathon />
              </PrivetRouter>
            ),
          },
          {
            path: "my-marathon-list",
            element: (
              <PrivetRouter>
                <MyMarathonList />
              </PrivetRouter>
            ),
          },
          {
            path: "my-apply-list",
            element: (
              <PrivetRouter>
                <MyApplyList />
              </PrivetRouter>
            ),
          },
        ],
      },
    ],
  },
]);

export default routes;
