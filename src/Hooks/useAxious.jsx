import axios from "axios";

 
export const AxiousURL = axios.create({
   baseURL:'http://localhost:4001',
   timeout:5000
})
const useAxious = () => {
   return  AxiousURL
};

export default useAxious;