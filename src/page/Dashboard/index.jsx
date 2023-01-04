import React, { useState } from 'react'
import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { studentsData } from '../../Data';
import { useEffect } from 'react';

function Dashboard() {

    // const studentsData = JSON.parse(localStorage.getItem("students") || "[]");
    // console.log(studentsData);

    const [students, setstudents] = useState(JSON.parse(localStorage.getItem('students')||'[]'));
    // const [students,setStudents]=useState(studentsData)
    const [selectedstudent, setSelectedstudent] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);




    const handleEdit = (id) => {
        const [student] = students.filter(student => student.id === id);

        setSelectedstudent(student);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            
            if (result.value) {
                console.log(result.value);
                const [student] = students.filter(student => student.id === id);
                

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text: `${student.firstName} ${student.lastName}'s data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setstudents(localStorage.setItem('students',JSON.stringify(students.filter(student => student.id !== id))) );
                setstudents(JSON.parse(localStorage.getItem('students')||'[]'))

                
            }
        });
        
    }
    

    useEffect(()=>{
        setstudents(JSON.parse(localStorage.getItem("students") || "[]"));
    },[])
    

    return (
        <div className='container'>
            {/* List */}
            {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                        students={students}
                    />
                    <List
                        students={students}
                        handleEdit={handleEdit}
                        handleDelete={handleDelete}
                    />
                </>
            )}
            {/* Add */}
            {isAdding && (
                <Add
                    students={students}
                    setstudents={setstudents}
                    setIsAdding={setIsAdding}
                />
            )}
            {/* Edit */}
            {isEditing && (
                <Edit
                    students={students}
                    selectedstudent={selectedstudent}
                    setstudents={setstudents}
                    setIsEditing={setIsEditing}
                />
            )}
            <h1>haha</h1>
        </div>
    )
}

export default Dashboard;
