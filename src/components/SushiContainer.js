import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushiData, eatenSushi}) {
const [sushiIndex, setSushiIndex] = useState(0)
const sushiPlus = sushiIndex + 4;

const sushiObj = sushiData.slice(sushiIndex,sushiPlus).map(sushi => {
  return <Sushi oneSushi={sushi} key={sushi.id} eatenSushi={eatenSushi}/>
})


const next4= () => {
  setSushiIndex(sushiPlus)
}

  return (
    <div className="belt">
      {sushiObj}
      <MoreButton next4={next4}/>
    </div>
  );
}

export default SushiContainer;
