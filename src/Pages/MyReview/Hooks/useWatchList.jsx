import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";

 

const useWatchList = () => {
    const AxiousURL = useAxious()

    const { data: WatchListData = [],refetch } = useQuery({
        queryKey: ["WatchListData"],
        queryFn: async () => {
            const res = await AxiousURL.get('/WatchList')
            return res.data;
        }
    })
    return  {WatchListData,refetch}
};

export default useWatchList;