import React from 'react'
import { useState, useEffect, ChangeEventHandler } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDarkMode } from '../../actions/CustomerActions';
import "./DarkMode.css"

const DarkMode = () => {

  const appState = useSelector<any, any>((state) => state);
  const dispatch = useDispatch();
  
  const toggleOnClick = async () => {
    document.documentElement.setAttribute("data-theme", appState.darkMode.darkmode)
    if (document.documentElement.getAttribute("data-theme") === "dark") {
      dispatch(setDarkMode("light"));
    }
    else {
      dispatch(setDarkMode("dark"));
    }
  }  
  //original viewport settings: 0 0 72.26 122.88
  return (
    <div className="toggle-theme-wrapper" onClick={toggleOnClick}>
      {/* style this div later for me, either inline or the css */}
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -40 90 205"><title>cfl-bulb</title><path d="M20.05,11.8A6.05,6.05,0,0,1,23.84.3L50.39,9.07a6.05,6.05,0,0,1-.54,11.65L9,31.67A6,6,0,1,1,5.84,20l21.52-5.76L20.05,11.8ZM53.84,95.5v10.26a17.07,17.07,0,0,1-5,12.09l-.23.21a17,17,0,0,1-11.86,4.82H28.91a17.09,17.09,0,0,1-12.09-5l-.21-.23a17.06,17.06,0,0,1-4.81-11.86V95.5a5.65,5.65,0,0,1,1-11.21h3.09L1.78,69.91A6.14,6.14,0,0,1,.24,67.17,6,6,0,0,1,4.6,59.83L64.73,44.34a6,6,0,1,1,3,11.69l-50,12.88L31.59,83a5.84,5.84,0,0,1,1,1.29h6.5a5.41,5.41,0,0,1,.65-1L50.78,69.84a6,6,0,0,1,9.33,7.67l-5.76,7a5.66,5.66,0,0,1-.51,11Zm-34.73.1v10.16a9.78,9.78,0,0,0,2.71,6.77l.17.15a9.78,9.78,0,0,0,6.92,2.89h7.81a9.78,9.78,0,0,0,6.76-2.72l.16-.17a9.75,9.75,0,0,0,2.88-6.92V95.6ZM62.63,24.74a6.05,6.05,0,1,1,2.94,11.74l-58,14.67A6.05,6.05,0,1,1,4.58,39.41L62.63,24.74Z"/></svg>
      {/* <img src="/lamp transparent image.jpg" alt="light/dark toggler " /> */}
      {/* <span>Light</span>
      <label className="toggle-theme" htmlFor="checkbox">
        
        <input
          type="checkbox"
          id="checkbox"

          // 6
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>Dark</span> */}
    </div>
  )
}

export default DarkMode