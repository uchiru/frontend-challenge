import { NotFound } from "@/pages";

export const fallbackRoute = [
  {
    path: "*",
    Component: NotFound,
  },
];
