import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  interface userProps {
    username: string;
    password: string;
  }
  const [user, setUser] = React.useState<userProps>();
  return (
    <UserContext value={{ user, setUser }}>
      {children}
    </UserContext>
  );
};

export default UserContextProvider;
