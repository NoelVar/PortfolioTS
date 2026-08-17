import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCopy} from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation, faMagnifyingGlass, faCodeBranch, faBugSlash, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const Frame = () => {
    const [activeTab, setActiveTab] = useState('')

    const handleEvent = (e) => {
        const id = e.target.id;
        setActiveTab(id)
    }

    const codeSnippet = `function greet(name) { 
    if (!name) return 'Hello, Stranger!';
     return \`Hello, \${name}!
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd
     asd`;

    const selectedTabStyle = 'bg-[#282a36] px-6 h-full flex items-center border-t-2 border-[#ff79c6] cursor-pointer whitespace-nowrap shrink-0';
    const notSelectedTabStyle = 'bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] text-[#7a7b7f] cursor-pointer whitespace-nowrap shrink-0 hover:text-white';

    return (
        <div className="flex h-screen overflow-hidden flex-col text-white bg-[#282a36]">
            {/* Title Bar */}
            <div className="w-full bg-[#21222c] h-8 flex items-center justify-center text-xs border-b border-[#313340]">
                <p>Noel Varga's Portfolio</p>
            </div>

            {/* Main/Middle Area */}
            <div className="flex-1 flex flex-row min-h-0">
                {/* Activity Bar */}
                <div className="bg-[#21222d] w-12 border-r border-[#313340] hidden md:flex flex-col items-center py-2">
                    <FontAwesomeIcon 
                        icon={faCopy}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faCodeBranch}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faBugSlash}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faEllipsis}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </div>

                {/* Editor Area */}
                <div className='flex-1 flex flex-col min-w-0 min-h-0'>
                    {/* Title Bar/Headers */}
                    <div className='bg-[#191a21] w-full h-15 md:h-10 flex text-sm border-b border-[#313340] overflow-x-auto flex-nowrap shrink-0'>
                        <div id='about' onClick={e => handleEvent(e)} className={activeTab == 'about' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> About.tsx
                        </div>
                        <div id='projects' onClick={e => handleEvent(e)} className={activeTab == 'projects' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> Projects.tsx
                        </div>
                        <div id='experience' onClick={e => handleEvent(e)} className={activeTab == 'experience' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> Experience.tsx
                        </div>
                        <div id='contact' onClick={e => handleEvent(e)} className={activeTab == 'contact' ? selectedTabStyle : notSelectedTabStyle}>
                            <FontAwesomeIcon icon={faReact} className='text-sky-500 pr-2'/> Contact.tsx
                        </div>
                    </div>

                    {/* Editor Workspace View */}
                    <div className='h-full overflow-y-auto leading-relaxed'>
                        {activeTab == ''
                        ?   
                            <>
                                <img src='/logo.png' alt="React Logo" className='opacity-30 w-50 m-auto pt-30'/>
                                <p className='text-center text-[#7a7b7f]'>No view is selected</p>
                            </>
                        :
                            <SyntaxHighlighter
                                language="javascript"
                                style={dracula}
                                showLineNumbers={true}
                                lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap'}}}
                                wrapLines={true}
                                >
                                {codeSnippet}
                            </SyntaxHighlighter>
                        }
                    </div>
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