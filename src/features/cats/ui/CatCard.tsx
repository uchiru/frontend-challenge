import { Cat } from "@/app/types";

export const CatCard = ({ data }: { data: Cat }) => {
  return <div>{data.url}</div>;
};
