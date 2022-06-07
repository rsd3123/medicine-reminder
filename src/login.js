/***
 * Author: Rudy DeSanti
 * Last Modified: June 2, 2022
 * Application Name: Medicine Reminder
 * Purpose: User enters the name of a medicine and what time(s) they take that medicine. Then they are notified to take that medicine on the given time.
 */

 import React from 'react';
 import ReactDOM from 'react-dom/client';
 import './login.css';
 import io from 'socket.io-client';
 
 
 class Base extends React.Component
 {
     constructor(props)
     {
         super(props);
         this.state = {
             
            
         };
 
       
     }
 
 
     render()
     {
         console.log("hi");
         return(
            <div className = 'Base'>
                <form>
                    <div className = 'SignIn'>
                        <label>Sign In: </label>
                        <textarea> </textarea>
                        <textarea></textarea>
                        <input className='input' id='loginButton' type="submit" value="Login"/>
                    </div>

                    <label> or</label>

                    <div className = 'SignUp'>
                        <label>Sign Up: </label>
                        <textarea> </textarea>
                        <textarea></textarea>
                        <input className='input' id='signupButton' type="submit" value="Create Account"/>
                    </div>
                </form>
            </div>
         );
     }
 }
 
 const root = ReactDOM.createRoot(document.getElementById("root2"));
 root.render(<Base />);
 