import React from 'react'

function Nav() {
    return (
        
        <div className="flex flex-row justify-between items-center w-full h-16 py-7">
            <nav className="p-5">
                <div className="flex items-center">
                    <div className="text-sage text-xl font-bold">TherapyAI</div>
                </div>
            </nav>
        <div className="flex items-center space-x-4 pr-5 font-semibold">
            <a className="text-sage hover:text-darksage">Home</a>
            <a className="text-sage hover:text-darksage">About</a>
            <button className="bg-sage hover:bg-darksage text-beige font-bold py-2 px-4 rounded">
            Take the Quiz
            </button>
        </div>
        </div>
    )
}

export default Nav;