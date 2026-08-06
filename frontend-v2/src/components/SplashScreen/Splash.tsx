import React from 'react';

const Splash = () => {
    return (  
        <div className="bg-gray-800 text-white w-full min-h-screen flex items-center justify-center p-4 md:p-10">
            <div className="w-full max-w-6xl border border-white/20 min-h-100 md:min-h-80 max-h-250 font-display text-lg md:text-2xl">
                <div className="border-2 bg-white text-black">
                    Command Prompt
                </div>
                <div className="p-4 break-words">
                    <p className="text-zinc-400">Portfolio Website [Version 2.0.0.1]</p>
                    <p className="text-zinc-400">(c) Noel Varga 2026. All rights reserved.</p>
                    <br />
                    <p><span className="text-zinc-400">C:\Users\NoelVarga&gt;</span> <span className="inline-block align-bottom overflow-hidden whitespace-nowrap animate-typing"><span className="text-pink-600">run</span> portfolio.exe</span></p>
                    <p className="animate-appearance">Starting portfolio.exe...</p>
                    <p className="animate-appearance [animation-delay:4.5s]"><span className="text-red-600">ERROR:</span> Unexpected error occured. Reattempting operation...</p>
                    <p className="animate-appearance [animation-delay:5s]">Loading...</p>
                    <p className="animate-appearance [animation-delay:5.5s]">portfolio.exe has booted successfully.</p>
                    <p className="animate-appearance [animation-delay:6s]"><span className="text-green-600">RUNNING</span> portfolio.exe</p>
                </div>
            </div>
        </div>
    );
}
 
export default Splash;