import React from 'react';
import emailjs from '@emailjs/browser'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export const SendEmail : React.FC<any> = () => {

    // this ref points to the form 
    const appState = useSelector<any, any>((state) => state);
    let navigate = useNavigate();
  
    const sendEmail = (e:any) => 
      {
          e.preventDefault();
  
          emailjs.send("service_iugqxzp","template_r361rbg",{
            customerUsername: `${appState.customer.customerUsername}`,
            subject: "Spoint Attire",
            customerEmail: `${appState.customer.customerEmail}`,
            },"dc-GXX1QtsLE6Mg9w")
          
        .then((result: any) => {
            console.log(result.text);
        }, (error: any) => {
            console.log(error.text);
        });
       // e.target.reset()
        navigate("/profile");
    }
    
  return (
    <section>
        <div className= "container">
        <h2 className="--text-center"> Request Confirmation E-mail </h2>
        {/* <form  onSubmit={sendEmail} className='--form-control --card --flex-center --dir-column'>  */}
            {/* <input type ="text" placeholder ='Username' name='customerUsername'/> */}
            {/* <input type ="email" placeholder ='Email' name='customerEmail' /> */}
            {/* <input type ="text" placeholder ='Subject' name='subject' /> */}
            {/* <textarea name='message' cols={30} rows={10}></textarea> */}
            {/* <button type="submit" className="--btn --btn-primary"> Send Message</button> */}
        {/* </form> */}
        </div>
    </section>
  
  )
}

export default SendEmail