import './Timeline.css';

const Timeline = () => {
    return (
            <div className="timeline">
                <div className='progress'></div>
                <div className='line'>
                    <div className='item'>
                        <div className='marker'>
                            <div className='content'>
                                <h2>2022</h2>
                            </div>
                        </div>
                    </div>
                    <div className='item'>
                        <div className='marker'>
                            <div className='content'>
                                <h2>2025</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Timeline;