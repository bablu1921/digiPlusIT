import React from 'react'

function Header({ setIsAdding,students }) {
    return (
        <header>
            <h1>Student Attendance Management System</h1>
            <div style={{ marginTop: '30px', marginBottom: '18px',justifyContent:'space-between' }}>
                <button onClick={() => setIsAdding(true)} className='round-button'>Add Student</button>
                <h1>Total Students in School: {students.length}</h1>
            </div>
        </header>
    )
}

export default Header