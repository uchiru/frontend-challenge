import { HomePage } from "@/features/cats";
import { FavoritePage } from "@/features/cats";

const HOME_ROUTE = "/";
const FAVORITE_ROUTE = "/favorite";

export const routes = [
  { path: HOME_ROUTE, Component: HomePage },
  { path: FAVORITE_ROUTE, Component: FavoritePage },
];
