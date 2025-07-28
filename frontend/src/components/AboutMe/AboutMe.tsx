import '../../css/util.css';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div className="section" id='about'>
            <h1 className='title'>Who am I?</h1>
            <div className='about-container'>
                <div className="about-image">
                    <img src="meLinkedIn.jpg" alt="Noel Varga (me)" className="image" title="Noel Varga (me)"></img>
                </div>
                <div className="about-content">
                    <p>
                        Hi, I am Noel Varga, and I recently received a First Class BSc in Computer Science from the University of Westminster. To build on this foundation, I am currently pursuing an MSc in Advanced Computing at King's College London.
                        <br />I have a strong interest in web development and artificial intelligence. In addition to my technical interests, I have a strong passion for environmental issues and sustainability.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default AboutMe;