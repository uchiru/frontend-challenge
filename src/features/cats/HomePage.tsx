import { useEffect, useState } from "react";
import { useGetCatsQuery } from ".";
import { CatsList } from "./ui/CatsList/CatsList";
import { PageSpinner } from "@/components/UI/Loader";

import styles from "./HomePage.module.scss";
import { Spinner } from "@/components/UI/Spinner";

export const HomePage = () => {
  const [page, setPage] = useState(0);
  const { data, isLoading, isFetching } = useGetCatsQuery({ limit: 20, page });

  useEffect(() => {
    const onScroll = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener("scroll", onScroll);

    return function () {
      document.removeEventListener("scroll", onScroll);
    };
  }, [page, isFetching]);

  if (isLoading) return <PageSpinner />;

  return (
    <>
      {data ? (
        <>
          <CatsList data={data} />
          <div className={styles.Footer}>
            {isFetching ? (
              <Spinner />
            ) : (
              <button className={styles.Button}>Загрузить еще</button>
            )}
          </div>
        </>
      ) : (
        <div>Ничего не найдено</div>
      )}
    </>
  );
};
