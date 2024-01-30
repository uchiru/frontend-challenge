import { useGetCatsQuery } from "../API/catsAPI";
import { CatCard } from "./CatCard";

export const CatsList = () => {
  const { data, isLoading } = useGetCatsQuery({ limit: 20, page: 0 });

  if (isLoading) return;
  return (
    <ul>
      {data?.map((cat) => (
        <li key={cat.id}>
          <CatCard data={cat} />
        </li>
      ))}
    </ul>
  );
};
