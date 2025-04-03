import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";

 

const useBlogs = () => {

    const AxiousURL = useAxious()

    const { data: BlogData = [] } = useQuery({
        queryKey: ["BlogData"],
        queryFn: async () => {
            const res = await AxiousURL.get('/blogs')
            return res.data;
        }
    })
 
    return {BlogData}
};

export default useBlogs;
