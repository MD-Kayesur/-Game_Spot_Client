import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

 

const useMyReview = () => {
    const {user} = useContext(AuthContext)
  const userEmail = user?.email
    const AxiousURL = useAxious()
    const { data: myReviews = [], refetch } = useQuery({
        queryKey: ["myReviews"],
        queryFn: async () => {
            const res = await AxiousURL.get(`/myReviews/${userEmail}`)
            return res.data;
        }
    })

    return  {myReviews,refetch}
};

export default useMyReview;