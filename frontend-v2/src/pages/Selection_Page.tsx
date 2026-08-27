import { faUserAlt, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Selection_Page = () => {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-20">
            <h1 className="text-lg uppercase text-center">Please select your prefered view type</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-30">
                <a href="/portfolio?mode=technical">
                    <div className="text-center text-xl md:text-md border-b border-[#ff79c6] hover:scale-125 cursor-pointer duration-300 ease-in-out hover:shadow-2xl rouded-xl p-5">
                        <FontAwesomeIcon
                            icon={faUserGear}
                            className="text-[#ff79c6] text-4xl md:text-2xl pb-5"
                        />
                        <h1>Technical View</h1>
                    </div>
                </a>
                <a href="/portfolio?mode=nonTechnical">
                    <div className="text-center text-xl md:text-md border-b border-[#ff79c6] hover:scale-125 cursor-pointer duration-300 ease-in-out hover:shadow-2xl rouded-xl p-5">
                        <FontAwesomeIcon
                            icon={faUserAlt}
                            className="text-[#ff79c6] text-4xl md:text-2xl pb-5"
                        />
                        <h1>Non-Technical View</h1>
                    </div>
                </a>
            </div>
            <p className="text-[#7a7b7f] italic text-center">The technical view is formated as code. Due to this, it may be more difficult to read for some.</p>
        </div>
    );
}
 
export default Selection_Page;