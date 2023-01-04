import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
// import uid from 'uid'

function Add({ students, setstudents, setIsAdding }) {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [roll, setroll] = useState('');
    const [checkIn, setcheckIn] = useState('');
    const [checkOut, setcheckOut] = useState('');

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!firstName || !lastName || !roll || !checkIn || !checkOut) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = Date.now();
        const newstudent = {
            id,
            firstName,
            lastName,
            roll,
            checkIn,
            checkOut
        }
        students.push(newstudent);
        setstudents(localStorage.setItem('students',JSON.stringify(students)));
        setstudents(JSON.parse(localStorage.getItem('students')||'[]'))
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: `${firstName} ${lastName}'s data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }


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
                    type="text"
                    name="roll"
                    value={roll}
                    onChange={e => setroll(e.target.value)}
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
                    <input type="submit" value="Add" />
                    <input
                        style={{ marginLeft: '12px' }}
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

export default Add