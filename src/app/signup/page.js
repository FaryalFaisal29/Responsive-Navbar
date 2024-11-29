"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.metadata = {
    title: "Sign Up"
};
const react_1 = __importDefault(require("react"));
const Signup = () => {
    return (<div>
            <h1 className="text-2xl mb-4 sm:mb-4">Sign Up Component</h1>
             
             <form action="/signup" method="post">
             
             <label htmlFor="fname">First Name:</label><br></br>
             <input type="text" id="fname" name="fname" required/><br></br>
             <label htmlFor="lname">Last Name:</label><br></br>
             <input type="text" id="lname" name="lname" required/><br></br>
             <label htmlFor="email">Email:</label><br></br>
             <input type="email" id="email" name="email" required/><br></br>
             <label htmlFor="password">Password:</label><br></br>
             <input type="password" id="password" name="password" required/><br></br>
             
             </form>

            <button className="inline-flex items-center bg-orange-400 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">Sign Up </button>

        </div>);
};
exports.default = Signup;
