import React from 'react';
import { NavLink } from 'react-router-dom';

const SingleOthers = ({items}) => {

 
    console.log(items)
    return (


<div className='grid py-5 gap-10 md:grid-cols-4'>
{items.map(item =>  <div className="card relative bg-base-100  shadow-sm">
      <figure>
        <img src={item.gameCoverImage} alt="Shoes" />
      </figure>
      <h2 className="absolute bg-black text-white m-5 px-2 rounded right-0">
        {item.genre}
      </h2>
      <div className="card-body">
        <h2 className="card-title">{item.gameTitle}</h2>
        <p> {item.userName}</p>
        <div className="card-actions justify-end">
        <div>
                 <NavLink to={`/reviewsdetails/${item._id}`} className='btn '> Explore Details</NavLink>
              </div>
        </div>
      </div>
    </div>)}
</div>

       
    );
};

export default SingleOthers;