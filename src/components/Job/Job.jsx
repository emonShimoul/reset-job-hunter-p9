/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import locationIcon from "../../assets/icons/Frame-4.png";
import salaryIcon from "../../assets/icons/Frame.png";

const Job = ({ job }) => {
  const {
    id,
    company_logo,
    company_name,
    job_title,
    location,
    salary,
    job_place,
    job_type,
  } = job;
  // console.log(job);
  return (
    <div className="job">
      <div className="job-img">
        <img src={company_logo} alt="" />
      </div>
      <h3>{job_title}</h3>
      <h4>{company_name}</h4>
      <div className="job-btn">
        <button className="btn">{job_place}</button>
        <button className="btn">{job_type}</button>
      </div>
      <div className="job-location-salary">
        <p>
          <img src={locationIcon} alt="" className="pe-2" />
          {location}
        </p>
        <p>
          <img src={salaryIcon} alt="" className="pe-2" />
          Salary: {salary}
        </p>
      </div>
      <div className="view-details-btn">
        <Link to={`/job/${id}`}>
          <button className="btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
