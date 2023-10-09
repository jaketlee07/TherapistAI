import React from 'react'

import {OnlineTest} from '../assets';

const containerStyle = {
    marginTop: '150px',
};

function Hero() {
    return (

        <div className="w-[1444px] h-[1025px] relative">
        <div className="w-[1444px] h-[1025px] left-0 top-0 absolute" />
        <div className="w-[539.37px] h-[421px] left-[167.12px] top-[303px] absolute">
          <div className="w-[539.37px] h-[316px] pr-[0.37px] pb-3.5 left-0 top-0 absolute flex-col justify-start items-start gap-5 inline-flex">
            <div className="w-[539px] text-stone-500 text-[50px] font-medium font-['Roboto'] leading-[66px] tracking-wide">Your Personal Therapist</div>
            <div className="w-[539px] text-stone-500 text-lg font-normal font-['Roboto'] leading-[30px]">Use TherapyME and get a customized personal experience with an A.I. generated experience. You dont ever have to worry about the fear of speaking to a therapist and feeling judged. No conversations are saved. No worries about the interaction. Take the quiz and get your personalized A.I. therapist now!</div>
          </div>
          <div className="w-[189.13px] h-9 left-0 top-[385px] absolute">
            <div className="w-[189px] h-9 left-0 top-0 absolute bg-stone-500 rounded-sm" />
            <div className="w-[189px] left-0 top-[5px] absolute text-center text-white text-base font-medium font-['Roboto'] leading-relaxed">Take the Quiz</div>
          </div>
          <div className="w-[189.13px] h-9 left-[219.15px] top-[385px] absolute">
            <div className="w-[189px] h-9 left-0 top-0 absolute rounded-sm border-2 border-stone-500" />
            <div className="w-[189px] left-0 top-[7px] absolute text-center text-stone-500 text-base font-medium font-['Roboto'] leading-relaxed">Learn More</div>
          </div>
        </div>
      </div>
    // <div className="flex flex-row justify-between w-full py-10 px-5 text-sage" style={containerStyle}>
    //     <div className="flex flex-col space-y-2 px-5 pr-5">
    //         <div className="text-5xl">
    //             Your Personal 
    //             Therapist
    //         </div>
    //         <p className="text-2xl whitespace-pre-line">
    //             Use TherapyAI and get a customized personal experience with an 
    //             A.I. generated experience. You dont ever have to worry about the 
    //             fear of speaking to a therapist and feeling judged. No 
    //             conversations are saved. No worries about the interaction. Take the quiz
    //             and get your personalized A.I. therapist now!
    //         </p>

    //         <div className="flex flex-row space-x-5 pt-10">
    //             <button className="bg-sage hover:bg-darksage text-beige py-2 px-4 rounded ">
    //             Take the Quiz
    //             </button>
    //             <button className="bg-beige hover:bg-darksage border-sage border-2 text-sage py-2 px-4 rounded ">
    //             Learn More
    //             </button>
    //         </div>
    //     </div>

    //     <img src={OnlineTest} alt="Online Test" className="w-1/3 pl-6"/>
    
    // </div>  
    )
}

export default Hero