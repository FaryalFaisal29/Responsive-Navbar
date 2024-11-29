"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const link_1 = __importDefault(require("next/link"));
const react_1 = __importDefault(require("react"));
const Navbar = () => {
    return (<div>
            
            <nav className="bg-lime-300 h-auto sm:h-12 md:h-16 lg:h-16 py-4 px-3 flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold">
                        <a href="/faryal">Faryal Faisal</a>
                    </h1>
                </div>
                <div className="w-full sm:w-auto mb-4 sm:mb-0">
                    <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-5">
                        <li><link_1.default href="/" className="hover:text-red-600 text-xl">Home</link_1.default></li>
                        <li><link_1.default href="/aboutus" className="hover:text-red-600 text-xl">About Us</link_1.default></li>
                        <li><link_1.default href="/contactus" className="hover:text-red-600 text-xl">Contact Us</link_1.default></li>
                    </ul>
                </div>
                <div className="w-full sm:w-auto">
                     <ul className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                        <li><link_1.default href="/signup" className="hover:text-red-600 text-xl">SignUp</link_1.default></li>
                        <li><link_1.default href="/login" className="hover:text-red-600 text-xl">Login</link_1.default></li>
                     </ul>
 
                </div>
            </nav>
        </div>);
};
exports.default = Navbar;
