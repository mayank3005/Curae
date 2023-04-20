import React, { useEffect, useState } from 'react'
import DoctorCards from '../components/DoctorCards'
import Navbar from '../components/Navbar'
import axios from 'axios';

const BookAppointment = () => {

  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  // login user data
  const getDoctorsData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/user/getAllDoctors",
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

  useEffect(() => {
    getDoctorsData();
  }, []);

  return (
    <>
      <Navbar />

      <div className="appointment-bar-top mt-3 d-flex align-items-center">
        <div className="our-doctors-content">
          <h1 className=' display-3'>Our Doctors</h1>
        </div>
      </div>

      <div className="main-book-appointment text-center mt-5">
        <div className="box-heading py-1 mb-2">
          <p className='my-0'>Our Doctors</p>
        </div>
        <div className="all-doctors-section px-5 mt-4">
          <div className="d-flex justify-content-center w-50 mx-auto mb-5" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search}
              onChange={(e) => { setSearch(e.target.value) }}
            />
          </div>
          <div className=" flex-wrap d-flex justify-content-center">
            {doctors && doctors.filter((doctor) => search === '' || (doctor.firstName.toLowerCase().includes(search.toLowerCase())) ||
              (doctor.lastName.toLowerCase().includes(search.toLowerCase())) ||
              (doctor.specialization.toLowerCase().includes(search.toLowerCase()))
            ).map(doctor => <DoctorCards doctor={doctor} />)
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default BookAppointment