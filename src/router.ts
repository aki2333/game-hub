import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    ErrorBoundary: ErrorPage,
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
