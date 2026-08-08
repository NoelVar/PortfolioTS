import Card from "../Card/Card";

const Landing = () => {
    return ( 
        <div className="h-screen flex flex-col">
            <div className="w-full md:h-20 border-b-2 border-white/60 shrink-0" style={{ "backgroundColor": "#2331ac"}}></div>
            <div className="flex-1 animate-appearance [animation-delay:0.5s] flex flex-col md:flex-row items-center justify-center gap-10 md:gap-5 text-white w-full">
                <div className="flex flex-col items-center gap-2 md:items-end justify-center">
                    <img 
                        src="/temp_logo2.png"
                        alt="logo"
                        className="h-35"
                    />
                    <p className="text-[20px] md:text-[16px] text-shadow-lg">To begin, click your matching profile</p>
                </div>
                <div className="md:border-l border-white/40 px-5 shrink-0 w-full md:w-100">
                    <Card name="Recruiter" image="IMG_5460.JPG"/>
                    <Card name="Guest" image="P1040718.JPG"/>
                </div>
            </div>
            <div className="w-full md:h-20 border-t-2 border-white/60" style={{ "backgroundColor": "#2331ac"}}></div>
        </div>
     );
}
 
export default Landing;