import React,{useState} from "react";
import { CartProvider, useCart } from "react-use-cart";


const Cart = () => {
  const {
    //الاسماء دي جاهزة في اليوز كارت كل اسم بيدل علي اللي بيعمله
    isEmpty,
    //دي العدد للمنتج الواحد
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
 
  
   
 const [amount] = useState('');

 const handleSubmit = (e) =>{
  e.preventDefault();
  if(amount === "cartTotal"){
    alert('please enter amount');
  }else{
  var options = {
    key:"rzp_test_crnhw5UJ4dhfcC",
    key_secret:"BlpY6JJpKtU45mZRJfWh124g",
    amount:cartTotal*100, // Example: 2000 paise = INR 20
    currency:"INR",
    name:"STARTUP_PROJECTS",
    description:"for testing purpose",
    handler:function(response){
      alert(response.razorpay_payment_id);
    },
    prefill:{
      name:"Anand",
      email:"yanianand571@gmail.com",
      contact:"7338939037"
    },
    notes:{
      address:"Razorpay cororate office"
    },
    theme:{
      color:"#3399cc"
    }
  };
  var pay = new window.Razorpay(options);
  pay.open();
}
 };
  if (isEmpty) return <h1 className="text-center">  </h1>;
  return (
    <section className="container mb-5 mt-5">
      <div className="row jistufy-content-center">
        <div className="col-12">
          <h5>
            {" "}
            Cart ({totalUniqueItems}) total Item :({totalItems})
          </h5>
          <table className="table table-light m-0">
            <tbody>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} />
                    </td>

                    <td>{item.title}</td>

                    <td>{item.price}</td>

                    <td>Quantity({item.quantity})</td>

                    <td>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        -{" "}
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="btn btn-info ms-2"
                      >
                        {" "}
                        +{" "}
                      </button>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="btn btn-danger ms-2"
                      >
                        {" "}
                        RemoveItem{" "}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="col-auto ms-auto">
            <h2 value={amount}> total price: {cartTotal} $ </h2>
          </div>
        </div>
        <div className="col-auto mb-2">
          <button onClick={() => emptyCart()} className="btn btn-danger ms-2">
            Clear Cart
          </button>
          <button onClick={handleSubmit} className="btn btn-primary ms-2" >
            Buy Now
          </button>
    

        </div>
      </div>
    </section>
  );
};

export default Cart;
