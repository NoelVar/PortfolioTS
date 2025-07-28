import '../../css/util.css';
import './Hero.css';
import NavBar from '../NavBar/NavBar';
import HeroContent from './HeroContent';
import { useEffect, useState } from 'react';

const Hero = () => {

    const [classname, setClassname] = useState("navbar");

    useEffect(() => {
        window.addEventListener("scroll", 
            function() {
                if (this.window.scrollY > 100) {
                    setClassname("navbar scrolled")
                } else {
                    setClassname("navbar")
                }
            });
    }, [])

    return (  
        <div className="section hero-main">
            <NavBar classname={classname}/>
            <HeroContent />
        </div>    
    );
}
 
export default Hero;