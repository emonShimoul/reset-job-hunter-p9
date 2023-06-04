import "./JobDetails.css";
import { useLoaderData } from "react-router-dom";
import locationIcon from "../../assets/icons/Frame-4.png";
import salaryIcon from "../../assets/icons/Frame.png";
import jobTitleIcon from "../../assets/icons/Frame-1.png";
import phoneIcon from "../../assets/icons/Frame-2.png";
import emailIcon from "../../assets/icons/Frame-3.png";
import { addToDb } from "../../utilities/fakedb";

const JobDetails = () => {
  const data = useLoaderData();

  const handleApplyBtn = (data) => {
    addToDb(data.id);
  };

  return (
    <div className="container">
      <div className="job-details-heading">
        <h2>Job Details</h2>
      </div>
      <div className="job-details-container">
        <div className="job-details-left">
          <p>
            Job Description: <br />
            <span className="job-details-span">{data.job_description}</span>
          </p>
          <p>
            Job Responsibility: <br />
            <span className="job-details-span"> {data.job_responsibility}</span>
          </p>
          <p>
            Educational Requirements: <br />
            <span className="job-details-span">
              {data.educational_requirements}
            </span>
          </p>
          <p>
            Experiences: <br />
            <span className="job-details-span"> {data.experiences}</span>
          </p>
        </div>
        <div className="job-details-right">
          <div className="job-details-right-info">
            <div>
              <h4>Job Details</h4>
              <p className="pt-3">
                <img src={salaryIcon} alt="" /> Salary:{" "}
                <span className="job-details-span">{data.salary}</span>
              </p>
              <p>
                <img src={jobTitleIcon} alt="" /> Job Title:{" "}
                <span className="job-details-span">{data.job_title}</span>
              </p>
            </div>

            <div>
              <h4 className="pt-3">Contact Information</h4>
              <p className="pt-3">
                <img src={salaryIcon} alt="" /> Job Title:{" "}
                <span className="job-details-span">{data.salary}</span>
              </p>
              <p>
                <img src={phoneIcon} alt="" /> Phone:{" "}
                <span className="job-details-span">
                  {data?.contact_info?.phone}
                </span>
              </p>
              <p>
                <img src={emailIcon} alt="" /> Email:{" "}
                <span className="job-details-span">
                  {data?.contact_info?.email}
                </span>
              </p>
              <p>
                <img src={locationIcon} alt="" /> Address:{" "}
                <span className="job-details-span">
                  {data?.contact_info?.address}
                </span>
              </p>
            </div>
          </div>

          <div className="apply-now-btn">
            <button onClick={() => handleApplyBtn(data)} className="btn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
