//  import useAxious from "../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
// import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useMyReview from "./Hooks/useMyReview";
import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { FaStar } from "react-icons/fa6";

// import useMovementHook from "../../Hooks/useMovementHook";

const MyReview = () => {
  const { myReviews } = useMyReview();
  const AxiousURL = useAxious();
  console.log(myReviews);
  const { user } = useContext(AuthContext);

  const { loding } = useContext(AuthContext);

  // console.log(user?.uid)
  // const useUid = user?.uid
  const { refetch, data: MyReview = [] } = useQuery({
    queryKey: ["MyReview"],
    queryFn: async () => {
      const result = await AxiousURL.get("/AllReviews");
      return refetch, result.data;
    },
  });

  console.log(MyReview);

  if (loding) {
    return <h2 className="text-center  text-4xl">loding.........</h2>;
  }
  console.log(MyReview);

  /*     

//  */

  const datas = MyReview.filter((data) => data?.userEmail === user?.email);

  const HandleDElate = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        AxiousURL.delete(`/MyReviews/${id}`).then((res) => {
          console.log(res);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  // Pagination

  // const [currentPage, setCurrentPage] = useState(1) ;
  // const itemsPerPage = 6;

  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = startIndex + itemsPerPage;
  // const totalPages = Math.ceil(datas.length / itemsPerPage);
  // const MyAllReviews = datas.slice(startIndex, endIndex);

  // console.log(MyAllReviews);

  // const [ref, isVisible] = useMovementHook();
  return (
    <div>
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6  `}>
        {datas?.map((MyReview) => (
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
                    {[...Array(Math.round(MyReview?.rating))].map((_, i) => (
                      <FaStar key={i} />
                    ))}
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

      {/* pagination */}
      {/* <div className="flex justify-center mt-5">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="btn btn-outline mr-2">
          Previous
        </button>

        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number + 1)}
            className={`btn mx-1 ${
              currentPage === number + 1 ? "btn-primary" : "btn-outline"
            }`}>
            {number + 1}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="btn btn-outline ml-2">
          Next
        </button>
      </div> */}
    </div>
  );
};

export default MyReview;
