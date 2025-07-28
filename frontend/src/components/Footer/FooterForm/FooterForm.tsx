import { FormEvent, useState } from 'react';
import '../../../css/util.css';
import '../Footer.css';
import { Button, Form } from "react-bootstrap";
import { Bounce, toast } from 'react-toastify';

const FooterForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true)
        const id = toast.loading("Please wait...", 
            {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
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
                setIsLoading(false);
                toast.update(id, 
                {   
                    render: "Message sent!", 
                    type: "success", 
                    isLoading: false, 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            } else {
                let errorStatus = response.status;
                let errorMsg = response.statusText;
                if (errorStatus !== 500) {
                    const errorData = await response.json();
                    errorMsg = errorData.error || errorMsg;
                }
                setIsLoading(false);
                toast.update(id, 
                {   
                    render: errorMsg, 
                    type: errorStatus !== 500 ? "warning" : "error", 
                    isLoading: false, 
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3">
                <Form.Label>
                    Your Name
                </Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your name..." 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>
                    Email Address
                </Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter your email address..." 
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>
                    Message
                </Form.Label>
                <Form.Control 
                    as='textarea' 
                    rows={5} 
                    placeholder="Enter your message..." 
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
            </Form.Group>
            <Button 
                type='submit' 
                className='button'
                disabled={isLoading}
            >
                Submit
            </Button>
        </Form>
    );
}
 
export default FooterForm;