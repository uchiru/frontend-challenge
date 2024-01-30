import useAppSelector from "@/hooks/useAppSelector";
import { CatCard } from "../CatCard/CatCard";

import styles from "./CatsList.module.scss";
import { Cat } from "@/app/types";
import { RootState } from "@/app/store";

export const CatsList = ({ data }: { data: Cat[] }) => {
  const favorites = useAppSelector(
    (state: RootState) => state.catsReducer.favorites
  );

  const favoritesId = favorites.map((cat) => cat.id);

  return (
    <div className={styles.Wrapper}>
      <ul className={styles.List}>
        {data?.map((cat) => (
          <li key={cat.id}>
            <CatCard
              data={cat}
              isFavorite={favoritesId.indexOf(cat.id) != -1}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
