import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  const jobs = useLoaderData();
  // console.log(jobs.job_postings);
  return (
    <div>
      <Banner />
      <CategoryList />
      <FeaturedJobs jobs={jobs.job_postings} />
    </div>
  );
};

export default Home;
