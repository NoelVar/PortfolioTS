import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import type { TabContent } from '../../data/portfolioData';

interface CodeSyntaxProps {
    activeContent: TabContent;
}

const CodeSyntax = ({ activeContent }: CodeSyntaxProps) => {
    return (
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
    );
}
 
export default CodeSyntax;