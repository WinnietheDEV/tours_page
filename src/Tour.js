import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  // console.log(tours);
  const [isShow, setShow] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt="" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">{price}</h4>
        </div>
        <p>
          {isShow ? info : `${info.split(" ").slice(0, 30).join(" ")} . . .`}
          {isShow ? (
            <button onClick={() => setShow(!isShow)}>hide</button>
          ) : (
            <button onClick={() => setShow(!isShow)}>show more</button>
          )}
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
