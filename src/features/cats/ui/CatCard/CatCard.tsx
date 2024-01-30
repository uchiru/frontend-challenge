import { Cat } from "@/app/types";
import { GoHeartFill } from "react-icons/go";

import styles from "./CatCard.module.scss";

export const CatCard = ({ data }: { data: Cat }) => {
  return (
    <div className={styles.Card}>
      <img className={styles.Image} src={data.url} />
      <button className={styles.Button} type="button">
        <GoHeartFill className={styles.Icon} />
      </button>
    </div>
  );
};
