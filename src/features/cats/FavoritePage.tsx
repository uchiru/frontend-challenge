import { RootState } from "@/app/store";
import useAppSelector from "@/hooks/useAppSelector";
import { CatsList } from "./ui/CatsList/CatsList";

import styles from "./FavoritePage.module.scss";

export const FavoritePage = () => {
  const favorites = useAppSelector(
    (state: RootState) => state.catsReducer.favorites
  );
  return (
    <div className={styles.Wrapper}>
      {favorites.length ? (
        <CatsList data={favorites} />
      ) : (
        <div className={styles.NotFound}>
          Ничего не найдено. Лайкните котиков.
        </div>
      )}
    </div>
  );
};
