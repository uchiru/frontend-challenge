import MainLayout from "@/pages/Layouts/MainLayout";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { routes } from "./routes";

const AppRouter = () => {
  const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route element={<MainLayout />}>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={AppRoutes} />;
};

export default AppRouter;
