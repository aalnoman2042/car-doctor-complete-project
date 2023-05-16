import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../src/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../Shared/SocialLogin';

const Login = () => {
  const location = useLocation()
  const navigate = useNavigate()
    const {signIn} = useContext(AuthContext) 

    const from = location.state?.from?.pathname || '/'

const handleLogin = event =>{
    event.preventDefault()
    const form = event.target;
   
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
    .then(result => {
        const user = result.user
       
        console.log(user);
        form.reset()
        navigate(from, {replace: true})

        

        
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
      <h1 className="text-5xl font-bold text-center">Login</h1>
     <form onSubmit={handleLogin}>
     <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="mt-6 form-control">
     
          <input  className="btn btn-primary" type="submit" value="Login" />
        </div>
     </form>
     <p className='my-4 text-center'>new to car doctor?<Link to='/signup' className='text-orange-600'>Sign up</Link></p>
     <SocialLogin></SocialLogin>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;