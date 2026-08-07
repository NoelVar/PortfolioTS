import Card from "../Card/Card";

const Landing = () => {
    return ( 
        <div className="h-screen flex flex-col">
            <div className="w-full h-20 border-b border-white/40 shrink-0" style={{ "backgroundColor": "#2331ac"}}></div>
            <div className="flex-1 animate-appearance [animation-delay:0.5s] flex items-center justify-center gap-5 text-white w-full">
                <div>
                    <img 
                        src="../../../public/temp_log.png"
                        alt="logo"
                        className="w-35"
                    />
                    <p>To begin, click your matching profile</p>
                </div>
                <div className="border-l border-white/40 px-5 shrink-0">
                    <Card name="Recruiter" image="IMG_5460.JPG"/>
                    <Card name="Guest" image="P1040718.JPG"/>
                </div>
            </div>
            <div className="w-full h-20 border-t-2 border-white/60" style={{ "backgroundColor": "#2331ac"}}></div>
        </div>
     );
}
 
export default Landing;