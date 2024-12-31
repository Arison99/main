import { useState, useEffect } from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./CategoryList.css";
import useFetch from "../../../hooks/useFetch";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  const formData = {
    perPage: "50",
    orderBy: "asc",
  };

  const { data, error, loading } = useFetch(import.meta.env.VITE_CATEGORIES, {
    method: "POST",
    body: JSON.stringify(formData),
    headers: { "Content-Type": "application/json" },
  });

  useEffect(() => {
    if (data) {
      setCategories(data.results.data);
    }
  }, [data]);

  if (loading) {
    return (
      <div className="container text-center">
        <p className="para-1">Loading...</p>
      </div>
    ); // Show loading message while data is being fetched
  }

  if (error) {
    return (
      <div className="container text-center">
        <p className="para-1">Error: {error.message}</p>
      </div>
    ); // Show error message if there's a problem
  }

  return (
    <>
      <ul className="menuList">
        {categories &&
          categories.map((menuItem) => (
            <CategoryItem key={menuItem.id} category={menuItem} />
          ))}
      </ul>
    </>
  );
};

export default CategoryList;
