import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Error from "../pages/Error";
import Login from "../user-details/Login";
import Register from "../user-details/Register";
import Conatct from "../pages/Conatct";
import PopularGames from "../components/PopularGames";
import GameDetails from "../components/GameDetails";
import ForgetPassword from "../user-details/ForgetPassword";
import MyProfile from "../user-details/MyProfile";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error />,
    children: [
      { index: true, Component: Home },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/contact", Component: Conatct },
      { path: "/populargames", Component: PopularGames },

      {
        path: "/gamedetails/:id",
        element: (
          <PrivateRoute>
            <GameDetails></GameDetails>
          </PrivateRoute>
        ),
      },
      { path: "/forget-password", Component: ForgetPassword },
      { path: "/my-profile", Component: MyProfile },
    ],
  },
]);

export default router;
