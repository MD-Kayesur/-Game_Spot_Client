import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";

 

const useBanner = () => {

    const AxiousURL = useAxious()

    const { data: BannerData = [] } = useQuery({
        queryKey: ["BannerData"],
        queryFn: async () => {
            const res = await AxiousURL.get('/Banners')
            return res.data;
        }
    })
 
    return {BannerData}
};

export default useBanner;
