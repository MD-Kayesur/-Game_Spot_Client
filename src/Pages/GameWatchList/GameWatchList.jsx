import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import useWatchList from "../MyReview/Hooks/useWatchList";
import { FaStar } from "react-icons/fa6";

const GameWatchList = () => {
  const AxiousURL = useAxious();
  // const { refetch, data: WatchList = [] } = useQuery({
  //   queryKey: ["WatchList"],
  //   queryFn: async () => {
  //     const result = await AxiousURL.get("/WatchList");
  //     return refetch, result.data;
  //   },
  // });
  // console.log(WatchList);

  const { WatchListData, refetch } = useWatchList();
console.log(WatchListData)
  const RemovedWatchlist = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiousURL.delete(`/WatchList/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Removed!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  `}>
      {WatchListData?.map((MyReview) => (
        <div className={`bg-white shadow-lg rounded-lg overflow-hidden  `}>
        <div className="card   bg-base-100 shadow-xl p-4">
          <figure>
            <img
              src={MyReview?.gameCoverImage}
              alt={MyReview?.gameTitle}
              className="rounded-xl"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold">
              {MyReview?.gameTitle}
            </h2>
            <p className="text-sm text-gray-500">
              {MyReview?.reviewDescription}
            </p>
            <p className="text-sm text-gray-500">{MyReview?.userEmail}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="badge badge-primary">{MyReview?.genre}</span>
              <span className="text-gray-600 text-sm">
                {MyReview?.publishingYear}
              </span>
            </div>
            <div className="flex items-center mt-2">
              <div className="flex items-center gap-1 text-yellow-500 mt-1">
                {/* {[...Array(Math.round(MyReview?.rating))].map((_, i) => (
                  <FaStar key={i} />
                ))} */}
              </div>
              <span className="ml-2 text-gray-600">
                {MyReview?.rating}/5
              </span>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium">
                Reviewed by: {MyReview?.reviewerName}
              </p>
              <p className="text-xs text-gray-500">
                {MyReview?.reviewerEmail}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center px-4">
            <div className="  my-4 ">
              <NavLink
                to={`/updatereview/${MyReview._id}`}
                className="btn  btn-primary ">
                UpDate
              </NavLink>
            </div>
            <div className="  my-4 ">
              <button
                onClick={() => HandleDElate(MyReview._id)}
                className="btn  bg-red-500 text-white ">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default GameWatchList;
