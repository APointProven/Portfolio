import React, { useState } from "react";
import logo from '../SVGs/app-logo.svg'
import burger from '../Components/svg/hamburger'
const navbar = () => {
    return (
        <div className="fixed w-full top-0">
            <div className="items-center py-7 justify-between flex bg-black">{/* Logo */}
                <img src={logo} alt="logo" className="px-16 cursor-pointer h-auto" />
                <p className="hidden text-accentPink absolute text-2xl font-bold left-40">/</p>
                <p className="hidden text-dmText dark:text-lmText absolute text-2xl font-medium left-44">APointProven</p>


            </div>
        </div>
    )
}

export default navbar