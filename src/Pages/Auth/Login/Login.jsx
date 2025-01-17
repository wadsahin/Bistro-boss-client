import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../../Hooks/useAuth';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
const Login = () => {
  const { signInUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);

  let from = location.state?.from?.pathname || "/";

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({ email, password });

    // Login user
    signInUser(email, password)
      .then(result => {
        const user = result.user;
        // console.log(user);
        if (user) {
          Swal.fire({
            title: "Logged In!",
            text: "Login successful",
            icon: "success"
          });
          navigate(from, { replace: true });
        }
      })
      .catch(err => {
        alert(err.code);
      })
  }

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, [])
  return (
    <div className="hero bg-base-200 min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full flex-1 shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input type="text" name="captcha" placeholder="Type above text" className="input input-bordered" required />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <p><small>New here? Please <Link className='underline' to="/register">Register</Link></small></p>
            <div className='divider my-0 -mb-5'></div>
          </form>

          <div>
            <SocialLogin></SocialLogin>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;