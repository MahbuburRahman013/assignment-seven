import { useEffect, useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";

const Container = () => {
   const [cards,setCards] = useState([]);
   console.log(cards)
useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data=> setCards(data));
},[])

    return (
       <div className="flex gap-x-8">
         <div className="grid grid-cols-3 w-[75%] gap-5">
            {
                cards.map((card,index)=> <Cards key={index} card={card}></Cards>)
            }
        </div>
        <div className="w-[25%] bg-white rounded-lg px-4 py-5 h-[70vh]">
        <Cart></Cart>
        </div>
       </div>
    );
};

export default Container;