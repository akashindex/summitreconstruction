import React from 'react'
import contactbg from '../../assets/images/bg.jpg'

function Contacthero() {
    return (
        <section
            className="relative bg-cover bg-center h-[80vh] flex items-center font-worksans justify-center text-center text-white"
            style={{ backgroundImage: `url(${contactbg})` }}
        >
            <div className="relative z-10 px-4 sm:w-[60%] mx-auto">
                <h1 className="sm:text-[68px] max-sm:text-[48px]">READY WHEN YOU ARE</h1>
                <div className="w-[20%] bg-gray-600 h-[2px] mx-auto"></div>
                <p className="mt-4 text-[20px]">
                We are problem solvers. Let us solve yours.
                </p>
            </div>
        </section>
    )
}

export default Contacthero