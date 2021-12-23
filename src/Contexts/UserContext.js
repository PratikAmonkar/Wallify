import React, { useState, useEffect, useContext } from "react";

const UserContext = React.createContext();

export function useUser() {
  return useContext(UserContext);
}

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState("");
  const [currentUserData, setCurrentUserData] = useState("");

  useEffect(() => {
    checkUser();
  }, [setCurrentUser]);

  const checkUser = () => {
    const loginUser = localStorage.getItem("currentUser");
    if (loginUser) {
      getUser(loginUser);
    } else {
      console.log("false");
    }
  };

  const getUser = (loginUser) => {
    return fetch(`http://localhost:5000/api/v1/authenticate/user/${loginUser}`)
      .then((res) => {
        res
          .json()
          .then((result) => {
            setCurrentUserData(result);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const value = { currentUser, setCurrentUser, currentUserData };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
