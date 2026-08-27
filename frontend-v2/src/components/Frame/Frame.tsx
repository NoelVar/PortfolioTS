import { useState, type FormEvent, type KeyboardEvent, type MouseEvent as ReactMouseEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { portfolioData } from '../../data/portfolioData';
import TitleBar from '../Content/TitleBar';
import ActivityBar from '../Content/ActivityBar';
import Tabs from '../Content/Tabs';
import Workspace from '../Content/Workspace';
import Console from '../Content/Console';
import Footer from '../Content/Footer';
import ContactForm from '../Content/ContactForm';

interface FrameProps {
    mode?: 'technical' | 'nonTechnical';
}

const Frame = ({ mode: propMode }: FrameProps) => {
    // Separating the selected view mode from the url
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';
    
    const [activeTab, setActiveTab] = useState('About.tsx')
    const [consoleOpen, setConsoleOpen] = useState(false)
    const [enteredText, setEnteredText] = useState('')
    const [showHelp, setShowHelp] = useState(false)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    // Retriving portfolio data based on mode
    const currentModeData = portfolioData[mode];
    const activeContent = currentModeData[activeTab as keyof typeof currentModeData];

    // Tab selection function
    const handleEvent = (e: ReactMouseEvent<HTMLDivElement>) => {
        const id = e.currentTarget.id;
        setActiveTab(id)
    }

    // Toggle "console" function
    const handleToggle = () => {
        setConsoleOpen(!consoleOpen)
    }

    const encode = (data: Record<string, string>) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const emailIsValid = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // Handle contact form submission
    const handleSumbit = async (e?: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        setError('');
        setSuccess('');
        setIsLoading(true);
        if (name == '' || email == '' || message == '') {
            setError("Please fill in all fields.");
            setIsLoading(false);
            return
        }
        if (!emailIsValid(email)) {
            setError("Email format is not valid.");
            setIsLoading(false);
            return
        }
        try {
            fetch('/', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: encode({
                        'form-name': 'contact',
                        'bot-field': '',
                        name: name.trim(),
                        email: email,
                        message: message.trim(),
                    }),
                })
                .then(() => {
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError('');
                    setShowHelp(false);
                    setIsLoading(false);
                    setSuccess('Message sent successfully.');
                })
                .catch((error) => {
                    // Isolating status and message from error
                    // setIsLoading(false);
                    // const errorStatus = response.status;
                    // let errorMsg = response.statusText;
                    // if (errorStatus !== 500) {
                    //     const errorData = await response.json();
                    //     errorMsg = errorData.error || errorMsg;
                    // }
                    setError(`ERROR ${error}`)
                })
        } catch (error) {
            console.error(error);
            setError(`ERROR 500: Server Error`)
            setIsLoading(false);
        }
    }

    // Handiling "console" enter
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
                handleSumbit()
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
                setError("ERROR: Did not recognise command. Use 'help' for more information.")
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
                        <>
                        {mode == 'technical'
                        ?
                            <Console 
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
                                isLoading={isLoading}
                            />
                        :
                            <ContactForm 
                                name={name}
                                email={email}
                                message={message}
                                error={error} 
                                success={success}
                                setName={setName} 
                                setEmail={setEmail} 
                                setMessage={setMessage} 
                                handleToggle={handleToggle} 
                                handleSubmit={handleSumbit}
                                isLoading={isLoading}
                            />
                        }
                        </>
                    }
                </div>
            </div>

            {/* Status Bar */}
            <Footer />
        </div>
    );
}
 
export default Frame;