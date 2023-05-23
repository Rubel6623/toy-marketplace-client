import { Link } from 'react-router-dom';
import img from '../../assets/login/login.svg';
import { FaGoogle} from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

  const {signIn}=useContext(AuthContext);

  const handleLogin=(event)=>{
    event.preventDefault();

    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    console.log(email,password);

    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
    })
    .catch(error=> console.log(error));
  }

    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className=" ">
      <img className='w-full h-full' src={img} alt="" />
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-4xl font-bold text-center">Login !</h2>

        <form onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control mt-2">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Login"
                  />
        </div>

        </form>

        <div className="form-control">
          <p className='text-center'>New to Toys Store? <Link to='/signup' className='text-orange-600 font-semibold'>Please Sign Up</Link></p>
          <p className='text-center mb-2'>Or , </p>
          <button className="btn btn-outline btn-primary"><FaGoogle className='mr-1 text-xl'></FaGoogle> Continue with Google</button>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;