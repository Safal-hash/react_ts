import React from "react";
import { useParams } from "react-router-dom";
interface CardProps {
  date?: number;
}

const Card = (props: CardProps) => {
  const { userid } = useParams();
  return (
    <div className="p-10">
      <div className="flex flex-col px-2.5 py-4 w-70 bg-white justify-between gap-2 rounded-3xl  ">
        <div className="flex justify-between gap-10 text-[.65rem] ">
          <div className="bg-black/80 rounded-lg p-1 text-white">
            Lush and Green
          </div>
          <div className="bg-black/80 rounded-lg p-1 text-white">
            Jan{" "}
            <span className="bg-white text-black px-2 py-1 rounded-lg">
              {props.date || 22}
            </span>
          </div>
        </div>

        <div className="">
          <h1 className="text-black text-lg">Discovering Peace</h1>
          <p className="text-gray-400 text-xs font-[250]">
            Far from city's noise, the green mountains stretch endlessly into
            the horizon, blanketed with mist and silence.
          </p>
        </div>

        <div className=" relative w-full h-50 overflow-hidden  rounded-xl">
          <img
            src="/ridge.jpg"
            alt="nature"
            className=" h-full object-center object-cover contrast-90"
          />
          <span className="absolute bottom-5 p-2 text-xs text-white">
            📍 Tokha Village <br /> Kathmandu,Nepal
          </span>
        </div>
        <span>{userid}</span>
      </div>
    </div>
  );
};

export default Card;
