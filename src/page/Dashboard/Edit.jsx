import React, { useState } from "react";
import Swal from "sweetalert2";

function Edit({ students, selectedstudent, setstudents, setIsEditing }) {
  const id = selectedstudent.id;

  const [firstName, setFirstName] = useState(selectedstudent.firstName);
  const [location, setlocation] = useState(selectedstudent.location);
  const [cgpa, setcgpa] = useState(selectedstudent.cgpa);

  const handleUpcheckOut = (e) => {
    e.preventDefault();

    if (!firstName || !location || !cgpa) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }

    const student = {
      id,
      firstName,
      location,
      cgpa,
    };

    for (let i = 0; i < students.length; i++) {
      if (students[i].id === id) {
        students.splice(i, 1, student);
        break;
      }
    }

    setstudents(localStorage.setItem("students", JSON.stringify(students)));
    setstudents(JSON.parse(localStorage.getItem("students") || "[]"));
    setIsEditing(false);

    Swal.fire({
      icon: "success",
      title: "UpcheckOutd!",
      text: `${student.firstName} ${student.location}'s data has been updated.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleUpcheckOut}>
        <h1>Edit student</h1>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
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
          type="number"
          name="cgpa"
          value={cgpa}
          onChange={(e) => setcgpa(e.target.value)}
        />
        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Update Student" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsEditing(false)}
          />
        </div>
      </form>
    </div>
  );
}

export default Edit;
