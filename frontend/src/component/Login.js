import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import './Login.css'
const Login = () => {

  const navigate = useNavigate();
  const { state, dispatch } = useContext(userContext);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const inputEvent = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  }

  const loginUser = async (event) => {
    event.preventDefault();

    const res = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    const data = res.json();
    console.log(data);

    if (res.status === 400 || !data) {
      window.alert('Invalid credentials');
    } else {
      dispatch({ type: 'USER', payload: true });
      window.alert('Login Successful');
      navigate('/');
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
                      <input type="email" id="form3Example3" className="form-control py-3"
                        value={user.email} onChange={inputEvent} name="email" placeholder='Email Address'
                      />
                    </div>

                    <div className="form-outline mb-4">
                      <input type="password" id="form3Example4" className="form-control py-3"
                        value={user.password} onChange={inputEvent} name="password" placeholder='Password'
                      />
                    </div>

                    <div className="text-center mt-4">
                      <button onClick={loginUser} type="submit" id='signup_btn' className="btn btn-primary btn-block mb-4 btn-lg px-5">
                        Sign In
                      </button>
                    </div>

                    <div className="text-center">
                      <p>or sign in with:</p>
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
                      <p className='mt-3'>Don't have an account? <NavLink to='/register'>Register here</NavLink></p>
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

export default Login