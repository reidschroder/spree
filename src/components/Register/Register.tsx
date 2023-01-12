import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register: React.FC<any> = () => {

  const user =
  {
    id:0,
    firstName: "",
    lastName: "",
    email:"", 
    username: "",
    password: ""
  }

  // use =State hooks to declare some state that will hold user information 
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");


    const navigate = useNavigate();

    const gatherInput = (input:any) => 
    {
        if(input.target.name === "firstName")
        {
        setFirstName(input.target.value)
        }
        else if (input.target.name === "lastName")
        {
            setLastName(input.target.value)
        }
        else if(input.target.value === "username")
        {
            setUsername(input.target.value)
        }
        else if(input.target.value === "password")
        {
            setPassword(input.target.value)
        }
        else if(input.target.value === "email")
        {
            setemail(input.target.value)
        }
    }

    const Register = async () => 
    {
      const response = await axios.post("http//localhost:5555/data/register")

      if(response.status === 202)
      {
      console.log(response)

      //populate the objects with incomming data from the server 
      user.id = response.data.id;
      user.firstName = response.data.firstName;
      user.lastName = response.data.lastName;
      user.username = response.data.username;
      user.password = response.data.password;
      user.email = response.data.email;

      if(user.id > 0)
      {
        navigate("home")
      }

      }
    }

  





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
                    <p className="mb-0">Have an account? <a href="/data/login" className="text-white-50 fw-bold">Login</a>
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

