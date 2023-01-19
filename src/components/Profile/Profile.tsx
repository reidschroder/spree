import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { retrieveProfile } from '../../actions/ProfileActions';

const Profile : React.FC<any> = (props: any) => {

  
  
  const appState = useSelector<any, any>((state) => state);

  const dispatch = useDispatch(); //will use when posting new address


  let navigate = useNavigate();
  const routeChange = () => 
  {
    let path = `/address`;
    navigate(path);

  }

 const getProfile = async () => 
 {
    await dispatch( retrieveProfile( appState.customer.customerId) as any );
 };

 useEffect( () => { 

  getProfile() }, [] )


  
  return (
    <div className="Profile">
        
        <section style={{ backgroundColor: "#eee" }}>
  <div className="container py-5">
    
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">

            <h5 className="Card Name">{`${appState.customer.customerUsername}`}</h5>
            <div className="d-flex justify-content-center mb-2">
              <button type="button" onClick={routeChange} className="btn btn-primary"> 
                Add Address
              </button>
              <button type="button" className="btn btn-outline-primary ms-1">
                Order History (removable if we dont like)
              </button>
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i className="fas fa-globe fa-lg text-warning" />
                <p className="mb-0">https://E-commerce Website </p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-github fa-lg"
                  style={{ color: "#333333" }}
                />
                <h6 className="mb-0"> Creators </h6>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-twitter fa-lg"
                  style={{ color: "#55acee" }}
                />
                <p className="mb-0">@Monae</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-instagram fa-lg"
                  style={{ color: "#ac2bac" }}
                />
                <p className="mb-0">@Luan</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-facebook-f fa-lg"
                  style={{ color: "#3b5998" }}
                />
                <p className="mb-0">@Reid</p>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className="fab fa-facebook-f fa-lg"
                  style={{ color: "#3b5998" }}
                />
                <p className="mb-0">@Myles </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">First Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0"> {`${appState.customer.customerFirstName}`} </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Last name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{`${appState.customer.customerLastName}`}</p>
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{`${appState.customer.customerEmail}`}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Address</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">(`${appState.customer.customerAddress}`)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">
                    assigment
                  </span>{" "}
                  Project Status
                </p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>
                  Web Design
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Website Markup
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  One Page
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Mobile Template
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Backend API
                </p>
                <div className="progress rounded mb-2" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">
                    assigment
                  </span>{" "}
                  Project Status
                </p>
                <p className="mb-1" style={{ fontSize: ".77rem" }}>
                  Web Design
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow={80}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Website Markup
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={72}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  One Page
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow={89}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Mobile Template
                </p>
                <div className="progress rounded" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow={55}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                  Backend API
                </p>
                <div className="progress rounded mb-2" style={{ height: 5 }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "66%" }}
                    aria-valuenow={66}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
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

export default Profile