import notFound from "../../assets/images/404.png";

const NotFound = () => {
  return (
    <div className="text-center mt-5">
      <img style={{ width: "1000px" }} src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
