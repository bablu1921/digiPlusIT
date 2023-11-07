import React, { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
// import uid from 'uid'

function Add({ students, setstudents, setIsAdding }) {
  const [firstName, setFirstName] = useState("");
  const [location, setlocation] = useState("");
  const [cgpa, setcgpa] = useState("");
  const [checkIn, setcheckIn] = useState("");
  const [checkOut, setcheckOut] = useState("");

  const textInput = useRef(null);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();
    if (!firstName || !location || !cgpa) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const id = Date.now();
    const newstudent = {
      id,
      firstName,
      location,
      cgpa,
    };
    students.push(newstudent);
    setstudents(localStorage.setItem("students", JSON.stringify(students)));
    setstudents(JSON.parse(localStorage.getItem("students") || "[]"));
    setIsAdding(false);

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${firstName} ${location}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add student</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          ref={textInput}
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          name="location"
          value={location}
          onChange={(e) => setlocation(e.target.value)}
        />
        <label htmlFor="cgpa">CGPA</label>
        <input
          id="cgpa"
          type="text"
          name="cgpa"
          value={cgpa}
          onChange={(e) => setcgpa(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Add;
