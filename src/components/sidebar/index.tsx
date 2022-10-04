import React from "react";
import { useDispatch } from "react-redux";
import { useGetCategoriesQuery } from "../../services/catService";
import styles from './sidebar.module.css'
export default function Sidebar() {
  const { data, isLoading } = useGetCategoriesQuery("categories/");
  const dispatch = useDispatch()
  const handleClick= (id:number)=>{
    dispatch({
        type:'singleCategory',
        category_ids:id
    })
  }

  if(isLoading) {
    return <div>Loading...</div>
  }

  let dataRender = (): JSX.Element => {
    return data?.map((cat:any) => (
      <div onClick={() => handleClick(cat.id)} className={styles.categoryName} key={cat.id}>{cat.name}</div>
      )  )
  }

  return (
    <div>
      <div className={styles.sidebar}>
        {dataRender()}
      </div>
    </div>
  );
}
