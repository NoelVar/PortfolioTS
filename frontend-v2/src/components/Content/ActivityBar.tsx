import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile} from '@fortawesome/free-regular-svg-icons';
import { faCodeBranch, faTerminal, faEye, faEyeSlash, faUsers } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useSearchParams } from "react-router-dom";

interface ActivityBarProps {
    mode?: 'technical' | 'nonTechnical';
    onToggleConsole: () => void;
}

const ActivityBar = ({ mode: propMode, onToggleConsole }:  ActivityBarProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';

    return (
        <div className="bg-[#21222d] md:w-12 border-t md:border-r border-[#313340] flex md:flex-col items-center justify-center md:justify-start py-2">
            <a href='https://drive.google.com/drive/folders/1KXHINDEZ-KzBOU_FWdQLwvi_p_rmb08v' target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                    icon={faFile}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            <a href='https://www.linkedin.com/in/noel-varga/' target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                    icon={faLinkedinIn}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            <a href='https://github.com/NoelVar' target="_blank" rel="noreferrer">
                <FontAwesomeIcon 
                    icon={faCodeBranch}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
            {mode == 'technical' 
            ?
                <a href='/portfolio?mode=nonTechnical'>
                    <FontAwesomeIcon 
                        icon={faEye}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </a>
            :
                <a href='/portfolio?mode=technical'>
                    <FontAwesomeIcon 
                        icon={faEyeSlash}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </a>
            }
            <FontAwesomeIcon 
                icon={faTerminal}
                onClick={onToggleConsole}
                className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
            />
            <a href='/'>
                <FontAwesomeIcon 
                    icon={faUsers}
                    className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                />
            </a>
        </div>
    );
}
 
export default ActivityBar;