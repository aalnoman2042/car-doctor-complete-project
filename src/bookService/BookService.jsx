import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const BookService = () => {

    const service = useLoaderData();
    const { title, price , _id, img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;

        const booking ={
            customerName : name,
            email,
            date, 
            service_id:_id,
            price: price,
            service: title,
            img
        }
console.log(booking);
// sending data
 fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers: {
      'content-type' : 'application/json' 
    },
    body: JSON.stringify(booking)
 })
 .then(res => res.json())
 .then(data => {
    console.log(data);
    if(data.insertedId){
        alert("booked success fully")
    }
    form.reset()
 })

    }
    
    return (
        <div>
           <h2 className="text-center">Book service <span className="font-bold">  {title}</span></h2>
    <div className="flex-shrink-0 w-3/4 mx-auto shadow-2xl card bg-base-100">
      <div className=" card-body">
        <form onSubmit={handleBookService}>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
             defaultValue={user?.displayName}
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">date</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Due amount</span>
            </label>
            <input
              type="text"
            defaultValue={'$'+ price}
              className="input input-bordered"
            />
          </div>
      </div>
          <div className="mt-6 form-control">
            <input  className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
          </div>
        </form>
      </div>
    </div>
        </div>
    );
};

export default BookService;