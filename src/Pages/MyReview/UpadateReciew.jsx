// updateReviewsimport React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxious from "../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useGame from "./Hooks/useGame";

// import useMovementHook from '../../Hooks/useMovementHook';

const UpadateReciew = () => {
  // const { coupon, updateCReview } = useGame();
  // console.log(coupon);
  const Navigate = useNavigate();
  const AxiousURL = useAxious();
  const { id } = useParams();
  console.log(id);
  //  const {loding} = useContext(AuthContext)

  const { refetch, data: updateReviews = [] } = useQuery({
    queryKey: ["updateReviews"],
    queryFn: async () => {
      const result = await AxiousURL.get("/AllReviews");
      return refetch, result.data;
    },
  });

  // console.log(updateReviews)
  //  const finddata = coupon.find(Singledata => Singledata?._id === id)
  const finddata = updateReviews.find((Singledata) => Singledata?._id === id);
  console.log(finddata);

  //  if (loding) {
  //   return <h2>loding</h2>
  //  }
  // const {reviewDescription,rating,genre,gameTitle,gameTitle,gameCoverImage} = finddata

  //  console.log(id)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = parseInt(form.rating.value);
    const publishingYear = form.publishingYear.value;
    const gameCoverImage = form.gameCoverImage.value;
    const genre = form.genre.value;
    // const userEmail = form.userEmail.value;
    // const userName = form.userName.value;

    // console.log(typeof rating);
    const info = {
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      gameCoverImage,

      genre,
    };
    console.log(info);

    

    AxiousURL.put(`/updateInfo/${id}`,  info ,{ timeout: 10000 })
    .then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          title: " successly added your indestry details!",
          icon: "success",
          draggable: true,
        });

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
            <h1 className="text-5xl font-bold">
              {" "}
              You Can Update this Review !
            </h1>
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
                    defaultValue={finddata?.gameTitle}
                    placeholder="GameTitle"
                  />

                  <label className="fieldset-label">GameCoverImage</label>
                  <input
                    type="url"
                    name="gameCoverImage"
                    className="input"
                    defaultValue={finddata?.gameCoverImage}
                    placeholder="GameCoverImage "
                  />

                  <label className="fieldset-label"> ReviewDescription</label>
                  <input
                    type="text"
                    name="reviewDescription"
                    className="input"
                    defaultValue={finddata?.reviewDescription}
                    placeholder="ReviewDescription"
                  />
                  <label className="fieldset-label"> Rating</label>
                  <input
                    type="number"
                    name="rating"
                    min="1"
                    max="10"
                    className="input"
                    defaultValue={finddata?.rating}
                    placeholder="Rating"
                  />

                  <label className="fieldset-label">publishingYear</label>
                  <input
                    type="date"
                    name="publishingYear"
                    className="input"
                    defaultValue={finddata?.publishingYear}
                    placeholder="publishingYear"
                  />

                  <label className="fieldset-label">Select a Option</label>
                  <select name="genre" className="select">
                    <option value=""> {finddata?.genre}</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="RPG">RPG</option>
                    <option value="Sports">Sports</option>
                    <option value="Strategy">Strategy</option>
                    <option value="Horror">Horror</option>
                  </select>

                  <button className="btn btn-neutral mt-4"> Update</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpadateReciew;
