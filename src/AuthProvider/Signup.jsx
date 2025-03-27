import { useContext } from "react";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import animationData from "../images/Animation - 1740721555571.json";
import Lottie from "react-lottie";
import axios from 'axios';
import { AuthContext } from "./AuthProvider";
 

function Signup() {
  const { Signup, updateProfil, GoogleLogIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photourl = form.photourl.value;

    // Firebase signup
    Signup(email, password)
      .then(() => {
        updateProfil(name, photourl)
          .then(() => {
            const userInfo = { email, password, photourl };
            axios.post("/users", userInfo)
              .then((res) => {
                if (res.data.insertedId) {
                  Swal.fire({
                    title: "Success!",
                    icon: "success",
                    draggable: true,
                  });
                  navigate("/");
                }
              })
              .catch((err) => console.error("Error saving user info:", err));
          })
          .catch((err) => console.error("Error updating profile:", err));
      })
      .catch((err) => console.error("Signup failed:", err));
  };

  const handleGoogleLogin = () => {
    GoogleLogIn()
      .then((result) => {
        console.log("Google Login Successful", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error("Google Login Failed:", error);
        Swal.fire({
          title: "Error!",
          text: "Google login failed. Please try again.",
          icon: "error",
        });
      });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
  };

  return (
    <div className="hero bg-base-200 pt-29">
      <div className="md:flex">
        <div>
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!!</h1>
          </div>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="hero-content flex-col">
          <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Name</label>
                <input type="text" name="name" className="input" placeholder="Name" />
                
                <label className="fieldset-label">Photo URL</label>
                <input type="text" name="photourl" className="input" placeholder="Photo URL" />
                
                <label className="fieldset-label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />
                
                <label className="fieldset-label">Password</label>
                <input type="password" name="password" className="input" placeholder="Password" />
                
                <button className="btn btn-primary mt-4">Sign Up</button>
              </fieldset>
            </form>
            <button onClick={handleGoogleLogin} className="btn w-[200px] mx-auto btn-primary mt-4">
              <FaGoogle /> Google
            </button>
            <p className="m-3">
              Already have an account?{" "}
              <NavLink className="text-xl font-bold" to="/login">
                Log In
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
