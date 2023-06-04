/* eslint-disable react/prop-types */
import "./FeaturedJobs.css";
import Job from "../Job/Job";

const FeaturedJobs = ({ jobs }) => {
  return (
    <div className="container featured-jobs">
      <div className="featured-jobs-desc text-center mb-5">
        <h2>Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>

      <div className="featured-jobs-container">
        {jobs.map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className="see-all-jobs-btn">
        <button className="large-btn btn">See All Jobs</button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
