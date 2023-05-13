import { Link } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignup = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name,  email, password);

        // firebase create user
        createUser(email, password)
        .then(result =>{
            const user = result.user
            console.log(user);
        })
        .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="min-h-screen hero bg-base-200">
  <div className="flex-col gap-28 hero-content lg:flex-row">
    <div className="w-1/2 ">
      <img src={img} alt="" />
    </div>
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
      <h1 className="text-5xl font-bold text-center">Sign up</h1>
     <form onSubmit={handleSignup}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" />
        </div>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
     
          <input  className="btn btn-primary" type="submit" value="Sign up" />
        </div>
     </form>
     <p className='my-4 text-center'>already ahve an account?<Link to='/signup' className='text-orange-600'>log in</Link></p>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;