import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
import DetailsPage from "./DetailsPage";
import { useParams } from "react-router-dom";

const ReviewDetails = () => {
  const prams = useParams();
  const AxiousURL = useAxious();
  const { refetch, data: ReviewDetails = [] } = useQuery({
    queryKey: ["ReviewDetails"],
    queryFn: async () => {
      const result = await AxiousURL.get("/AllReviews");
      return refetch, result.data;
    },
  });

  console.log(ReviewDetails);
  console.log(prams);
  return (
    <div>
      {ReviewDetails.map((Detail) =>
        Detail._id == prams.id ? (
          <DetailsPage Detail={Detail}></DetailsPage>
        ) : (
          <></>
        )
      )}
    </div>
  );
};

export default ReviewDetails;
