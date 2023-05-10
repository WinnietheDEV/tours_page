import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, removeTour }) => {
  return (
    <div>
      {tours.map((tour) => {
        return <Tour {...tour} removeTour={removeTour} key={tour.id} />;
      })}
    </div>
  );
};

export default Tours;
