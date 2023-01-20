import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { retrieveProfile } from '../../actions/ProfileActions';

const Profile : React.FC<any> = (props: any) => {

  const appState = useSelector<any, any>((state) => state);

  const dispatch = useDispatch(); //will use when posting new address

  let navigate = useNavigate();
  const routeChange = () => {
    navigate("/address");
  }

  const getProfile = async () => {
    await dispatch( retrieveProfile(appState.customer.customerId) as any );
  };

  useEffect(() => { 
    getProfile() 
  }, [])
  
  return (
    <div className="Profile">
        {/* backgroundColor was #eee style={{ backgroundColor: 'ivory' }}*/}
        <section >
  <div className="container py-5">
    
    <div className="row ">
      <div className="col-lg-4">
        <div className="card mb-4">


          <div className="card-body text-center">
          <h4 className="Card Name mb-3">Welcome to your Spoint profile,</h4>
            <h4 className="Card Name">{`${appState.customer.customerUsername}`}</h4>
            <div className="d-flex justify-content-center mb-2 mt-4">
             
              <button type="button" onClick={routeChange} className="btn btn-primary"> 
                Add Address
              </button>
              
            </div>
          </div>
        </div>
        <div className="card mb-4 mb-lg-0">
          <div className="card-body p-0">
            <ul className="list-group list-group-flush rounded-3">
            
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className=""
                  style={{ color: "#333333" }}
                />
                <h6 className="mb-0"> Thanks for using Spoint! <br/><br/><br/> If you have any questions or concerns about your account, please reach out to us at <br/> <strong >Spointattire@gmail.com</strong> </h6>
              </li>
              
              <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                <i
                  className=""
                  style={{ color: "#3b5998" }}
                />
                <h6 className="mb-0">Made with ❤️ </h6>
                <br/><br/>
                <h6 className="mb-0">-The Spoint Team </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-lg-8 align-self-center ">
        <div className="card mb-4 "  >
          <div className="card-body ">
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
                <p className="text-muted mb-0">{appState.customer.customerAddress}</p>
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