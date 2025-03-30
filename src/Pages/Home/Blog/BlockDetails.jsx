import { useParams } from "react-router-dom";
import useAxious from "../../../Hooks/useAxious";
import { useQuery } from "@tanstack/react-query";

const BlockDetails = () => {
  const params = useParams();
  console.log(params);
  const AxiousURL = useAxious();
  const { refetch, data: Blogs = [] } = useQuery({
    queryKey: ["Blogs"],
    queryFn: async () => {
      const result = await AxiousURL.get("/blogs");
      return refetch, result.data;
    },
  });

  return (
    <div>
      {Blogs.map((blog) => blog.id==params.id? 
      <div className={`  my-6  `}>
          <div className="hero-content justify-self-start flex-col lg:flex-row-reverse">
             
         <div>
         <h2 className="text-3xl md:flex gap-3 items-center   font-bold">
                {" "}
                {blog.title}{" "}
              </h2>
            <h1 className="text-2xl"> {blog.description }... </h1>
            <p className="py-6">{blog.date}</p>
         </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <img src={blog.image} alt="" />
            </div>
          </div>
          </div>

{/* more */}
<div className=" px-10  ">
<div className="     shrink-0  ">
            <div className="  max-w-lg">
              <img className="md:h-[300px]" src=  {blog.image2} alt="" />
            </div>
          </div>
         <div>
         <h2 className="text-3xl md:flex gap-3 items-center   font-bold">
                {" "}
                {blog.title}{" "}
              </h2>
            <h1 className="text-2xl"> {blog.description }... </h1>
           
         </div>
         
          </div>


        </div> :<></>
        
      )}
    </div>
  );
};

export default BlockDetails;
