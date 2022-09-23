import React from "react";
import ItemCard from "./ItemCard";
import data2 from "./data2";

const Dinner1 = () => {
  return (
    <>
      <h1 className="text-center mt-3"></h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data2.product.map((item, index) => {
            return (
              <ItemCard
                img={item.img}
                price={item.price}
                del={item.del}
                title={item.title}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>



    </>
  );
};
export default Dinner1;
