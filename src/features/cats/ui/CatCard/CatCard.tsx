import { Cat } from "@/app/types";
import { GoHeartFill } from "react-icons/go";

import styles from "./CatCard.module.scss";
import useAppDispatch from "@/hooks/useAppDispatch";
import { toggleFavorite } from "@/features/cats/slices/catsSlice";

export const CatCard = ({
  data,
  isFavorite,
}: {
  data: Cat;
  isFavorite: boolean;
}) => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.Card}>
      <img className={styles.Image} src={data.url} />
      <button
        onClick={() => dispatch(toggleFavorite(data))}
        className={styles.Button}
        type="button"
      >
        <GoHeartFill
          className={
            isFavorite ? `${styles.Icon} ${styles.Liked}` : styles.Icon
          }
        />
      </button>
    </div>
  );
};
