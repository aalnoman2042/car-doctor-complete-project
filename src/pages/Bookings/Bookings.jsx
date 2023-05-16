import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import { useNavigate } from "react-router-dom";



const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate()


    const handleDelete = (id) => {
        const proceed = confirm("are you sure , you want to delete ");
        if (proceed) {
          fetch(`https://car-doctor-server-aalnoman2042.vercel.app/bookings/${id}`,{
            method: 'DELETE'
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              if(data.deletedCount> 0){
                alert('deleted successfull')
                const remaining = bookings.filter(booking =>booking._id !== id )
                setBookings(remaining)
              }
            });
        }
      };

      const handleBookingConfirm= id =>{
        fetch(`https://car-doctor-server-aalnoman2042.vercel.app/bookings/${id}`,{
            method: 'PATCH',
            headers:{
                 'content-type': 'application/json'
            },
            body: JSON.stringify({status:'confirm'})
        } )
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount>0){
                // update
                const remainig = bookings.filter(booking => booking._id !== id)
                const updated = bookings.find(booking => booking._id === id)
                updated.status = 'confirm'
                const newBookings = [updated,...remainig]
                setBookings(newBookings)

            }
        })
    }


    const url = `https://car-doctor-server-aalnoman2042.vercel.app/bookings?email=${user?.email}`

    useEffect(()=>{
        fetch(url,{
            method: 'GET',
            headers: {
                authorization : `bearer ${localStorage.getItem('car-access-token')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(!data.error){

                setBookings(data)
            }
            else{
                navigate('/')
            }
            

        })
    }, [url, navigate])
    return (
        <div>
        <h2 className="text-5xl">Your bookings: {bookings.length}</h2>
        <div className="w-full overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map(booking => <BookingRow
                            key={booking._id}
                            booking={booking}
                            handleDelete={handleDelete}
                            handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }
                </tbody>

            </table>
        </div>
    </div>
    );
};

export default Bookings;