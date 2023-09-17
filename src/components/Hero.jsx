import React from 'react'

import {OnlineTest} from '../assets';

function Hero() {
    return (


    <div className="flex flex-row justify-between w-full h-full py-7 px-5 text-sage">
        <div className="flex flex-col space-y-2 px-5 pr-5">
            <h2 className="text-4xl">
                Your Personal Therapist
            </h2>
            <p className="text-2xl">
                Use TherapyME and get a customized personal experience with an 
                A.I. generated experience. You dont ever have to worry about the 
                fear of speaking to a therapist and feeling judged. No 
                conversations are saved. No worries about the interaction. Take the quiz
                and get your personalized A.I. therapist now!
            </p>

            <div className="flex flex-row space-x-3 py-5">
                <button className="bg-sage hover:bg-darksage text-beige font-bold py-2 px-4 rounded">
                Take the Quiz
                </button>
                <button className="bg-sage hover:bg-darksage text-beige font-bold py-2 px-4 rounded">
                Learn More
                </button>
            </div>
        </div>

        <img src={OnlineTest} alt="Online Test" className="w-1/3 pl-6"/>
    
    </div>  
    )
}

export default Hero