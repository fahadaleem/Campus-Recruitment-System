import React, { useState, useContext, createContext } from "react";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getDatabase,
  set,
  ref,
} from "../firebase/firebaseConfig";

const GlobalContext = createContext();

// create a provider
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleLoginUser = (userData) => {
    const auth = getAuth();
    console.log("userData", userData);
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  // create a function to replace email's dot with dash
  const handleGenerateUniqueKey = (accountType, email) => {
    const emailKey = email.replace(".", "-");
    return accountType + "-" + emailKey;
  };

  const handleSignupUser = (userDetails) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      .then((userCredential) => {
        const key = handleGenerateUniqueKey(
          userDetails.accountType,
          userDetails.email
        );
        const db = getDatabase();
        set(ref(db, "users/" + key), {
          ...userDetails,
          key: key,
        });
        // Signed in
        const user = userCredential.user;
        history.push("/login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  return (
    <GlobalContext.Provider
      value={{
        handleLoginUser: handleLoginUser,
        handleSignupUser: handleSignupUser,
        error,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
