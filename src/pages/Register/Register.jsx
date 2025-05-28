import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import registerLottie from "../../assets/lotties/register.json";
import AuthContext from "../../contexts/AuthContext";
import SocialLogin from "../shared/SocialLogin";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const myData = Object.fromEntries(formData.entries());
    const { email, password } = myData;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
           
            text: "Registered Successfully",
            icon: "success",
          });
          form.reset(),
          navigate('/')
        }
      })
      .catch((err) => {
        setErrMsg(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie
            animationData={registerLottie}
            className="w-sm"
            loop={true}
          ></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center text-green-600">
              Register Now!
            </h1>

            <form className="fieldset" onSubmit={handleRegister}>
              {/* <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            /> */}
              {/* <label className="label">Address</label>
            <input
              type="text"
              className="input"
              name="address"
              placeholder="Addres"
            />
            <label className="label">Phone No</label>
            <input
              type="text"
              className="input"
              name="phone"
              placeholder="Phone Number"
            />
            <label className="label">PhotURL</label>
            <input
              type="text"
              className="input"
              name="photo"
              placeholder="Photo"
            /> */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />

              <button className="btn text-white font-semibold bg-green-700 mt-4">
                Register
              </button>
            </form>
            <SocialLogin/>
            <p>
              Already have any Account,pls{" "}
              <Link
                className="text-md font-semibold text-green-600"
                to={`/login`}
              >
                Login
              </Link>
            </p>
            {
              errMsg && <p className="text-red-600 text-lg">{errMsg}</p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
