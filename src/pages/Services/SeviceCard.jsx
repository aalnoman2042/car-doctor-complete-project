import { Link } from "react-router-dom";

const SeviceCard = ({ service }) => {
  const { _id,title, img, price } = service;

  return (
    <div>
      <div className="shadow-xl card w-96 bg-base-100">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className=" card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500 text-x">Price: {price}</p>
          <div className="card-actions">
           <Link to={`/book/${_id}`}>
           <button className="btn btn-primary">Book Now</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeviceCard;
