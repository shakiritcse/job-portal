import { motion } from "framer-motion";
import team1 from '../assets/team/team1.jpg';
import team2 from '../assets/team/team2.jpg';
const Banner = () => {
  return (
    <div class="hero bg-base-200 min-h-screen">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
          animate={{y:[100,150,100]}}
          transition={{duration:5,repeat:Infinity}}
            src={team1}
            class="max-w-sm border-s-8 border- border-b-8 border-blue-700 rounded-t-4xl  shadow-2xl"
          />
          <motion.img
          animate={{x:[100,150,100]}}
          transition={{duration:10,delay:5,repeat:Infinity}}
            src={team2}
            class="max-w-sm border-s-8 border- border-b-8 border-blue-700 rounded-t-4xl  shadow-2xl"
          />
        </div>
        <div className="flex-1">
          {/* <motion.h1
            animate={{
              rotate: 360,
              transition: { duration: 6 },
              x: 150,
              y: -200,
            }}
            class="text-5xl font-bold"
          >
            Latest Jobs For You!
          </motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 4,repeat:Infinity } }}
            class="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#33ff33", "#8a33ff"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p class="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button class="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
