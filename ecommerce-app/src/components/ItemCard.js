import React from "react";
import { useCart } from "react-use-cart";
import './Home.css';

const ItemsCard = (props) => {
  const { addItem } = useCart();
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow card02">
        <img
          src={props.img}
          className="card-img-top img-fluid"
          alt={props.title}
        />

        <div className="card-body text-center">
          <h5 className="card-title">{props.title}</h5>
          <h5 className="card1">${props.del}<span class="pl-3"></span> ${props.price}</h5>

          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemsCard;
