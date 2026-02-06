import React, { useState, useCallback, useEffect, useRef } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(8);
  const [numAllowed, setNumberAllowed] = useState<boolean>(false);
  const [charAllowed, setCharAllowed] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  //useRef

  const passwordRef = useRef(null);

  const pwGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "-_&%$#@*?";

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);



  const copyPasswordToClipBoard =
    useCallback(()=>{window.navigator.clipboard.writeText(password)},[password])
  
  useEffect(() => {
    pwGen();
  }, [length, numAllowed, charAllowed, pwGen]);

  return (
    <>
      <h1 className="text-4xl text-center">Password Generator</h1>
      <div className="flex">
        <input
          type="text"
          placeholder="Password"
          className="bg-yellow-600  text-black p-2 rounded-2xl rounded-r-none outline-none "
          value={password}
          readOnly
          ref={passwordRef}
        //useRef
         
        />
        <button className="bg-green-600 rounded-full p-2 rounded-l-none hover:cursor-pointer" onClick={copyPasswordToClipBoard}>
          copy
        </button>
      </div>
      <div className="flex gap-4 bg-gray-500 p-4 rounded-2xl">
        <div>
          <label htmlFor="">password length: {length}</label> <br />
          <input
            type="range"
            min={8}
            max={24}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col ">
          <label htmlFor="">Contains Numbers:</label>
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={numAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Contains special character:</label>
          <input
            type="checkbox"
            name=""
            id=""
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
};

export default PasswordGenerator;
