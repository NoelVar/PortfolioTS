import { useSearchParams } from 'react-router-dom';

interface FrameProps {
    mode?: 'technical' | 'nonTechnical';
}

const TitleBar = ({ mode: propMode }: FrameProps) => {
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';

    return (
        <div className="w-full bg-[#21222c] h-8 flex items-center justify-center text-xs border-b border-[#313340]">
            <p>Noel Varga's Portfolio - {mode === 'technical' ? 'Technical View' : 'Non-Technical View'}</p>
        </div>
    );
}
 
export default TitleBar;