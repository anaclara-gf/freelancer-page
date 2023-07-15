import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, NotFound, Profile } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/profile/:id" element={<Profile />} />,
    <Route path="*" element={<NotFound />} />,
  ])
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
