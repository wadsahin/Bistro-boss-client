import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result.user);
        const userInfo = {
          name: result.user.displayName,
          email: result.user.email,
        }
        axiosPublic.post("/users", userInfo)
          .then(res => {
            console.log(res.data);
            navigate('/');
          })
        alert("Successfully logged in via Google");
      })
      .catch(err => {
        alert(err.code);
      })
  }
  return (
    <div>
      <div className="px-8 pb-5">
        <button onClick={handleGoogleSignIn} className='btn btn-outline border-blue-500 w-full'>
          <FcGoogle size={24}></FcGoogle>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;