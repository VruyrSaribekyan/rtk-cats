import React, { useState, useEffect } from "react";
import { flushSync } from "react-dom";
import { useSelector } from "react-redux";
import store, { RootState } from "../../app/store";
import Sidebar from "../../components/sidebar";
import { useGetCatsQuery } from "../../services/catsImages";
import styles from "./Home.module.css";

export default function Home(): JSX.Element {
  const [page, setPage] = useState(1);

  const [cats, setCats] = useState<any[]>([]);

  const { category_ids } = useSelector(
    (store: RootState) => store.filterByCategories
  );

  const { data, isLoading, isSuccess } = useGetCatsQuery({
    category_ids: category_ids || "",
    limit: 10,
    page: page,
  });

  useEffect(() => {
    if (!isLoading && data) {
      setCats((d) => [...d, ...data]);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!isLoading) {
      setPage(1);
      setCats(data);
      setCats([]);
    }
  }, [category_ids]);

  console.log("render");

  const renderCats = (): JSX.Element => {
    return (
      <div className={styles.catContainer}>
        {!isLoading
          ? cats?.map((cat: any) => (
              <div>
                <img alt="" className={styles.images} src={cat.url} />
              </div>
            ))
          : null}
      </div>
    );
  };
  return ( <div>
    <div className={styles.container}>
      <Sidebar />
      <div>{renderCats()}</div>
      </div>
      <button style={{width:100, height:50}} onClick={() => setPage((p) => p + 1)}>MORE</button></div>
   
  );
}
