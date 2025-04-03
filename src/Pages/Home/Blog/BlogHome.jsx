import { useQuery } from "@tanstack/react-query";
import useAxious from "../../../Hooks/useAxious";
import { NavLink } from "react-router-dom";
import { FaLeftLong } from "react-icons/fa6";
import useBlogs from "../../MyReview/Hooks/useBlogs";

const BlogHome = () => {

const {BlogData} = useBlogs()

  const AxiousURL = useAxious();
  const { refetch, data: Blogs = [] } = useQuery({
    queryKey: ["Blogs"],
    queryFn: async () => {
      const result = await AxiousURL.get("/blogs");
      return refetch, result.data;
    },
  });
  // console.log(Blogs);
  return (
<>
<div className="text-center py-10">
<h2 className='py-2  text-3xl'>From our Blog</h2>
<h2>Quisque justo turpis, sodales sit amet consectetur --- <NavLink to='/blog' className='font-bold text-blue-500 hover:text-black'>GO TO BLOG</NavLink></h2>
</div>
    <div className="grid md:grid-cols-4 gap-6 p-4">
    {BlogData.slice(0, 4).map((blog) => (
      <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="card bg-base-100 shadow-xl p-4">
          <figure>
            <img
              src={blog.image}
              alt={blog.title}
              className="rounded-xl h-[200px] w-full object-cover"
            />
          </figure>
          <div className="card-body">
            <NavLink
              to={`/blog/${blog.id}`}
              className="card-title font-bold hover:text-blue-600 transition"
              >
              {blog.title}
            </NavLink>
            <p className="text-gray-600">{blog.description.slice(0, 80)}...</p>
            <p className="text-sm text-gray-500 mt-2">{blog.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
    </>
  
  );
};

export default BlogHome;




