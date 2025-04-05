import { NavLink, useNavigate } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";
import Swal from "sweetalert2";
import { FaStar } from "react-icons/fa6";

const DetailsPage = ({ Detail }) => {
  const navigate = useNavigate();
  const AxiousURL = useAxious();

  const AddedWatchlist = (Detail) => {
    AxiousURL.post("/WatchList", Detail).then((res) => {
      console.log(res.data);
      Swal.fire({
        title: " success!",
        icon: "success",
        draggable: true,
      });
      navigate("/gamewatchlist");
    });
  };

  console.log(Detail);
  return (
    <div>
      <div className="card   bg-base-100 shadow-xl p-4">
        <figure>
          <img
            src={Detail?.gameCoverImage}
            alt={Detail?.gameTitle}
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">{Detail?.gameTitle}</h2>
          <p className="text-sm text-gray-500">{Detail?.reviewDescription}</p>
          <div className="flex justify-between items-center mt-2">
            <h2 className="badge badge-primary">{Detail?.genre}</h2>
            <h2 className="text-gray-600 text-sm">
              {Detail?.publishingYear}
            </h2>
          </div>
          <div className="flex items-center mt-2">
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
                    {[...Array(Math.round(Detail?.rating))].map((_, i) => (
                        <FaStar key={i} />
                    ))}
                  </div>
            <span className="ml-2 text-gray-600">{Detail.rating}/5</span>
          </div>
          <div className="mt-2">
            <p className="text-sm font-medium">
              Reviewed by: {Detail?.userName}
            </p>
            <p className="text-xs text-gray-500">{Detail?.userEmail}</p>
          </div>
          <div>
            <NavLink onClick={() => AddedWatchlist(Detail._id)} className="btn ">
          
              Add to WatchList
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
