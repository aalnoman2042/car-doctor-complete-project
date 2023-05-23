import { useEffect, useRef, useState } from "react";
import SeviceCard from "./SeviceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const searchref = useRef(null)
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetch(`https://car-doctor-server-aalnoman2042.vercel.app/services?search=${search}&sort=${asc ? "asc" : "desc"}`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, [asc, search]);

  const handleSearch = ()  =>{
    console.log(searchref.current.value);
    setSearch(searchref.current.value)
  }
  return (
    <div className="mt-4">
      <div className="text-center">
        <h3 className="text-3xl font-bold text-orange-600">
          Our Sevices {services.length}
        </h3>
        <h2 className="text-5xl">Our Services area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              ref={searchref}
              placeholder="Search…"
              className="input input-bordered"
            />
            <button
            onClick={handleSearch}
            className="btn btn-square">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => setAsc(!asc)}>
          {asc ? "price: high to low" : "price: low to high"}
        </button>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <SeviceCard key={service._id} service={service}></SeviceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
