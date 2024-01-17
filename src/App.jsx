import './App.css'
import { useState } from "react";


export default function App() {
  return (
    <div className="App">
      <h1>Coin Flipper 🪙</h1>
      <Flip />
    </div>
  );
}

// Flip Function

function Flip() {

  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [coinSide, setCoinSide] = useState("heads");

  function flipCoin() {

    let flip = Math.random();
    if (flip < 0.5) {
      flip = "heads";
      setHeadsCount(headsCount + 1);
      setCoinSide("heads");
    } else {
      flip = "tails";
      setTailsCount(tailsCount + 1);
      setCoinSide("tails");
    }
  }

  function reset() {
    setHeadsCount(0);
    setTailsCount(0);
    setCoinSide("heads");
  }

  return (
    <div>
      <div className="coin">
        <img
          src={
            coinSide === "heads"
              ? "https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-general-george-washington-crossing-the-delaware-quarter-uncirculated-obverse-philadelphia-768x768.jpg"
              : "https://jeremythemagician.com/wp-content/uploads/2012/11/Quarter_new.jpg"
          }
          alt="Coin"
        />
      </div>
      <button onClick={flipCoin}>Click to flip!</button>
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

