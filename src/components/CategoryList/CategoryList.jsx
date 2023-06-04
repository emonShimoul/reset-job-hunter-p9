import "./CategoryList.css";
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
  const [jobCategories, setJobCategories] = useState([]);

  useEffect(() => {
    fetch("assets/categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategories(data.data));
  }, []);

  // console.log(jobCategories);

  return (
    <div className="container category-lists">
      <div className="category-desc text-center mb-5">
        <h2>Job Category List</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="categories d-md-flex justify-content-between">
        {jobCategories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
        {/* <div className="category-box">
          <div className="category-box-img">
            <img src={icon1} alt="" />
          </div>
          <h4>Account & Finance</h4>
          <span>300 Jobs Available</span>
        </div>
        <div className="category-box">
          <div>
            <img src={icon1} alt="" />
          </div>
          <h4>Account & Finance</h4>
          <span>300 Jobs Available</span>
        </div>
        <div className="category-box">
          <div>
            <img src={icon1} alt="" />
          </div>
          <h4>Account & Finance</h4>
          <span>300 Jobs Available</span>
        </div>
        <div className="category-box">
          <div>
            <img src={icon1} alt="" />
          </div>
          <h4>Account & Finance</h4>
          <span>300 Jobs Available</span>
        </div> */}
      </div>
    </div>
  );
};

export default CategoryList;
