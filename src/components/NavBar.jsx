import logo from "../assets/here.png"
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import Button from "./Button"
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

 const NavBar = () => {
    const [open,setopen] = useState(false);

    return <>
    <nav className="bg-white-400 ">
        <div className="flex items-center font-base justify-around">
            <div className="z-50 p-2 md:w-auto w-full flex justify-between">
            <img src={logo} alt="logo" className="h-10 md:h-20 cursor-pointer mx-auto" />
                <div className="text-3xl md:hidden" onClick={() => setopen(!open)}>
                <ion-icon name={`${open? "close" : "menu"}`}></ion-icon>
                </div>
            </div>
            <ul className="md:flex hidden uppercase items-center gap-8 fon=[Poppins]">
                <li>
                   <Link to="/" className="py-4 px-3 inline-block">Home</Link>
                </li>
                <NavLinks/>
            </ul>
            <div className="md:block hidden">
               <Button/>
            </div>

            {/*mobile app*/}
            <ul className={`md:hidden bg-white absolute w-full h-full bottom-0 py-24 pl-4 duration-500 ${open? 'left-0' : 'left-[-100%]'}`}>
                <li>
                   <Link to="/" className="py-4 px-3 inline-block">Home</Link>
                </li>
                <NavLinks/>
                 <div className="py-5">
                    <Button/>
                 </div>
            </ul>
        </div>
    </nav></>
}

export default NavBar;