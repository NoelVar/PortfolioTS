import type { TabContent } from '../../data/portfolioData';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface WorkspaceProps {
    activeContent?: TabContent;
}

const Workspace = ({ activeContent }: WorkspaceProps) => {
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
                    <SyntaxHighlighter
                        language={activeContent.language}
                        style={dracula}
                        showLineNumbers={true}
                        wrapLines={true}
                        lineProps={(lineNumber: number) => {
                            const lineText = activeContent.content.split('\n')[lineNumber - 1] || '';
                            const hasUrl = lineText.includes('http://') || lineText.includes('https://');

                            if (hasUrl) {
                                return {
                                    style: { "cursor": 'pointer' },
                                    onClick: () => {
                                        const match = lineText.match(/(https?:\/\/[^\s"]+)/);
                                        if (match) window.open(match[0], '_blank');
                                    }
                                };
                            }
                            return {};
                        }}
                        className='text-sm rounded-lg'
                    >
                        {activeContent.content}
                    </SyntaxHighlighter>
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