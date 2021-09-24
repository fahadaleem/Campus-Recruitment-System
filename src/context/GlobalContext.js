import React, { useState, createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  getDatabase,
  set,
  ref,
  child,
  get,
} from "../firebase/firebaseConfig";
import Swal from "sweetalert2";

const GlobalContext = createContext();

// create a provider
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);
  const history = useHistory();

  // login user function
  const handleLoginUser = (userData) => {
    const auth = getAuth();

    // check if the user is not admin
    // referece of database
    const dbRef = ref(getDatabase());
    // generate key from the email and account type
    const userId = handleGenerateUniqueKey(
      userData.accountType,
      userData.email
    );
    // search the key in the database
    get(child(dbRef, `users/${userId}`))
      .then((snapshot) => {
        // if the key is available in the database then login the user
        if (snapshot.exists()) {
          console.log(snapshot.val());
          // login function
          signInWithEmailAndPassword(auth, userData.email, userData.password)
            .then((userCredential) => {
              // Signed in
              Swal.fire({
                icon: "success",
                title: "Login Successful",
              }).then((error) => {
                console.log(userId);
                const userObj = {
                  ...userData,
                  userId: userId,
                };
                setUser(userObj);
                localStorage.setItem("user", JSON.stringify(userObj));
                history.push("/student");
              });
              // ...
            })
            .catch((error) => {
              const errorMessage = error.message;
              setError(errorMessage);
              // ..
            });
        } else {
          // if no key is available then show message
          Swal.fire({
            icon: "error",
            title: "No data available",
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // create a function to replace email's dot with dash
  const handleGenerateUniqueKey = (accountType, email) => {
    const emailKey = email.replace(".", "-");
    return accountType + "-" + emailKey;
  };

  // function to signup a user
  const handleSignupUser = (userDetails) => {
    const auth = getAuth();
    // signup a user with email and password
    createUserWithEmailAndPassword(
      auth,
      userDetails.email,
      userDetails.password
    )
      // if signup is successful
      .then((userCredential) => {
        // generate unique key and save it to database
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
        Swal.fire({
          icon: "success",
          title: "Account Created",
          text: "You can now login",
        }).then((resp) => history.push("/login"));
        // ...
      })
      // if there is an error show error message
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };

  const handleLogout = () => {
    const auth = getAuth();
    auth.signOut().then(() => {
      setUser({});
      history.push("/login");
    });
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        handleLoginUser: handleLoginUser,
        handleSignupUser: handleSignupUser,
        handleLogout: handleLogout,
        error,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
