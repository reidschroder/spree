import './Register.css'
import React from 'react'

const Register = () => {
  return (
    <div className="Register">
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{borderRadius: '2rem'}}>
                <div className="card-body p-5 text-center">
    
                  <div className="mb-md-4 mt-md-4 pb-5">
    
                    <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
                    <p className="text-white-50 mb-3">Create an account</p>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeFirstNameX">First Name</label>
                      <input type="text" id="typeFirstNameX" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeLastNameX">Last Name</label>
                      <input type="text" id="typeLastNameX" className="form-control form-control-lg" />
                      
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeEmailX">Email</label>
                      <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                    </div>

                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typeUserNameX">Username</label>
                      <input type="text" id="typeUserNameX" className="form-control form-control-lg" />
                    </div>
    
                    <div className="form-outline form-white mb-2">
                      <label className="form-label" htmlFor="typePasswordX">Password</label>
                      <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                    </div>
    
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Register</button>

                  </div>

                  <div>
                    <p className="mb-0">Have an account? <a href="#!" className="text-white-50 fw-bold">Login</a>
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
export default Register

