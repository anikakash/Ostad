import React, { useRef } from "react";

const App = () => {
  let APIData = useRef(null);
  let myPTag = useRef();

  const featchData = async () => {
    const respons = await fetch("https://dummyjson.com/products");
    APIData.current = await respons.json();
  };

  const showData = () => {
    myPTag.current.innerText = JSON.stringify(APIData.current);
  };

  return (
    <div>
      <p ref={myPTag}></p>

      <button onClick={featchData}>Call API</button>
      <button onClick={showData}>Show Data</button>
    </div>
  );
};

export default App;
