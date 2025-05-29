import { Suspense } from "react";
import Banner from "../../components/Banner";
import Loader from "../../components/Loader";
import HotJobs from "./HotJobs";
 const jobsPromise= fetch(`http://localhost:5000/jobs`).then(res=>res.json());
const Home = () => {
    return (
        <div>
            <Banner></Banner>
          <Suspense fallback={<Loader></Loader>}>
              <HotJobs jobsPromise={jobsPromise}></HotJobs>
          </Suspense>
        </div>
    );
};

export default Home;