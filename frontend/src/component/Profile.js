import React, { useEffect, useState } from 'react'
import './Profile.css'
import report from '../images/report.png';
import User from '../images/user.png';
import tracking from '../images/tracking.png';
import { useNavigate } from 'react-router-dom';

const Profile = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ' ',
    city: '',
    state: ''
  });

  const callAboutPage = async () => {
    try {
      const res = await fetch('/about', {
        method: 'GET',
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
      })

      const data = await res.json();
      console.log(data);
      setUser(data);

      if (!res.status === 200) {
        throw new Error(res.error);
      }

    } catch (err) {
      console.log(err);
      navigate('/login');
    }
  }

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <>
      <div className='Profile container mt-5'>
        <div class="row">
          <div class="col-lg-4">
            <div class="card mb-4">
              <div class="card-body text-center">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                  class="rounded-circle img-fluid" style={{ width: '150px' }} />
                <h5 class="my-3">{user.name}</h5>
                {/* <p class="text-muted mb-1">Full Stack Developer</p> */}
                <p class="text-muted mb-4">{user.email}</p>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="card mb-4 py-1">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Full Name</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.name}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Email</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">Age</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.age}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">City</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.city}</p>
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <p class="mb-0">State</p>
                  </div>
                  <div class="col-sm-9">
                    <p class="text-muted mb-0">{user.state}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">

          <div className='old-reports d-flex p-3'>
            <div className="reports_heading d-flex flex-column align-items-center order-1">
              <h2 className='report-heading'>Old Reports</h2>
              <p>Patient is a {user.age}-year-old who reports no significant past medical history.
                He is currently taking Lisinopril for hypertension, which is well-controlled.</p>
              <p>Laboratory Test Results:
                Complete Blood Count (CBC): Within normal limits
                Liver Function Tests (LFTs): Within normal limits
                Urine Analysis: Within normal limits
                Chest X-ray: Normal</p>
              <p>Patient presents with symptoms of common cold and cough, likely due to a viral infection. Advised to take rest, drink plenty of fluids, and use a humidifier. Prescribed Paracetamol for fever and cough.
                Advised to follow up in 1 week if no improvement.</p>
            </div>
            {/* <input type="file" name="pic" id="pic" accept="image/gif, image/jpeg" /> */}
            <div className="reports_img">
              <img className='report-img' src={report} alt="Report" />
            </div>
            {/* <button className='report-view'>View More</button> */}
          </div>
        </div>
      </div>

    </>
  )
}


export default Profile