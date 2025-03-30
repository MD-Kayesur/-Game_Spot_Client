import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";

const GameWatchList = () => {
  const AxiousURL = useAxious();
  const { refetch, data: WatchList = [] } = useQuery({
    queryKey: ["WatchList"],
    queryFn: async () => {
      const result = await AxiousURL.get("/WatchList");
      return refetch, result.data;
    },
  });
  console.log(WatchList);



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
            {WatchList?.map((MyReview) => (
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
                  <div className="flex justify-between items-center mt-2">
                    <span className="badge badge-primary">{MyReview?.genre}</span>
                    <span className="text-gray-600 text-sm">
                      {MyReview?.publishingYear}
                    </span>
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                          <input type="radio" name="rating-2"  key={i}   
                          className={`mask mask-star-2 ${i < MyReview.rating ? 'bg-yellow-900'  : 'bg-gray-300'}`} aria-label="1 star" /> 
                      ))}
    
                    </div>
    <span className="ml-2 text-gray-600">{MyReview.rating}/5</span>
                   
                  </div>
                  <div className="mt-2">
                    <p className="text-sm font-medium">
                      Reviewed by: {MyReview?.userName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {MyReview?.userEmail}
                    </p>
                  </div>
                  <div>
                  <NavLink
                onClick={() => RemovedWatchlist(MyReview._id)}
                className="btn ">
                Remove
              </NavLink>                  </div>
                </div>
              </div>
            ))}
     </div>
  );
};

export default GameWatchList;
              
