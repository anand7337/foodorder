import React from "react";
import Anand1 from "./Anand1";
import data2 from "./data2";

const Dinner1 = () => {
  return (
    <>
      <h1 className="text-center mt-3"></h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {data2.product.map((item, index) => {
            return (
              <Anand1
              
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
