import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Home, Profile } from "../pages";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/profile/:id" element={<Profile />} />,
  ])
);

function Router() {
  return <RouterProvider router={router} />;
}

export { Router };
