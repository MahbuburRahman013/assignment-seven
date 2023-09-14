import { useEffect, useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = () => {
  const [cards, setCards] = useState([]);
  const [titleArr, setTitleArr] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [addHour, setAddHour] = useState(0);
  const [lessHour, setLessHour] = useState(20);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  const addTitle = (data) => {
    const newHour = addHour + data.time_hour;
    if (!titleArr.includes(data.title) && newHour <= 20) {
      setTitleArr([...titleArr, data.title]);

      setTotalPrice(data.fee + totalPrice);

      setAddHour(newHour);
      setLessHour(lessHour - data.time_hour);
    } else {
      toast(
        `You have already added "${data.title}" or "Total Credit Hour" is over!!`
      );
    }
  };

  return (
    <div className="flex gap-x-8">
      <div className="grid grid-cols-3 w-[75%] gap-5">
        {cards.map((card, index) => (
          <Cards key={index} card={card} addTitle={addTitle}></Cards>
        ))}
      </div>
      <div className="w-[25%] bg-white rounded-lg px-4 py-5 h-[70vh] overflow-auto">
        <Cart
          titleArr={titleArr}
          totalPrice={totalPrice}
          addHour={addHour}
          lessHour={lessHour}
        ></Cart>
        <ToastContainer></ToastContainer>
      </div>
    </div>
  );
};

export default Container;
