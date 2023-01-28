import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css'
const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    age: ' ',
    password: '',
    city: '',
    state: ''
  });

  const handleInput = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setUser({ ...user, [name]: value });
  }

  const postData = async (event) => {
    event.preventDefault();

    try {

      const res = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      })

      const data = await res.json();

      console.log(data);

      if (data.status === 400 || !data) {
        window.alert('Invalid registration');
      } else {
        window.alert('Registration successfull');
        navigate('/login');
      }
    } catch (err) {
      console.log(err);
    }

  }


  return (
    <>
      <div className="mt-5 ps-4 pe-5 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColour: "hsl(0, 0%, 96%)" }}>
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <h1 className="mb-4 display-1 fw-medium" style={{ color: '#153462' }}>
                Welcome<br /> To
                <span style={{ color: '#1687A7' }}> Curae</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)", fontSize: '1.2rem' }}>
                Leading the way in patient-centric healthcare
              </p>
            </div>

            <div className="col-lg-5 mb-5 mb-lg-0">
              <div className="card shadow">
                <div className="card-body py-5 px-md-5">
                  <form method='POST'>
                    <div className="form-outline mb-4">
                      <input className=' form-control py-3' value={user.email} name="email" onChange={handleInput} type="email" placeholder="Email" />
                    </div>
                    <div className="form-outline mb-4">
                      <input className=' form-control py-3' value={user.name} name="name" onChange={handleInput} type="text" placeholder="Name" />
                    </div>
                    <div className="form-outline mb-4">
                      <input className=' form-control py-3' value={user.age} name="age" onChange={handleInput} type="number" placeholder="Age" />
                    </div>
                    <div className="form-outline mb-4">
                      <input className=' form-control py-3' value={user.city} name="city" onChange={handleInput} type="text" placeholder="City" />
                    </div>
                    <div className="form-outline mb-4">
                      <input className=' form-control py-3' value={user.state} name="state" onChange={handleInput} type="text" placeholder="State" />
                    </div>
                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control py-3"
                        placeholder='Password'
                      />
                    </div>

                    <div className="text-center mt-4">
                      <button onClick={postData} type="submit" id='signup_btn' className="btn btn-primary btn-block mb-4 btn-lg px-5">
                        Sign Up
                      </button>
                    </div>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i class="signicons fa-brands fa-facebook-f"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="signicons fab fa-google"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="signicons fab fa-twitter"></i>
                      </button>

                      <button type="button" className="btn btn-link btn-floating mx-1">
                        <i className="signicons fab fa-github"></i>
                      </button>
                      <p className='mt-3'>Have an Account ?<NavLink to='/register'> Login Here</NavLink></p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register