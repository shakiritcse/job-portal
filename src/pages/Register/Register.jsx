import Lottie from "lottie-react";
import { Link } from "react-router";
import registerLottie from '../../assets/lotties/register.json';
const Register = () => {
  //   const authInfo = use(AuthContex);
  //   const { createUser } = authInfo;
  // const navigate = useNavigate();
    const handleRegister = (e) => {
  
       e.preventDefault();
       const form=e.target;
       const formData=new FormData(form);
       const myData=Object.fromEntries(formData.entries())
  //     //   create user in firebase

  //     // createUser(email, password)
  //     //   .then((result) => {
  //     //     console.log(result);
  //     //     const userProfile = {
  //     //       ...restFormDta,
  //     //       email,
  //     //       creationTime: result.user?.metadata?.creationTime,
  //     //       lastSignInTime: result.user?.metadata?.lastSignInTime,
  //     //     };
  //     //     // save profile  info into the db
  //     //     fetch(`https://coffe-store-server-neon.vercel.app/users`, {
  //     //       method: "POST",
  //     //       headers: {
  //     //         "content-type": "application/json",
  //     //       },
  //     //       body: JSON.stringify(userProfile),
  //     //     })
  //     //       .then((res) => res.json())
  //     //       .then((data) => {
  //     //         if (data.insertedId) {
  //     //           Swal.fire({
  //     //             title: "Good job!",
  //     //             text: "UserProfile Updated to Database Successfully!",
  //     //             icon: "success",
  //     //           });
  //     //         }
  //     //       });
  //     //     //    navigate('/')
  //     //   })
  // //       .catch((err) => {
  // //         Swal.fire({
  // //           icon: "error",
  // //           title: "Oops...",
  // //           text: `${err.message}`,
  // //           footer: '<a href="#">Why do I have this issue?</a>',
  // //         });
  // //       });
 };
  return (
    <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     <Lottie animationData={registerLottie} className="w-sm" loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl">
   <div className="card-body">
          <h1 className="text-3xl font-bold text-center text-green-600">
            Register Now!
          </h1>

          <form className="fieldset">
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
          <p>
            Already have any Account,pls{" "}
            <Link
              className="text-md font-semibold text-green-600"
              to={`/login`}
            >
              Login
            </Link>
          </p>
        </div>
    </div>
  </div>
</div>
  );
};

export default Register;
