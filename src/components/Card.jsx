


const Card = ({ bookingFee,price,imagelink, title, location, size, installation, link }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow">
      <img
        src={imagelink} // Replace with your image path
        alt="Transparent Transactions"
        className="w-full h-48 object-cover rounded-t-lg bg-[url({imagelink})]"
      />
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-gray-600">
        <strong>Location:</strong> {location}
      </p>
      <p className="text-gray-600">
        <strong>Size:</strong> {size}
      </p>
      <p className="text-gray-600">
        <strong>Installation:</strong> {installation}
      </p>
      <div className="flex justify-around">
        <div className="mt-4">
          <p className="text-center font-bold">Cash price</p>
          <a
            href={link}
            className="inline-block  px-4 py-0.5 bg-blue-900 text-white rounded-bl-3xl rounded-tr-3xl hover:bg-blue-600 transition"
          >
            {price}
          </a>
        </div>
        <div className="mt-4">
          <p className="text-center font-bold">Booking Fee</p>
          <a
            href={link}
            className="inline-block  px-4 py-0.5 bg-blue-900 text-white rounded-bl-3xl rounded-tr-3xl hover:bg-blue-600 transition"
          >
            {bookingFee}
          </a>
        </div>
      </div>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-200"/>
      <div className="flex justify-center">
        <a
          href={link}
          className="inline-block mt-4 px-2 py-1 bg-blue-900 text-white rounded-xl hover:bg-blue-900 transition "
        >
          Read More &#8921;
        </a>
      </div>

    </div>
  );
};


export default Card;
