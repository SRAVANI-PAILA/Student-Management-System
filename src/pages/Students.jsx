import React, { useEffect, useState } from "react";
import {
  getStudents,
  deleteStudent
} from "../services/studentService";

import { Link } from "react-router-dom";

import "./Students.css";

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = () => {

    getStudents()
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

  const handleDelete = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {

      deleteStudent(id)
        .then(() => {

          alert("Student deleted successfully!");

          loadStudents();

        })
        .catch((error) => {
          console.log(error);
        });

    }
  };

  return (

    <div className="students-page">

      <div className="students-header">

        <div>
          <h1>Students</h1>
          <p>Manage all student records</p>
        </div>

        <Link to="/add-student">
          <button className="add-btn">
            + Add Student
          </button>
        </Link>

      </div>

      <div className="table-card">

        <table>

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll No</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Course</th>
              <th>Year</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td className="student-name">
                  {student.name}
                </td>

                <td>{student.rollNo}</td>

                <td>{student.email}</td>

                <td>{student.phone}</td>

                <td>
                  <span className="course-badge">
                    {student.course}
                  </span>
                </td>

                <td>{student.year}</td>

                <td className="actions">

                  <Link to={`/student/${student.id}`}>
                    <button className="view-btn">
                      View
                    </button>
                  </Link>

                  <Link to={`/edit-student/${student.id}`}>
                    <button className="edit-btn">
                      Edit
                    </button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() =>
                      handleDelete(student.id)
                    }
                  >
                    Delete
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Students