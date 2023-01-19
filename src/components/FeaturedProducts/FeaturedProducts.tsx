import React from 'react'
import { Route, Routes, useNavigate } from "react-router";
import ProductPage from "../ProductPage/ProductPage";
import './FeaturedProducts.css'

const FeaturedProducts = (props: any) => {
  
  const navigate = useNavigate();

  const redirectProductPage = () => {
    navigate(`/product/${props.id}`)
  }
  // "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/belt.webp"
  return (
    <div className="col-lg-4 col-md-12 mb-4 redirectP" role="button" onClick={redirectProductPage}>
      <div className="card">
        <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
          data-mdb-ripple-color="light">
          <img src={props.url} style={{ width: '400px', height: '500px', objectFit: 'contain', position: 'relative'}}/>
            {/* className="w-100" original style as a className and it wasn't fitting the images the way we wanted*/}
          <a href="#!">
            <div className="mask">
              <div className="d-flex justify-content-start align-items-end h-100">
                <h5><span className="badge bg-primary ms-2">New</span></h5>
              </div>
            </div>
            <div className="hover-overlay">
              <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
            </div>
          </a>
        </div>
        <div className="card-body">
          <a href="" className="text-reset">
            <h5 className="card-title mb-3">{props.name}</h5>
          </a>
          <a href="" className="text-reset">
            <p>{props.type}</p>
          </a>
          <h6 className="mb-3">{props.price}</h6>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts

/* <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(4).webp"
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-success ms-2">Eco</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/shoes%20(3).webp"
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5><span className="badge bg-danger ms-2">-10%</span></h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-lg-4 col-md-12 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(23).webp"
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-success ms-2">Eco</span><span
                      className="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
            data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(17).webp"
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100"></div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">$61.99</h6>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <div className="bg-image hover-zoom ripple" data-mdb-ripple-color="light">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/img%20(30).webp"
              className="w-100" />
            <a href="#!">
              <div className="mask">
                <div className="d-flex justify-content-start align-items-end h-100">
                  <h5>
                    <span className="badge bg-primary ms-2">New</span><span
                      className="badge bg-success ms-2">Eco</span><span className="badge bg-danger ms-2">-10%</span>
                  </h5>
                </div>
              </div>
              <div className="hover-overlay">
                <div className="mask" style={{backgroundColor: 'lightgray'}}></div>
              </div>
            </a>
          </div>
          <div className="card-body">
            <a href="" className="text-reset">
              <h5 className="card-title mb-3">Product name</h5>
            </a>
            <a href="" className="text-reset">
              <p>Category</p>
            </a>
            <h6 className="mb-3">
              <s>$61.99</s><strong className="ms-2 text-danger">$50.99</strong>
            </h6>
          </div>
        </div>
      </div> */