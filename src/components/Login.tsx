import React, { useContext, useState } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login here</h2>

      <input
        type="text"
        placeholder="email"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name=""
        id=""
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} className="p-1 rounded-full bg-blue-500">
        CLick me
      </button>
    </div>
  );
};

export default Login;
