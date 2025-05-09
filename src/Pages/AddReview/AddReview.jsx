import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxious from "../../Hooks/useAxious";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useGame from "../MyReview/Hooks/useGame";
// import useMovementHook from '../../Hooks/useMovementHook';

const AddReview = () => {
  const Navigate = useNavigate();
  const AxiousURL = useAxious();
 const {user}= useContext(AuthContext)
const usermame = user?.displayName
const userEmail = user?.email
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = parseInt(form.rating.value);
    const publishingYear = form.publishingYear.value;
    const gameCoverImage = form.gameCoverImage.value;
    const genre = form.genre.value;
     

    console.log(typeof rating);
    const info = {
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      gameCoverImage,
      usermame,
      userEmail,
      genre,
    };
    console.log(info);


     




    AxiousURL.post("/addReviews", info,).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: " successly added your indestry details!",
          icon: "success",
          draggable: true,
        });
        Navigate('/myreview')
        return "";
      }
    });
  };

  // const [ref, isVisible] = useMovementHook();
  return (
    <div>
      <div className={`bg-base-200  my-6  `}>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> You Can Add A Review !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} action="">
                <fieldset className="fieldset">
                  <label className="fieldset-label">GameTitle</label>
                  <input
                    type="text"
                    name="gameTitle"
                    className="input"
                    placeholder="GameTitle"
                  />

                  <label className="fieldset-label">GameCoverImage</label>
                  <input
                    type="url"
                    name="gameCoverImage"
                    className="input"
                    placeholder="GameCoverImage"
                  />

                  <label className="fieldset-label"> ReviewDescription</label>
                  <input
                    type="text"
                    name="reviewDescription"
                    className="input"
                    placeholder=" ReviewDescription"
                  />
                  <label className="fieldset-label"> Rating</label>
                  <input
                    type="number"
                    name="rating"
                    min="1"
                    max="10"
                    className="input"
                    placeholder="Enter rating (1-10)"
                  />

                  <label className="fieldset-label">publishingYear</label>
                  <input
                    type="date"
                    name="publishingYear"
                    className="input"
                    placeholder="publishingYear"
                  />

                  <label className="fieldset-label">Select a Option</label>
                  <select name="genre" className="select">
                    <option value="">Select Genre</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Sports">Sports</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Horror">Horror</option>
                  </select>
 

                  <button className="btn btn-neutral mt-4">
                    {" "}
                    Add Game Review
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
