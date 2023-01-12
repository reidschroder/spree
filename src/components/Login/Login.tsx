import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className="Login">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '2rem'}}>
                <div className="card-body p-5 text-center">
    
                  <div className="mb-md-4 mt-md-4 pb-5">
    
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-3">Login to your account</p>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeUserNameX">Username</label>
                      <input type="text" id="typeUserNameX" className="form-control form-control-lg" />
                    </div>
    
                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    </div>
    
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                  </div>

                  <div>
                    <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Register</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login