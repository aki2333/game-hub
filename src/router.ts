import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "/game/:id",
        Component: GameDetailPage,
      },
    ],
  },
]);
export default router;
