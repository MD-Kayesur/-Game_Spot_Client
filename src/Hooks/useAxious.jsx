import axios from "axios";

 
export const AxiousURL = axios.create({
   baseURL:'https://game-spot-server.vercel.app',
   timeout:5000
})
const useAxious = () => {
   return  AxiousURL
};

export default useAxious;