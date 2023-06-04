/* eslint-disable react/prop-types */
const Category = ({ category }) => {
  const { logo, name, jobs_available } = category;

  return (
    <div className="category-box">
      <div>
        <img src={logo} alt="" />
      </div>
      <h4>{name}</h4>
      <span>{jobs_available} Jobs Available</span>
    </div>
  );
};

export default Category;
