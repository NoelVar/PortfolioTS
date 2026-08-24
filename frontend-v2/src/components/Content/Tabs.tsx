import { useSearchParams } from "react-router-dom";
import { faImage} from '@fortawesome/free-regular-svg-icons';
import { faHtml5, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TabsProps {
    mode?: 'technical' | 'nonTechnical';
    currentTab: string;
    onEvent: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Tabs = ({ mode: propMode, currentTab, onEvent }: TabsProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';

    const selectedTabStyle = 'bg-[#282a36] px-6 h-full flex items-center border-t-2 border-[#ff79c6] cursor-pointer whitespace-nowrap shrink-0';
    const notSelectedTabStyle = 'bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] text-[#7a7b7f] cursor-pointer whitespace-nowrap shrink-0 hover:text-white';
    return (
        <div className='bg-[#191a21] w-full h-15 md:h-10 flex text-sm border-b border-[#313340] overflow-x-auto flex-nowrap shrink-0'>
            <div id='About.tsx' onClick={e => onEvent(e)} className={currentTab == 'About.tsx' ? selectedTabStyle : notSelectedTabStyle}>
                { mode == 'technical'
                ?
                    <><FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> About.tsx</>
                :
                    <><FontAwesomeIcon icon={faHtml5} className='text-orange-600 pr-2'/> About.html</>
                }
            </div>
            <div id='Projects.json' onClick={e => onEvent(e)} className={currentTab == 'Projects.json' ? selectedTabStyle : notSelectedTabStyle}>
                <span className='text-yellow-500 pr-2'>&#123;&#125;</span> Projects.json
            </div>
            <div id='Experience.json' onClick={e => onEvent(e)} className={currentTab == 'Experience.json' ? selectedTabStyle : notSelectedTabStyle}>
                { mode == 'technical'
                    ? <><span className='text-yellow-500 pr-2'>&#123;&#125;</span> Experience.json</>
                    : <><FontAwesomeIcon icon={faHtml5} className='text-orange-600 pr-2'/> Experience.html</>
                }
            </div>
            <div id='NoelVarga.jpg' onClick={e => onEvent(e)} className={currentTab == 'NoelVarga.jpg' ? selectedTabStyle : notSelectedTabStyle}>
                <FontAwesomeIcon icon={faImage} className='text-cyan-600 pr-2'/> NoelVarga.jpg
            </div>
        </div>
    );
}
 
export default Tabs;