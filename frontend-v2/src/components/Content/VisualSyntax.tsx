import type { TabContent } from "../../data/portfolioData";

interface VisualSyntaxProps {
    activeContent: TabContent;
}

const VisualSyntax = ({ activeContent }: VisualSyntaxProps) => {
    return (
        <div className="dynamicHTMLstyling m-5 text-[#bbbebf] md:px-15">
            <div 
                dangerouslySetInnerHTML={{ __html: activeContent.content }} 
            />
        </div>
    );
}
 
export default VisualSyntax;