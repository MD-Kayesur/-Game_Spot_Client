import { useQuery } from "@tanstack/react-query";
import useAxious from "../../Hooks/useAxious";
import { NavLink } from "react-router-dom";

const HighestReciew = () => {
  const AxiousURL = useAxious();
  const { refetch, data: HighestReciew = [] } = useQuery({
    queryKey: ["HighestReciew"],
    queryFn: async () => {
      const result = await AxiousURL.get("/HightReview");
      return refetch, result.data;
    },
  });

  console.log(HighestReciew);
  return (
    <>
      <div className="px-10 py-10">
        <h2 className="text-2xl font-bold"> Reviews</h2>
      </div>
      <div className="grid md:grid-cols-4 gap-3">
        {HighestReciew.map((data) => (
          <div className="card   bg-base-100 shadow-xl p-4">
            <figure>
              <img
                src={data?.gameCoverImage}
                alt={data?.gameTitle}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">
                {data?.gameTitle}
              </h2>
              <p className="text-sm text-gray-500">{data?.reviewDescription}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="badge badge-primary">{data?.genre}</span>
                <span className="text-gray-600 text-sm">
                  {data?.publishingYear}
                </span>
              </div>
              <div className="flex items-center mt-2">
                <div className="rating">
                  {[...Array(5)].map((_, i) => (
                    <input
                      type="radio"
                      name="rating-2"
                      key={i}
                      className={`mask mask-star-2 ${
                        i < data.rating ? "bg-yellow-900" : "bg-gray-300"
                      }`}
                      aria-label="1 star"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">{data.rating}/5</span>
              </div>
              <div className="mt-2">
                <p className="text-sm font-medium">
                  Reviewed by: {data?.userName}
                </p>
                <p className="text-xs text-gray-500">{data?.userEmail}</p>
              </div>
              <div>
                <NavLink to={`/reviewsdetails/${data._id}`} className="btn ">
                  {" "}
                  Explore Details
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HighestReciew;
