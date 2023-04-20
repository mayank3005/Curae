import React from "react";
import { useNavigate } from "react-router-dom";

const DoctorCards = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="card my-4 mx-4"
        style={{ cursor: "pointer" }}
      >
        <div className="card-header">
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className="card-body">
          <p>
            <b>Specialization</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience</b> {doctor.experience}
          </p>
          <p>
            <b>Fees Per Cunsaltation</b> Rs. {doctor.feesPerCunsaltation}
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
          <button className="btn btn-primary" onClick={() => navigate(`/doctor/book-appointment/${doctor._id}`)}>Make an appointment</button>
        </div>
      </div>
    </>
  );
};

export default DoctorCards;