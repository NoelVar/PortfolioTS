import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from '@fortawesome/free-solid-svg-icons';
import type { FormEvent } from "react";

interface ContactFormProps {
    name: string;
    email: string;
    message: string;
    error: string;
    success: string;
    setName: (e: string) => void;
    setEmail: (e: string) => void;
    setMessage: (e: string) => void;
    handleToggle: () => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    isLoading: boolean;
}

const ContactForm = ({ name, email, message, error, success, setName, setEmail, setMessage, handleToggle, handleSubmit, isLoading }: ContactFormProps) => {
    
    // reusable styling
    const inputContainerStyle = "flex flex-col w-full md:w-3/4 my-2"
    const inputStyle = "w-full border-2 border-[#313340] min-h-8 md:min-h-6 p-1"
    const labelStyle = "text-white"

    return (
        <div className='w-full max-h-100 bg-[#22222c] border-t border-[#313340] text-wrappb-5'>
            <button onClick={handleToggle} className='w-full text-right pr-2'>
                <FontAwesomeIcon icon={faClose} className='text-[#7a7b7f] cursor-pointer'/>
            </button>
            <div className='pl-2 pr-2 text-sm md:text-md font-display break-words max-h-50 min-h-50 overflow-y-auto '>
                <form className="flex flex-col items-center" onSubmit={handleSubmit}>
                    <h1 className="text-lg text-[#bbbebf]">Contact me</h1>
                    <div className={inputContainerStyle}>
                        <label className={labelStyle}>Name</label>
                        <input 
                            type='text'
                            className={inputStyle}
                            value={name}
                            placeholder="Jane Doe"
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className={inputContainerStyle}>
                        <label>Email address</label>
                        <input 
                            type='text'
                            className={inputStyle}
                            value={email}
                            placeholder="jane@gmail.com"
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={inputContainerStyle}>
                        <label>Message</label>
                        <input 
                            type='textarea'
                            className={inputStyle}
                            value={message}
                            placeholder="Hi! This is a template message."
                            onChange={e => setMessage(e.target.value)}
                        />
                    </div>
                    <div className="w-full h-10 text-center">
                        {error &&
                            <p className="text-red-500">{error}</p>
                        }
                        {success &&
                            <p className="text-green-700">{success}</p>
                        }
                        {isLoading &&
                            <p className="text-[#7a7b7f]">Loading...</p>
                        }
                    </div>
                    <button type="submit" className="px-4 py-2 my-2 rounded bg-[#6272a4] cursor-pointer text-white hover:bg-[#ff79c6] hover:text-[#21222d]">Send</button>
                </form>
            </div>
        </div>
    );
}
 
export default ContactForm;