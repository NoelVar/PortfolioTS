import '../../css/util.css';
import './Footer.css';
import { FilePdf, Github, Linkedin } from 'react-bootstrap-icons';
import FooterForm from './FooterForm/FooterForm';

const Footer = () => {
    return (
        <div className="footer" id='resume'>
            <div className='contact-me'>
                <h1>Contact me</h1>
            </div>
            <div className='footer-content'>
                <div className='footer-form'>
                    <FooterForm />
                </div>
                <div className='footer-resume'>
                    <p><b>Email:</b> varnoel11@gmail.com</p>
                    <h3>Resume</h3>
                    <a href='Noel_Varga_CV.pdf' download={'Noel_Varga_CV.pdf'} className='resume'><FilePdf /></a>
                    <h3>Other links</h3>
                    <div className='links'>
                        <a href='https://www.linkedin.com/in/noel-varga/' target="_blank" rel="noreferrer"><Linkedin className='icon'/></a>
                        <a href='https://github.com/NoelVar?tab=overview&from=2025-07-01&to=2025-07-24' target="_blank" rel="noreferrer"><Github className='icon'/></a>
                    </div>
                </div>
            </div>
            <div className='copyright'>
                <p>@2025 Noel Varga. All rights reserved.</p>
                <p className='muted'>COPYRIGHT LOLOLOL</p>
            </div>
        </div>
    );
}
 
export default Footer;