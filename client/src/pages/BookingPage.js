import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { DatePicker, message, TimePicker } from "antd";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import Navbar from "../components/Navbar";

const BookingPage = () => {
  const { user } = useSelector((state) => state.user);
  const params = useParams();
  const [doctors, setDoctors] = useState([]);
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const dispatch = useDispatch();
  // login user data
  const getUserData = async () => {
    console.log('refreshed');
    try {
      const res = await axios.post(
        "/api/v1/doctor/getDoctorById",
        { doctorId: params.doctorId },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // ============ handle availiblity
  const handleAvailability = async (event) => {
    event.preventDefault();
    try {
      // dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/booking-availbility",
        { doctorId: params.doctorId, date, time, doctor: doctors },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // dispatch(hideLoading());
      if (res.data.success) {
        if (res.data.isAvailable) setIsAvailable(true);
        console.log(res.data.isAvailable);
        message.success(res.data.message);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      // dispatch(hideLoading());
      console.log(error);
    }
  };
  // =============== booking func
  const handleBooking = async () => {
    try {
      setIsAvailable(true);
      // console.log(date); console.log(time);
      if (!date && !time) {
        return alert("Date & Time Required");
      }
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/book-appointment",
        {
          doctorId: params.doctorId,
          userId: user._id,
          doctorInfo: doctors,
          userInfo: user,
          date: date,
          time: time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    //eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      <div className="appointment-bar-top mt-3 d-flex align-items-center">
        <div className="our-doctors-content">
          <h1 className=' display-3'>Book Appointment</h1>
        </div>
      </div>
      <div className="booking-card d-flex justify-content-center">
        <div className="container">
          {doctors && (
            <div>
              <h4>
                Dr.{doctors.firstName} {doctors.lastName}
              </h4>
              <h4>Fees : {doctors.feesPerCunsaltation}</h4>
              <h4>
                Timings : {doctors.timings && doctors.timings[0]} -{" "}
                {doctors.timings && doctors.timings[1]}{" "}
              </h4>
              <div className="d-flex flex-column">
                <DatePicker
                  aria-required={"true"}
                  className="mt-3"
                  format="DD-MM-YYYY"
                  onChange={(value) => {
                    if (value) {
                      // console.log(moment(value.$d).format("DD-MM-YYYY"));
                      setDate(moment(value.$d).format("DD-MM-YYYY"));
                    }
                  }}
                />
                <TimePicker
                  aria-required={"true"}
                  format="HH:mm"
                  className="mt-3"
                  onChange={(value) => {
                    if (value) {
                      // console.log(moment(value.$d).format("HH:mm"));
                      setTime(moment(value.$d).format("HH:mm"));
                    }
                  }}
                />

                <button
                  className="btn btn-primary mt-2"
                  onClick={handleAvailability}
                >
                  Check Availability
                </button>

                {isAvailable ?
                  <>
                    <button className="btn btn-dark mt-2" onClick={handleBooking}>
                      Book Now
                    </button>
                  </> : null}

              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPage;