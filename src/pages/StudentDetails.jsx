import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getStudentById } from "../services/studentService";

import "./StudentDetails.css";

function StudentDetails() {

  // URL nundi student ID ni get chestundi
  const { id } = useParams();

  // Student details store cheyadaniki state
  const [student, setStudent] = useState(null);


  // Student details fetch cheyadam
  useEffect(() => {

    getStudentById(id)
      .then((response) => {

        setStudent(response.data);

      })
      .catch((error) => {

        console.log(error);

      });

  }, [id]);


  // Data load ayye varaku
  if (!student) {
    return (
      <div className="details-loading">
        <h2>Loading...</h2>
      </div>
    );
  }


  return (
    <div className="details-page">

      <div className="details-container">


        {/* Heading */}

        <div className="details-heading">

          <div className="details-icon">
            👨‍🎓
          </div>

          <h1>Student Details</h1>

          <p>
            View complete student information
          </p>

        </div>


        {/* Student Card */}

        <div className="details-card">


          {/* Name */}

          <div className="detail-item">
            <span className="detail-label">
              Name
            </span>

            <span className="detail-value">
              {student.name}
            </span>
          </div>


          {/* Roll Number */}

          <div className="detail-item">
            <span className="detail-label">
              Roll Number
            </span>

            <span className="detail-value">
              {student.rollNo}
            </span>
          </div>


          {/* Email */}

          <div className="detail-item">
            <span className="detail-label">
              Email
            </span>

            <span className="detail-value">
              {student.email}
            </span>
          </div>


          {/* Phone */}

          <div className="detail-item">
            <span className="detail-label">
              Phone
            </span>

            <span className="detail-value">
              {student.phone}
            </span>
          </div>


          {/* Gender */}

          <div className="detail-item">
            <span className="detail-label">
              Gender
            </span>

            <span className="detail-value">
              {student.gender}
            </span>
          </div>


          {/* Course */}

          <div className="detail-item">
            <span className="detail-label">
              Course
            </span>

            <span className="detail-value course-value">
              {student.course}
            </span>
          </div>


          {/* Year */}

          <div className="detail-item">
            <span className="detail-label">
              Year
            </span>

            <span className="detail-value">
              {student.year}
            </span>
          </div>


          {/* Address */}

          <div className="detail-item address-item">
            <span className="detail-label">
              Address
            </span>

            <span className="detail-value">
              {student.address}
            </span>
          </div>


          {/* Back Button */}

          <div className="details-actions">

            <Link to="/students">
              <button className="back-btn">
                ← Back to Students
              </button>
            </Link>

          </div>


        </div>

      </div>

    </div>
  );
}

export default StudentDetails;