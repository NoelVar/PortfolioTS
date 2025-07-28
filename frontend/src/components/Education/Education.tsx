import './Education.css';
import Timeline from './Timeline/Timeline';

const Education = () => {
    return (
        <div className='section' id='education'>
            <h1 className="title">Education</h1>
            <div className='education-container'>
                <Timeline />
                <div className='education-content'>
                    <div className='education-card'>
                        <img src='UoW_crest.png' alt='Crest of University of Westminster' />
                        <div className='education-text'>
                            <h3 className='timeframe1'>Student at University of Westminster</h3>
                            <p>
                                Completed several different team/individual projects during studies
                            </p>
                            <p>
                                Achieved First Class grades
                            </p>
                            <p>
                                Has been nominated for Final Year Project Awards
                            </p>
                        </div>
                    </div>
                    <div className='education-card'>
                        <img src='KCL_crest.png' alt='Crest of King\s College London' />
                        <div className='education-text'>
                            <h3 className='timeframe2'>Student at Kings College London</h3>
                            <p>
                                Student of MSc Advance Computing
                            </p>
                            <p>
                                Thesis Idea: Lupus Understanding & Navigation Assistant

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}
 
export default Education;