import React, { useState } from "react";


const test = () => {
  const [color, setColor] = useState<string>("olive");
  const body= document.getElementById("root");
  body.style.backgroundColor  = color;
  return (
    <>
      <footer className="fixed bottom-10 w-fit text-white bg-white rounded-2xl flex gap-4 justify-evenly px-4 py-2">
        <button
          className="py-0.5 px-2 rounded-lg bg-red-500  cursor-pointer border "
          onClick={() => {
            setColor("red");
          }}
        >
          RED
        </button>
        <button
          className="py-0.5 px-2 rounded-lg cursor-pointer bg-blue-500"
          onClick={() => {
            setColor("blue");
          }}
        >
          BLUE
        </button>
        <button
          className="py-0.5 px-2 rounded-lg bg-white border cursor-pointer border-black text-black"
          onClick={() => {
            setColor("white");
          }}
        >
          WHITE
        </button>
        <button
          className="py-0.5 px-2 rounded-lg cursor-pointer bg-yellow-500"
          onClick={() => {
            setColor("yellow");
          }}
        >
          YELLOW
        </button>
        <button
          className="py-0.5 px-2 rounded-lg cursor-pointer bg-black"
          onClick={() => {
            setColor("black");
          }}
        >
          BLACK
        </button>
      </footer>
    </>
  );
};

export default test;
