import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";

 
const useGame = () => {

    const AxiousURL = useAxious()

const { data: allReviews = [], refetch } = useQuery({
    queryKey: ["allReviews"],
    queryFn: async () => {
        const res = await AxiousURL.get('/AllReviews')
        return res.data;
    }
})

 const addReviews = async(newReviews)=>{
    console.log(newReviews)
    const res = await AxiousURL.post('/addReviews',newReviews)
    return res.data;
 }


const updateCReview = async (id, updatedCoupon) => {
    console.log(id,updatedCoupon)
    const res = await AxiousURL.put(`/updateInfo/${id}`);
    refetch();
    return res.data
};
return { allReviews, refetch, updateCReview ,addReviews};

         
};

export default useGame;