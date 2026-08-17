import Header from "../components/Content/Header";

const Dev_Home = () => {
    return ( 
        <div className="bg-[url(/xp-bg.jpg)] bg-cover w-full h-screen flex flex-col animate-fade-in">
            <div className="bg-black w-screen h-screen absolute opacity-60 z-10"></div>
            <div className="relative z-20 text-white flex item-center justify-center pt-20 flex-auto">
                <Header />
            </div>
            <div className="relative w-full h-15 md:h-8 border-t-2 border-white/60 z-20 flex items-center overflow-hidden" style={{ "backgroundColor": "#2331ac"}}>
                <a href="/" className="bg-green-700 text-white px-10 md:py-1 py-5 rounded-r-md hover:bg-green-900">Start</a>
            </div>
        </div>
     );
}
 
export default Dev_Home;