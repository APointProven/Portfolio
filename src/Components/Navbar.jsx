import React, { useState } from "react"
import Logo from '../Components/svg/logo.tsx'
import Burger from '../Components/svg/hamburger.tsx'
import './css/Nav.css'
const navbar = () => {
    return (
        <div className="fixed w-full top-0">
            <div className="items-center py-7 overflow-auto justify-between flex">

                {/* Logo */}
                <div className="px-16  h-auto">
                    <Logo width="90" height="40" strokeWidth = "4" className="stroke-lmText dark:stroke-dmText cursor-pointer hover:stroke-accentYellow" />
                </div>

                <p className="hidden text-accentPink absolute text-2xl font-bold left-40">/</p>
                <p className="hidden text-dmText dark:text-lmText absolute text-2xl font-medium left-44">APointProven</p>

                {/* Burger */}
                <div className="px-16 h-auto">
                    <Burger width="72" height="72" strokeWidth = "2" status="hover" />
                </div>
            </div>
        </div>
    )
}

export default navbar