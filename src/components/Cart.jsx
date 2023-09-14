import PropTypes from 'prop-types'
const Cart = ({titleArr,totalPrice,addHour}) => {
    return (
        <div>
            <h1 className="font-bold text-xl text-blue-500 border-b-2 pb-5">Credit Hour Remaining 7 hr</h1>
            <h1 className="font-bold text-xl py-5">Course Name</h1>
            <div className="border-b-2 pb-5">
                  {
                    titleArr.map((title,index)=> <p key={index}>{index+1} {title} </p>)
                  }
            </div>
            <h2 className="text-base font-semibold border-b-2 text-gray-500 py-5">Total Credit Hour : {addHour}</h2>
            <h2 className="text-base font-semibold text-gray-500 py-5">Total Price : {totalPrice} USD</h2>
        </div>
    );
};
Cart.propTypes = {
    titleArr: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    addHour: PropTypes.number.isRequired,
}
export default Cart;