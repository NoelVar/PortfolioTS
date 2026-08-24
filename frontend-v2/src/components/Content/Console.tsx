import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useSearchParams } from "react-router-dom";

interface ConsoleProps {
    mode?: 'technical' | 'nonTechnical';
    name: string;
    email: string;
    message: string;
    error: string;
    success: string;
    showHelp: boolean;
    handleToggle: () => void;
    enteredText: string;
    setEnteredText: (e: string) => void;
    handleEnter: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Console = ({ 
        mode: propMode,
        name, 
        email, 
        message, 
        error, 
        success,
        showHelp, 
        handleToggle, 
        enteredText,
        setEnteredText, 
        handleEnter 
    }: ConsoleProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';

    const helpStyling = "flex flex-col md:flex-row justify-between";    

    return (
        <div className='w-full max-h-100 bg-[#22222c] border-t border-[#313340] text-wrappb-5'>
            <button onClick={handleToggle} className='w-full text-right pr-2'>
                <FontAwesomeIcon icon={faClose} className='text-[#7a7b7f] cursor-pointer'/>
            </button>
            <div className='pl-2 pr-2 text-sm md:text-md font-display break-words max-h-50 min-h-50 overflow-y-auto '>
                <p className='text-[#7a7b7f]'>If you wish to contact me enter the following commands:</p>
                <ul className='text-[#7a7b7f] pl-5'>
                    <li>name -contact [your name here]</li>
                    <li>email -contact [your@email_address.com]</li>
                    <li>msg -contact [your message here]</li>
                    <li>msg -send</li>                    
                </ul>
                <p className='text-[#7a7b7f]'>For further help please use:</p>
                <ul className='text-[#7a7b7f] pl-5'>
                    <li>help</li>
                </ul>
                <p>C:\Users\{mode}\Documents\Portfolio&gt;&nbsp;
                <input 
                    type='text'
                    autoFocus={true}
                    className='w-full md:w-1/2 focus:outline-none'
                    value={enteredText}
                    onChange={e => setEnteredText(e.target.value)}
                    onKeyDown={e => handleEnter(e)}
                />
                </p>
                {name && 
                    <p>Current name entered: {name}</p>
                }
                {email && 
                    <p>Current email address entered: {email}</p>
                }
                {message && 
                    <p>Current message entered: {message}</p>
                }
                {success &&
                    <p className='text-green-700'>{success}</p>
                }
                {error &&
                    <p className='text-red-700'>{error}</p>
                }
                {showHelp &&
                    <div className='text-[#7a7b7f] flex flex-col gap-5 md:gap-0 md:w-1/2'>
                        <p className={helpStyling}>name -contact <span>ADDS OR CHANGES NAME ON CONTACT FORM</span></p>
                        <p className={helpStyling}>email -contact <span>ADDS OR CHANGES EMAIL ADDRESS ON CONTACT FORM</span></p>
                        <p className={helpStyling}>msg -contact <span>ADDS OR CHANGES MESSAGE ON CONTACT FORM</span></p>
                        <p className={helpStyling}>msg -send <span>SENDS MESSAGE/QUERY (IF ALL FIELD ARE FIELD)</span></p>
                        <p className={helpStyling}>help <span>PROVIDES DESCRIPTION OF COMMANDS</span></p>
                        <p className={helpStyling}>clear <span>CLEARS COMMAND PROMPT AND VARIABLES</span></p>
                    </div>
                }
            </div>
        </div>
    );
}
 
export default Console;