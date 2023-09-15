import PropTypes from "prop-types";
const Cards = ({ card, addTitle }) => {
  return (
    <div className="bg-white px-4 py-6 rounded-lg relative h-[450px]">
      <img src={card.img_url} alt="" />
      <h1 className="text-xl font-bold mt-2">{card.title}</h1>
      <p className="text-gray-600 mt-3">{card.description}</p>
      <div className="absolute left-5 right-5 mx-auto bottom-[20px]">
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-dollar-sign"></i>
          <p>Price : {card.fee}</p>
        </div>
        <div className="flex items-center gap-4">
          <i className="fa-solid fa-book-open"></i>
          <p>Credit : {card.time_hour}hr</p>
        </div>
      </div>
      <button
        onClick={() => addTitle(card)}
        className="bg-blue-500 w-full mt-4 text-white font-semibold py-1 rounded text-xl"
      >
        Select
      </button>
      </div>
    </div>
  );
};
Cards.propTypes = {
  card: PropTypes.object.isRequired,
  addTitle: PropTypes.func.isRequired,
};
export default Cards;
