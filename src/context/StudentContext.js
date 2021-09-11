import React, {useContext, useState, createContext} from "react";
const StudentContext = createContext();

// create provide for student contexst
export const StudentProvider = (props) => {
    const [students, setStudents] = useState([
        {
            name: "John",
            age: "20",
            id: 1
        },
        {
            name: "Jane",
            age: "21",
            id: 2
        },
        {
            name: "Joe",
            age: "22",
            id: 3
        }
    ]);
    return (
        <StudentContext.Provider value={[students, setStudents]}>
            {props.children}
        </StudentContext.Provider>
    );
}