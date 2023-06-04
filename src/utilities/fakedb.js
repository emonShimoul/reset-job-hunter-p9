import toast from "react-hot-toast";
// use local storage to manage cart data
const addToDb = (id) => {
  let appliedJobs = getAppliedJob();

  // add quantity
  const quantity = appliedJobs[id];
  if (!quantity) {
    appliedJobs[id] = 1;
    toast("Job Applied Successfully!!");
  } else {
    const newQuantity = quantity + 1;
    appliedJobs[id] = newQuantity;
    toast("You have already applied to this Job!!");
  }
  localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
};

const removeFromDb = (id) => {
  const appliedJobs = getAppliedJob();
  if (id in appliedJobs) {
    delete appliedJobs[id];
    localStorage.setItem("applied-jobs", JSON.stringify(appliedJobs));
  }
};

const getAppliedJob = () => {
  let appliedJobs = {};

  //get the shopping cart from local storage
  const storedappliedJobs = localStorage.getItem("applied-jobs");
  if (storedappliedJobs) {
    appliedJobs = JSON.parse(storedappliedJobs);
  }
  return appliedJobs;
};

const deleteAppliedJob = () => {
  localStorage.removeItem("applied-jobs");
};

export { addToDb, removeFromDb, getAppliedJob, deleteAppliedJob };
