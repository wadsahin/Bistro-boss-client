import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";


const Register = () => {
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  // React hook form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    // Create user
    createUser(data.email, data.password)
      .then(result => {
        const user = result.user;
        if (user) {
          updateUserProfile(data.name, data.photo)
            .then(() => {
              Swal.fire({
                title: "Registed!",
                text: "Registed successfully",
                icon: "success"
              });
              navigate("/");
            })
            .catch(err => {
              console.log(err.code);
            })

        }
      })
      .catch(err => {
        alert(err.message);
      })
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full flex-1 shrink-0 shadow-2xl">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" noValidate>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" {...register("name", { required: true })} placeholder="Your name" className="input input-bordered" required />
              {errors.name && <span className="text-red-400">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input type="url" name="photo" {...register("photo", { required: true })} placeholder="Your photo url" className="input input-bordered" required />
              {errors.name && <span className="text-red-400">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" required />
              {errors.email && <span className="text-red-400">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" name="password"
                {...register("password", { required: true, minLength: 6, maxLength: 10, pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}/ })} placeholder="password" className="input input-bordered" required />
              {/* {errors.password?.type === 'required' && <span className="text-red-400">Password is required</span>}
               {errors.password?.type === 'minLength' && <span className="text-red-400">Password should at least 6 char</span>}
               {errors.password?.type === 'maxLength' && <span className="text-red-400">Password should at under 10 char</span>} */}
              {errors.password?.type === 'pattern' && <span className="text-red-400">Please provide at least one number, one uppercase, one lowercase & min length 6</span>}

            </div>
            <p><small>Have an account? Please <Link className='underline' to="/login">Login</Link></small></p>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;