import React from "react";
import { useNavigate } from "react-router-dom";
import "../categories/categories.css";

const Categories = (item) => {
  let navigate = useNavigate();
  function movePage(val) {
    navigate(`/product/filter?brand=${val}`);
  }
  return (
    <div className="categories">
      {item.categories.map((val) => {
        return (
          <div className="categories-div">
            <img
              onClick={() => {
                movePage(val.categoriesName);
              }}
              className="categories-img"
              src={"http://localhost:3150" + val.thumpNail}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
