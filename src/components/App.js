import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
const [sushiData, setSushiData] = useState([])
const [money, setMoney] = useState(200)

useEffect(() => {
  fetch(API)
  .then( res => res.json() )
  .then( sushiData => setSushiData(sushiData))
}, [])

const eatenSushi = (oneSushi) => {
  if (oneSushi.price <= money){
  setSushiData(
    sushiData.map(
      (newSushi) => 
      (oneSushi.id === newSushi.id ? 
      {...newSushi, eaten: true} : newSushi)
    ));
    setMoney(money - oneSushi.price)
  }
  }



  return (
    <div className="app">
      <SushiContainer sushiData={sushiData} eatenSushi={eatenSushi} />
      <Table plates={sushiData.filter((p)=> p.eaten)} money={money} />
    </div>
  );
}

export default App;
