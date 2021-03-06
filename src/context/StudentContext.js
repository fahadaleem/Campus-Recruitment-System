import React, { useContext, useState, createContext } from "react";
import Swal from "sweetalert2";
import { getDatabase, ref, set, child, get } from "../firebase/firebaseConfig";
import { GlobalContext } from "./GlobalContext";

export const StudentContext = createContext();

// create provide for student contexst
export const StudentProvider = (props) => {
  const { user } = useContext(GlobalContext);
  const dbRef = ref(getDatabase());

  const [userProfile, setProfile] = useState({
    about: "",
    address: "",
    cgpa: "",
    college: "",
    currentYear: "",
    degree: "",
    dob: "",
    education: "",
    email: "",
    enrollmentNo: "",
    fatherName: "",
    gender: "",
    github: "",
    linkedIn: "",
    name: "",
    phone: "",
    portfolio: "",
    skillName: "",
    skills: [],
    isActivate: false,
  });
  async function handleSaveStudentProfile(profile) {
    try {
      const db = getDatabase();
      console.log(profile);
      set(ref(db, "students/" + user.userId), profile);
      Swal.fire({
        icon: "success",
        title: "Profile Created!",
        text: "Your profile has been created!",
      });
    } catch (error) {
      Swal.fire(error.message);
    }
  }

  async function handleGetUserProfile() {
    try {
      get(child(dbRef, `students/${user.userId}`)).then((snapshot) => {
        // if the key is available in the database then login the user
        if (snapshot.exists()) {
          console.log(snapshot.val(), "sanp");
          let userVal = snapshot.val();
          setProfile(userVal);
        }
      });
    } catch (error) {}
  }

  return (
    <StudentContext.Provider
      value={{
        handleSaveStudentProfile: handleSaveStudentProfile,
        userProfile: userProfile,
        handleSetProfile: setProfile,
        handleGetUserProfile: handleGetUserProfile,
      }}
    >
      {props.children}
    </StudentContext.Provider>
  );
};
