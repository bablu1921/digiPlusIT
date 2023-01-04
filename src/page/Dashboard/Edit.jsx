import React, { useState } from 'react'
import Swal from 'sweetalert2';

function Edit({ students, selectedstudent, setstudents, setIsEditing }) {

    const id = selectedstudent.id;

    const [firstName, setFirstName] = useState(selectedstudent.firstName);
    const [lastName, setLastName] = useState(selectedstudent.lastName);
    const [roll, setRoll] = useState(selectedstudent.roll);
    const [checkIn, setcheckIn] = useState(selectedstudent.checkIn);
    const [checkOut, setcheckOut] = useState(selectedstudent.checkOut);

    const handleUpcheckOut = e => {
        e.preventDefault();

        if (!firstName || !lastName || !roll || !checkIn || !checkOut) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const student = {
            id,
            firstName,
            lastName,
            roll,
            checkIn,
            checkOut
        };

        for (let i = 0; i < students.length; i++) {
            if (students[i].id === id) {
                students.splice(i, 1, student);
                break;
            }
        }

        setstudents(localStorage.setItem('students',JSON.stringify(students)));
        setstudents(JSON.parse(localStorage.getItem('students')||'[]'))
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'UpcheckOutd!',
            text: `${student.firstName} ${student.lastName}'s data has been updated.`,
            showConfirmButton: false,
            timer: 1500
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
                    onChange={e => setFirstName(e.target.value)}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                />
                <label htmlFor="roll">Roll Number</label>
                <input
                    id="roll"
                    type="number"
                    name="roll"
                    value={roll}
                    onChange={e => setRoll(e.target.value)}
                />
                <label htmlFor="checkIn">Check In</label>
                <input
                    id="checkIn"
                    type="text"
                    name="checkIn"
                    value={checkIn}
                    onChange={e => setcheckIn(e.target.value)}
                />
                <label htmlFor="checkOut">Check Out</label>
                <input
                    id="checkOut"
                    type="text"
                    name="checkOut"
                    value={checkOut}
                    onChange={e => setcheckOut(e.target.value)}
                />
                <div style={{ marginTop: '30px' }}>
                    <input type="submit" value="Update Student" />
                    <input
                        style={{ marginLeft: '12px' }}
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

export default Edit