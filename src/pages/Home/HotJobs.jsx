import { use } from "react";
import JobsCard from "./JobsCard";

const HotJobs = ({jobsPromise}) => {
    const jobs=use(jobsPromise)
    console.log(jobs)
    return (
        <div>
            <h2 className="text-4xl font-semibold text-center my-8">Hot Jobs Of The Day</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-2">
          {jobs.map(job=><JobsCard key={job._id} job={job}></JobsCard>)}
         </div>
        </div>
    );
};

export default HotJobs;