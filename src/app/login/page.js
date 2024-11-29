"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.metadata = {
    title: "Log in"
};
const react_1 = __importDefault(require("react"));
const Login = () => {
    return (<div>
            <h1 className="text-2xl mb-4 sm:mb-4">Log In Component</h1>
             
             <form action="/signup" method="post">
             
             <label htmlFor="userid">User Id:</label><br></br>
             <input type="email" id="email" name="email" required/><br></br>
        
             <label htmlFor="password">Password:</label><br></br>
             <input type="password" id="password" name="password" required/><br></br>
            
             </form>

            <button className="inline-flex items-center bg-orange-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">Log In </button>

            
        </div>);
};
exports.default = Login;
