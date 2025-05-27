import { Link } from "react-router";

const Login = () => {
//   const authInfo = use(AuthContex);
//   const { signIn } = authInfo;
//   const navigate=useNavigate()
//   const handleSignIn = (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);
//     signIn(email, password)
//       .then((userCredential) => {
//       const user=userCredential.user;
//       const firebaselastSignInTime=user?.metadata?.lastSignInTime
//       const lastSignInTime=new Date(firebaselastSignInTime).toLocaleString()
//       const signInInfo={
//         email,
//         lastSignInTime
//       }
//       fetch(`https://coffe-store-server-neon.vercel.app/users`,{
//         method:"PATCH",
//         headers:{
//           "content-type":"application/json"
//         },
//         body:JSON.stringify(signInInfo)
//       })
//       .then((res)=>res.json())
//       .then(data=>console.log(data))
//       })
//       .catch((err) => {
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: `${err.message}`,
//           footer: '<a href="#">Why do I have this issue?</a>',
//         });
//       });
//   };
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center">
      <div className="card bg-base-100 w-full max-w-sm mx-auto  shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-green-600 font-bold text-center">
            Login now!
          </h1>
          <form className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-success text-white mt-4">Login</button>
          </form>
          <p>
            Dont have any Account,pls{" "}
            <Link
              className="text-md font-semibold text-green-600"
              to={`/register`}
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
