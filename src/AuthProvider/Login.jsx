import { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import animationData from "../images/Animation - 1740680824461.json";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
 
 
import { FaGoogle } from "react-icons/fa6";
 
import Lottie from "react-lottie";
import { AuthContext } from "./AuthProvider";
// import Sociallogin from "../../components/Sociallogin";

function Login() {
  const captaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const Navigate = useNavigate();
  const location = useLocation();
  const forms = location?.state?.form?.pathname || "/";
  const { signin,GoogleLogIn } = useContext(AuthContext);

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signin(email, password).then(() => {
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true,
      });
      Navigate(forms, { replace: true });
    });
  };

  const handleCapta = (e) => {
    e.preventDefault();
    const user_captcha_value = captaRef.current.value;

    if (validateCaptcha(user_captcha_value) == true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };




  const handleGoogleLogin = () => {
    GoogleLogIn()
    .then((res)=>{
     console.log( res.data) 
    })
  };

  return (
    <>
      <div className=" hero  bg-base-200  pt-28  ">
        <div className="md:flex ">
          <div>
            <div className=" text-center  lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <Lottie options={defaultOptions} height={400} width={400}></Lottie>
          </div>
          <div className="hero-content flex-col  ">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <fieldset className="fieldset">
                  <label className="fieldset-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Email"
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className="input"
                    placeholder="Password"
                  />

                  <LoadCanvasTemplate />
                  <input
                    type="text"
                    ref={captaRef}
                    name="typeCapta"
                    className="input"
                    placeholder="type the text Above"
                  />

                  <button
                    onClick={handleCapta}
                    className="btn btn-outline btn-primary   btn-xs mt-4">
                    Validate
                  </button>
                  <button disabled={disabled} className="btn   btn-primary  mt-4">
                    Login
                  </button>
                </fieldset>
              </form>

              <button
                onClick={handleGoogleLogin}
                className="btn w-[200px] mx-auto   btn-primary  mt-4">
                <FaGoogle></FaGoogle> Google
              </button>
              <div>
                {/* <Sociallogin name='log in with Google'> </Sociallogin> */}
              </div>
              <p className="m-3">
                new Here please{" "}
                <NavLink className="text-xl font-bold" to="/signup">
                  sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
