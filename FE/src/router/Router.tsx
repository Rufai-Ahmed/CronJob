import { createBrowserRouter } from "react-router-dom";
import { Register } from "../Register";
import { Pricing } from "../Pricing";

export const Router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Pricing />,
  },
  {
    path: "/upgrade",
    element: <Pricing />,
  },
]);
