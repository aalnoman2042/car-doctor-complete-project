const BookingRow = ({ booking,handleDelete, handleBookingConfirm}) => {
  const { _id, date, price, service, img, status } = booking;


  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="w-24 h-24 rounded">
            {img && <img src={img} alt="Avatar Tailwind CSS Component" />}
          </div>
        </div>
      </td>
      <td>{service}</td>
      <td>{date}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span onClick={()=> handleBookingConfirm(_id)} className="font-bold text-primary">Confirmed</span>
        ) : (
          <button onClick={()=> handleBookingConfirm(_id)} className="text-red-400 btn btn-ghost btn-xs">Please Confirm</button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
