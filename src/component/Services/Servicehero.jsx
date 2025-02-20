import React from 'react'
import servicesbg from '../../assets/images/new-5.jpeg'

function Servicehero() {
    return (
        <section
            className="bg-cover bg-center h-[80vh] flex items-center font-worksans justify-center text-center text-white"
            style={{ backgroundImage: `url(${servicesbg})` }}
        >
            
            {/* Content */}
            <div className="relative z-10 px-4 w-[100%] mx-auto">
                <h1 className="text-[68px] ">SERVICES</h1>
                <div className="w-[20%] bg-gray-600 h-[2px] mx-auto"></div>
                <p className="mt-4 text-[20px]">
                    We are a locally owned professional one-stop shop contractor. Our goal is
                    to be the first and last contractor you’ll need to call for all of your{" "}
                    <span className="text-yellow-500 font-semibold">Restoration</span> and{" "}
                    <span className="text-yellow-500 font-semibold">Construction</span> needs.
                </p>
            </div>
        </section>
    )
}

export default Servicehero