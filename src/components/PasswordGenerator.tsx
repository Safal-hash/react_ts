import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(8);
  const [numAllowed, setNumberAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [copy, setCopy] = useState<string>("COPY");

  //useRef

  const passwordRef = useRef(null);

  const pwGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "-_&%$#@*?";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length);

      pass += str.charAt(char);
    }

    setPassword(pass.trim());
  }, [length, numAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(() => {
    if (passwordRef.current) {
      passwordRef.current.select();
      setCopy("COPIED!");
      setTimeout(() => {
        setPassword((prev) => prev + " ");

        setCopy("COPY");
      }, 1400);
    }
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    pwGen();
  }, [length, numAllowed, charAllowed, pwGen]);

  return (
    <>
      <div className="bg-[#eff2ef] p-4 flex flex-col gap-2.5 h-fit jus rounded-2xl items-center">
        <div className="flex justify-center items-center gap-0 w-auto border border-black overflow-hidden rounded-full">
          <input
            type="text"
            placeholder="Password"
            className="bg-white select-all selection:bg-gray-500  text-black p-2 rounded-2xl w-auto tracking-wider text-sm rounded-r-none outline-none "
            value={password}
            size={Math.max(password.length + 2, 14)}
            readOnly
            ref={passwordRef}
            //useRef
          />
          <button
            className="bg-rose-950 rounded-full p-2 rounded-l-none text-sm hover:cursor-pointer"
            onClick={copyPasswordToClipBoard}
          >
            {copy}
          </button>
        </div>

        <div className="text-[#373737] relative">
          <label htmlFor="" className="text-sm">
            {" "}
            Password Length: <span className="text-pink-950 font-semibold">{length}</span>
          </label>{" "}
          <br />
          <input
            type="range"
            min={8}
            max={24}
            defaultValue={8}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
            className="h-max rounded-full accent-pink-950 appearance-none bg-gray-300"
          />
          <span className="text-xs text-body absolute start-0 -bottom-3.5">
            8
          </span>
          <span className="text-xs text-body absolute left-[48%] -translate-x-1/2 rtl:translate-x-1/2 -bottom-3.5">
            16
          </span>
          <span className="text-xs text-body absolute end-1 -bottom-3.5">24</span>
        </div>
        <div className="flex flex-col gap-1  mt-2">
          <label htmlFor="" className="text-xs text-gray-500">
            Include:
          </label>
          <div className="flex gap-2 text-[#373737]  text-xs">
            <div className="flex gap-1">
              <label htmlFor="" className="text-xs">
                Numbers
              </label>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={numAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              
              />
            </div>
            <div className="flex gap-1">
              <label htmlFor="" className="text-xs">
                Special Character
              </label>
              <input
                type="checkbox"
                name=""
                id=""
                defaultChecked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
