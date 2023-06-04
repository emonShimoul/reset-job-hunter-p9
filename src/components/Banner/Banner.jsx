import "./Banner.css";
import bannerImg from "../../assets/images/P3OLGJ1 copy 1.png";

const Banner = () => {
  return (
    <div className="banner">
      <div className="container d-md-flex pt-5">
        <div className="banner-heading">
          <h1>
            One Step Closer To Your{" "}
            <span className="banner-span">Dream Job</span>
          </h1>
          <p className="mt-3">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn large-btn mt-3" type="submit">
            Get Started
          </button>
        </div>
        <div className="banner-img">
          <img className="img-fluid" src={bannerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
