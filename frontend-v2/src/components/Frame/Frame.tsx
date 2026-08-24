import { useState, type KeyboardEvent, type MouseEvent as ReactMouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import TitleBar from '../Content/TitleBar';
import ActivityBar from '../Content/ActivityBar';
import Tabs from '../Content/Tabs';
import Workspace from '../Content/Workspace';
import Console from '../Content/Console';
import Footer from '../Content/Footer';

interface FrameProps {
    mode?: 'technical' | 'nonTechnical';
}

const Frame = ({ mode: propMode }: FrameProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';
    
    const [activeTab, setActiveTab] = useState('')
    const [consoleOpen, setConsoleOpen] = useState(true)
    const [enteredText, setEnteredText] = useState('')
    const [showHelp, setShowHelp] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    
    const currentModeData = portfolioData[mode];
    const activeContent = currentModeData[activeTab as keyof typeof currentModeData];

    const handleEvent = (e: ReactMouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        setActiveTab(id)
    }

    const handleToggle = () => {
        setConsoleOpen(!consoleOpen)
    }

    const handleEnter = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const trimmed = enteredText.trim()
            setError('')
            setShowHelp(false)
            setSuccess('')
            setEnteredText('')

            if (trimmed.startsWith("email -contact ")) {
                const email = trimmed.replace("email -contact", "").trim()
                setEmail(email)
            } else if (trimmed.startsWith("name -contact ")) {
                const name = trimmed.replace("name -contact", "").trim()
                setName(name)
            } else if (trimmed.startsWith("msg -contact ")) {
                const msg = trimmed.replace("msg -contact", "").trim()
                setMessage(msg)
            } else if (trimmed.startsWith("msg -send")){
                try {
                    const response = await fetch('http://localhost:5000/api/contact', 
                        {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({name, email, message})
                        }
                    );

                    if (response.ok) {
                        setName('');
                        setEmail('');
                        setMessage('');
                        setError('');
                        setShowHelp(false)
                        setSuccess('Message sent successfully.')
                    } else {
                        setError(`ERROR ${response.status}: ${response.statusText}`)
                    }
                } catch (error) {
                    console.error(error);
                    setError(`ERROR 500: Server Error`)
                }
            } else if (trimmed.startsWith("help")) {
                setShowHelp(true)
            } else if (trimmed.startsWith("clear")) {
                setShowHelp(false)
                setError('')
                setEmail('')
                setName('')
                setMessage('')
                setSuccess('')
            } else {
                setError("ERROR: Did not recognise command. Use help for more information.")
            }
        }
    }

    return (
        <div className="flex h-screen overflow-hidden flex-col text-white bg-[#282a36]">
            <TitleBar 
                mode={mode} 
            />

            {/* Main/Middle Area */}
            <div className="flex-1 flex flex-col-reverse md:flex-row min-h-0">
                <ActivityBar 
                    mode={mode} 
                    onToggleConsole={handleToggle} 
                />

                {/* Editor Area */}
                <div className='flex-1 flex flex-col min-w-0 min-h-0'>
                    {/* Title Bar/Headers */}
                    <Tabs 
                        mode={mode} 
                        currentTab={activeTab} 
                        onEvent={handleEvent} 
                    />

                    {/* Editor Workspace View */}
                    <Workspace 
                        activeContent={activeContent} 
                    />

                    {/* Console */}
                    {consoleOpen &&
                        <Console 
                            mode={mode} 
                            name={name}
                            email={email}
                            message={message}
                            error={error} 
                            success={success}
                            showHelp={showHelp} 
                            handleToggle={handleToggle} 
                            enteredText={enteredText}
                            setEnteredText={setEnteredText} 
                            handleEnter={handleEnter}
                        />
                    }
                </div>
            </div>

            {/* Status Bar */}
            <Footer />
        </div>
    );
}
 
export default Frame;