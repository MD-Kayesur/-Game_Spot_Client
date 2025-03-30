import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import { FaLeftLong } from "react-icons/fa6";

const Blog = () => {
  const AxiousURL = useAxious();
  const { refetch, data: Blogs = [] } = useQuery({
    queryKey: ["Blogs"],
    queryFn: async () => {
      const result = await AxiousURL.get("/blogs");
      return refetch, result.data;
    },
  });
  console.log(Blogs);
  return (
    <div>
      {Blogs.map((blog) => (
        <div className={`bg-base-200  my-6  `}>
          <div className="px-10">
            {" "}
            <NavLink
              to={`/blog/${blog.id}`}
              className="text-3xl md:flex gap-3 items-center hover:text-red-600 font-bold">
              {" "}
              {blog.title} <FaLeftLong></FaLeftLong> Hover !
            </NavLink>
          </div>
          <div className="hero-content justify-self-start flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl"> {blog.description.slice(0, 50)}... </h1>
              <p className="py-6">{blog.date}</p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <img src={blog.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
