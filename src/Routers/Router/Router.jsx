import { createBrowserRouter } from "react-router-dom";
import Root from "../../components/Root/Root";
import Admin from "../../components/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
  },
]);

export default router;
