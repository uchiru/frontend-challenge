import { CatCard } from "../CatCard/CatCard";

import styles from "./CatsList.module.scss";
import { Cat } from "@/app/types";

export const CatsList = ({ data }: { data: Cat[] }) => {
  return (
    <div className={styles.Wrapper}>
      <ul className={styles.List}>
        {data?.map((cat) => (
          <li key={cat.id}>
            <CatCard data={cat} />
          </li>
        ))}
      </ul>
    </div>
  );
};
