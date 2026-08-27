import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="w-full bg-[#21222c] h-5 text-[#7a7b7f] border-t border-[#313340] flex items-center shrink-0">
            <div className="flex flex-row justify-between w-full px-2 text-xs">
                <div className='flex items-center gap-2'>
                    <span className="flex items-center gap-1">
                        <FontAwesomeIcon 
                            icon={faCircleXmark}
                        />
                        0
                    </span>
                    <span className="flex items-center gap-1">
                        <FontAwesomeIcon 
                            icon={faTriangleExclamation}
                        />
                        0
                    </span>
                </div>
                <div>
                    <span>@2026 All rights reserved.</span>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;