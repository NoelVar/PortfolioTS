import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal, faEye, faEyeSlash, faEnvelope, faHouse, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from "react-router-dom";

interface ActivityBarProps {
    mode?: 'technical' | 'nonTechnical';
    onToggleConsole: () => void;
}

const ActivityBar = ({ mode: propMode, onToggleConsole }:  ActivityBarProps) => {
    // Mode from URL
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';

    return (
        <div className="bg-[#21222d] md:w-12 border-t md:border-r border-[#313340] flex md:flex-col items-center justify-center md:justify-start py-2">
            <a href='/' title="View Selection">
                <FontAwesomeIcon 
                    icon={faHouse}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            <a href='https://drive.google.com/drive/folders/1KXHINDEZ-KzBOU_FWdQLwvi_p_rmb08v' target="_blank" rel="noreferrer" title="CV/Resume">
                <FontAwesomeIcon 
                    icon={faFilePdf}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            <a href='https://www.linkedin.com/in/noel-varga/' target="_blank" rel="noreferrer" title="LinkedIn">
                <FontAwesomeIcon 
                    icon={faLinkedinIn}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            <a href='https://github.com/NoelVar' target="_blank" rel="noreferrer" title="GitHub">
                <FontAwesomeIcon 
                    icon={faGithub}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            {mode == 'technical' 
            ?
                <a href='/portfolio?mode=nonTechnical' title="Switch View">
                    <FontAwesomeIcon 
                        icon={faEye}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </a>
            :
                <a href='/portfolio?mode=technical' title="Switch View">
                    <FontAwesomeIcon 
                        icon={faEyeSlash}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </a>
            }
            {mode == 'technical' 
            ?
            <div title="Open Terminal/Contact form">
                <FontAwesomeIcon 
                    icon={faTerminal}
                    onClick={onToggleConsole}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </div>
            :
            <div title="Open Contact form">
                <FontAwesomeIcon 
                    icon={faEnvelope}
                    onClick={onToggleConsole}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </div>
            }
        </div>
    );
}
 
export default ActivityBar;