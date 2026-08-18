import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faFile} from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation, faCodeBranch, faBugSlash, faClose, faTerminal, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faLinkedinIn, faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { portfolioData } from '../../data/portfolioData';

interface FrameProps {
    mode?: 'technical' | 'nonTechnical';
}

const Frame = ({ mode: propMode }: FrameProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';
    
    const [activeTab, setActiveTab] = useState('')
    const [consoleOpen, setConsoleOpen] = useState(true)
    
    const currentModeData = portfolioData[mode];
    const activeContent = currentModeData[activeTab as keyof typeof currentModeData];

    const handleEvent = (e) => {
        const id = e.target.id;
        setActiveTab(id)
    }

    const handleToggle = () => {
        setConsoleOpen(!consoleOpen)
    }

    const selectedTabStyle = 'bg-[#282a36] px-6 h-full flex items-center border-t-2 border-[#ff79c6] cursor-pointer whitespace-nowrap shrink-0';
    const notSelectedTabStyle = 'bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] text-[#7a7b7f] cursor-pointer whitespace-nowrap shrink-0 hover:text-white';

    return (
        <div className="flex h-screen overflow-hidden flex-col text-white bg-[#282a36]">
            {/* Title Bar */}
            <div className="w-full bg-[#21222c] h-8 flex items-center justify-center text-xs border-b border-[#313340]">
                <p>Noel Varga's Portfolio - {mode === 'technical' ? 'Technical View' : 'Non-Technical View'}</p>
            </div>

            {/* Main/Middle Area */}
            <div className="flex-1 flex flex-col-reverse md:flex-row min-h-0">
                {/* Activity Bar */}
                <div className="bg-[#21222d] md:w-12 border-t md:border-r border-[#313340] flex md:flex-col items-center justify-center md:justify-start py-2">
                    <a href='Noel_Varga_CV.pdf' download={'Noel_Varga_CV.pdf'} className='resume'> {/* NOTE: Change to google drive link */}
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
                        onClick={handleToggle}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </div>

                {/* Editor Area */}
                <div className='flex-1 flex flex-col min-w-0 min-h-0'>
                    {/* Title Bar/Headers */}
                    <div className='bg-[#191a21] w-full h-15 md:h-10 flex text-sm border-b border-[#313340] overflow-x-auto flex-nowrap shrink-0'>
                        <div id='About.tsx' onClick={e => handleEvent(e)} className={activeTab == 'About.tsx' ? selectedTabStyle : notSelectedTabStyle}>
                            { mode == 'technical'
                            ?
                                <><FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> About.tsx</>
                            :
                                <><FontAwesomeIcon icon={faHtml5} className='text-orange-600 pr-2'/> About.html</>
                            }
                        </div>
                        <div id='Projects.json' onClick={e => handleEvent(e)} className={activeTab == 'Projects.json' ? selectedTabStyle : notSelectedTabStyle}>
                            <span className='text-yellow-500 pr-2'>&#123;&#125;</span> Projects.json
                        </div>
                        <div id='Experience.tsx' onClick={e => handleEvent(e)} className={activeTab == 'Experience.tsx' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> Experience.tsx
                        </div>
                        <div id='Contact.tsx' onClick={e => handleEvent(e)} className={activeTab == 'Contact.tsx' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> Contact.tsx
                        </div>
                    </div>

                    {/* Editor Workspace View */}
                    <div className='h-full overflow-y-auto leading-relaxed'>
                        {activeContent
                        ?  (
                            <>
                                <p className='text-[#7a7b7f] text-sm mb-2 pl-5'>{activeContent.path}</p>
                                <SyntaxHighlighter
                                    language={activeContent.language}
                                    style={dracula}
                                    showLineNumbers={true}
                                    wrapLines={true}
                                    className='text-sm rounded-lg'
                                >
                                    {activeContent.content}
                                </SyntaxHighlighter>
                            </>
                        ) : (
                            <p className='text-center text-[#7a7b7f] pt-50'>No view is selected</p>
                        )
                        }
                    </div>

                    {/* Console */}
                    {consoleOpen &&
                        <div className='w-full h-100 bg-[#22222c] border-t border-[#313340]'>
                            <button onClick={handleToggle} className='w-full text-right pr-2'>
                                <FontAwesomeIcon icon={faClose} className='text-[#7a7b7f] cursor-pointer'/>
                            </button>
                        </div>
                    }
                </div>
            </div>

            {/* Status Bar */}
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
        </div>
    );
}
 
export default Frame;