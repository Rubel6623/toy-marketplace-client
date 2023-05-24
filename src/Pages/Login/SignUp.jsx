import { Link } from "react-router-dom";
import img from '../../assets/login/login.svg';
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const SignUp = () => {

  const {createUser}=useContext(AuthContext);
  const [error,setError]=useState('');

  const handleSignIn=(event)=>{
    event.preventDefault();

    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const password=form.password.value;
    const photo=form.photo.value;
    console.log(name,email, password,photo)

    createUser(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      form.reset();
      setError('')
    })
    .catch(error=>setError(error.message))
  } 

  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className=" ">
      <img className='w-full h-full' src={img} alt="" />
    </div>

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <h2 className="text-4xl font-bold text-center">Sign Up !</h2>

        <form onSubmit={handleSignIn}>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" className="input input-bordered" />
        </div>

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
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name="photo" placeholder="photo url" className="input input-bordered" />
        </div>
          <div className="form-control mt-12">
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
          </div>
        </form>

          <p className='text-center my-3'>Already Have an Account? <Link to='/login' className='text-orange-600 font-semibold'>Please Login</Link></p>

          <p className="text-center text-red-500">{error}</p>

      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;