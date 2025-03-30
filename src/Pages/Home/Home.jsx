import Allreview from "../AllReview/Allreview";
import Banner from "./Banner";
import BlogHome from "./Blog/BlogHome";
import HighestReciew from "./HighestReciew";

 

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <BlogHome></BlogHome>
          <HighestReciew></HighestReciew>
        </div>
    );
};

export default Home;