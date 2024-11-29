export const metadata = {
    title:"Log in"
  }



import React from 'react';

const Login =() => {
    return(
        <div>
            <h1 className="text-2xl mb-4 sm:mb-4">Log In Component</h1>
             
             <form action="/signup" method="post">
             
             <label htmlFor="userid">User Id:</label><br></br>
             <input type="email" id="email" name="email" required/><br></br>
        
             <label htmlFor="password">Password:</label><br></br>
             <input type="password" id="password" name="password" required/><br></br>
            
             </form>

            <button className="inline-flex items-center bg-orange-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">Log In </button>

            
        </div>
    )
}
 export default Login;