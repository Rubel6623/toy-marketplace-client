/* eslint-disable no-unused-vars */
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login/login.svg";
import { FaGoogle } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const { signIn, GoogleSignIn } = useContext(AuthContext);
  const navigate=useNavigate();
  const location=useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, {replace:true});
        setError('')
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = () => {
    GoogleSignIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        navigate(from, {replace:true});
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className=" ">
          <img className="w-full h-full" src={img} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="text-4xl font-bold text-center">Login !</h2>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label>
                  <input
                    type="checkbox"
                    checked={showPassword}
                    onChange={toggleShowPassword}
                    className="mt-3"
                  />
                  Show Password
                </label>
              </div>

              <div className="form-control mt-2">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>

              <div className=" mt-3">
          <p className="text-center text-red-500">{error}</p>
        </div>
            </form>

            <div className="form-control">
              <p className="text-center">
                New to Toys Store?{" "}
                <Link to="/signup" className="text-orange-600 font-semibold">
                  Please Sign Up
                </Link>
              </p>
              <p className="text-center mb-2">OR , </p>
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline btn-primary"
              >
                <FaGoogle className="mr-1 text-xl"></FaGoogle> Continue with
                Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
