import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [renderPara, setRenderPara] = useState(false);
  const handleClick=()=> setRenderPara(true);
  const text="Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
  return (
    <div id="main">
    {renderPara && <p id="para">
          {text}
        </p>}
    {!renderPara && <button id="click" onClick={handleClick}>
            click me
          </button>}
      // Do not alter the main div
    </div>
  );
}


export default App;
