import React from "react";

function Sushi({oneSushi, eatenSushi}) {

  return (
    <div className="sushi">
      <div key={oneSushi.id} className="plate" onClick={() =>eatenSushi(oneSushi)}>
        {/* Tell me if this sushi has been eaten! */}
        {oneSushi.eaten ? null : (
          <img
            src={oneSushi.img_url}
            alt={oneSushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {oneSushi.name} - ${oneSushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
