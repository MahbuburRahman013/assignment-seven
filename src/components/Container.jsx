import { useEffect, useState } from "react";
import Cards from "./Cards";
import Cart from "./Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = () => {
   const [cards,setCards] = useState([]);
   const [titleArr,setTitleArr] = useState([]);


useEffect(()=>{
    fetch('data.json')
    .then(res=> res.json())
    .then(data=> setCards(data));
},[])

const addTitle = (titleData) =>{
        if(!titleArr.includes(titleData)){
            setTitleArr([...titleArr,titleData])
        }else{
            toast(`You have already added "${titleData}"`)
        }    
}

    return (
       <div className="flex gap-x-8">
        
         <div className="grid grid-cols-3 w-[75%] gap-5">
            {
                cards.map((card,index)=> <Cards key={index} card={card} addTitle={addTitle}></Cards>)
            }
        </div>
        <div className="w-[25%] bg-white rounded-lg px-4 py-5 h-[70vh] overflow-auto">
        <Cart titleArr={titleArr}></Cart>
        <ToastContainer></ToastContainer>
        </div>
       </div>
    );
};

export default Container;