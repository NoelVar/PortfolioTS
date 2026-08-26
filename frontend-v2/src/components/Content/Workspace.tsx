import { useSearchParams } from 'react-router-dom';
import type { TabContent } from '../../data/portfolioData';
import CodeSyntax from './CodeSyntax';
import VisualSyntax from './VisualSyntax';

interface WorkspaceProps {
    mode?: 'technical' | 'nonTechnical';
    activeContent?: TabContent;
}

const Workspace = ({ mode: propMode, activeContent }: WorkspaceProps) => {
    // mode from URL
    const [searchParams] = useSearchParams();
    const mode = propMode || (searchParams.get('mode') as 'technical' | 'nonTechnical') || 'technical';
    
    return (
        <div className='h-full overflow-y-auto leading-relaxed'>
            {activeContent
            ?  (
                <>
                    <p className='text-[#7a7b7f] text-sm mb-2 pl-5'>{activeContent.path}</p>
                    {activeContent.language === 'image' ? (
                        <div className='flex items-center justify-center p-5'>
                            <img src={activeContent.content} alt={activeContent.id} className='max-h-100' />
                        </div>
                    ) : (
                    <>
                        {mode == 'technical'
                        ?
                            <CodeSyntax activeContent={activeContent} />
                        :
                            <VisualSyntax activeContent={activeContent}/>
                        }
                    </>
                    )}
                </>
            ) : (
                <p className='text-center text-[#7a7b7f] pt-50'>No view is selected</p>
            )
            }
        </div>
    );
}
 
export default Workspace;