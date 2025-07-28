import './Hero.css';
import '../../css/util.css';

const HeroContent = () => {
    return (
        <div className="hero-content">
            <div className="heading-CTA">
                <h1>Code, Create, <br />Innovate</h1>
                <a href='#about' className="button">More</a>
            </div>
            <div className="hero-image">
                    <img src="me_and_founder.jpg" alt="Me and founder" className="image" title="A founder and me, on foundermatcha's event."></img>
            </div>
        </div>
    );
}
 
export default HeroContent;