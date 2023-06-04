import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../../utilities/fakedb";
import SingleAppliedJob from "../SingleAppliedJob/SingleAppliedJob";

const AppliedJobs = () => {
  const allJobs = useLoaderData();

  const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    const storedJobs = getAppliedJob();
    const savedJobs = [];

    for (const id in storedJobs) {
      for (const job of allJobs.job_postings) {
        if (job.id === Number(id)) {
          savedJobs.push(job);
        }
      }
    }

    setAppliedJobs(savedJobs);
  }, [allJobs]);

  return (
    <div className="container mb-5 pb-5">
      <div className="job-details-heading">
        <h2>Applied Jobs</h2>
      </div>
      {appliedJobs.map((job) => (
        <SingleAppliedJob key={job.id} job={job}></SingleAppliedJob>
      ))}
    </div>
  );
};

export default AppliedJobs;
