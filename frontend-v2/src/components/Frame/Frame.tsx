import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCopy} from '@fortawesome/free-regular-svg-icons';
import { faTriangleExclamation, faMagnifyingGlass, faCodeBranch, faBugSlash, faEllipsis } from '@fortawesome/free-solid-svg-icons';

const Frame = () => {
    return (
        <div className="flex h-screen overflow-hidden flex-col bg-[#282a36] text-white">
            {/* Title Bar */}
            <div className="w-full bg-[#21222c] h-8 flex items-center justify-center text-xs border-b border-[#313340]">
                <p>Noel Varga's Portfolio</p>
            </div>

            {/* Main/Middle Area */}
            <div className="flex-1 flex flex-row min-h-0">
                {/* Activity Bar */}
                <div className="bg-[#21222d] w-12 border-r border-[#313340] hidden md:flex flex-col items-center py-2">
                    <FontAwesomeIcon 
                        icon={faCopy}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faMagnifyingGlass}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faCodeBranch}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faBugSlash}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                    <FontAwesomeIcon 
                        icon={faEllipsis}
                        className='p-5 text-lg cursor-pointer text-[#6272a4] hover:text-white'
                    />
                </div>

                {/* Editor Area */}
                <div className='flex-1 flex flex-col min-w-0 min-h-0'>
                    {/* Title Bar/Headers */}
                    <div className='bg-[#191a21] w-full h-15 md:h-10 flex text-sm border-b border-[#313340] overflow-x-auto flex-nowrap shrink-0'>
                        <div className='bg-[#282a36] px-6 h-full flex items-center border-t-2 border-[#ff79c6] cursor-pointer whitespace-nowrap shrink-0'>
                            About
                        </div>
                        <div className='bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] cursor-pointer whitespace-nowrap shrink-0 hover:text-white'>
                            Projects
                        </div>
                        <div className='bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] cursor-pointer whitespace-nowrap shrink-0 hover:text-white'>
                            Experience
                        </div>
                        <div className='bg-[#22222c] px-6 h-full flex items-center border-r border-[#30363d] cursor-pointer whitespace-nowrap shrink-0 hover:text-white'>
                            Contact
                        </div>
                    </div>

                    {/* Editor Workspace View */}
                    <div className='h-full overflow-y-auto p-5 leading-relaxed'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque risus urna, tincidunt sed felis at, vestibulum tempor elit. Donec sed lorem non nisi blandit fermentum id ut ligula. Mauris non leo nibh. Proin id dapibus mauris. Fusce fermentum, augue nec accumsan varius, lorem neque accumsan nibh, sit amet dignissim urna sem et ex. In dapibus lorem nec pharetra commodo. Nulla consequat porttitor ornare. Duis commodo fermentum arcu at imperdiet. Phasellus cursus, erat nec sagittis lobortis, eros nibh rhoncus ante, quis ullamcorper lacus velit eu leo. Pellentesque eget congue nulla. Morbi quis nisl nisl. Proin vel dolor velit. Vestibulum venenatis ligula vel nibh viverra, id vehicula leo laoreet. Nam eget aliquam augue, ac tincidunt dui. Maecenas lobortis nunc quam, eu laoreet dui varius a. Nulla vestibulum purus non scelerisque mattis.

                        Maecenas vulputate libero sed orci imperdiet, id ullamcorper mi dictum. Sed venenatis diam erat, vel convallis lorem pulvinar id. Quisque viverra nibh ac enim mattis iaculis. Cras massa risus, sollicitudin non erat nec, semper gravida risus. Mauris feugiat, dui ac euismod mattis, est eros faucibus est, quis lacinia nisi enim ut ex. Ut non eleifend erat. Nam non nibh volutpat, egestas enim sit amet, vehicula sem.

                        Nam eleifend urna quis luctus ultricies. In ultricies felis ac arcu scelerisque fermentum. In augue enim, posuere a ipsum eget, euismod varius lectus. Phasellus commodo laoreet diam ut sollicitudin. Aliquam consequat quam massa, non tempor leo congue id. Sed lobortis eget nulla ut iaculis. Morbi posuere fringilla malesuada. Donec interdum pretium enim, a hendrerit metus vulputate vel. Quisque feugiat lorem at ligula vulputate rhoncus. Fusce eu accumsan ante, ut mollis tellus. Nam non neque aliquam, dapibus lectus vel, varius arcu. Donec finibus, eros et ultrices rutrum, sapien lacus tempor arcu, sit amet pretium turpis turpis vel mi. In finibus congue nisl nec pretium.

                        Aliquam finibus turpis sit amet erat tempor, ut egestas tortor placerat. Nulla enim libero, vehicula hendrerit mi nec, dictum ullamcorper quam. Vivamus aliquam, ex id congue gravida, est lacus pretium magna, a volutpat libero sem in mi. Pellentesque orci lacus, imperdiet a lobortis sit amet, consequat ut justo. Duis nec quam venenatis orci efficitur sollicitudin. Donec at posuere sapien. Proin interdum arcu orci, condimentum lacinia orci gravida sit amet. Sed pretium mauris at nisl dictum ullamcorper. Maecenas imperdiet dictum felis nec elementum. Morbi dignissim iaculis urna a porta. Proin sit amet metus ut ipsum feugiat lacinia a a purus. Fusce laoreet iaculis urna, quis eleifend nunc hendrerit hendrerit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc in orci dignissim, elementum ligula ac, sollicitudin purus.

                        Aliquam erat volutpat. Maecenas luctus non ante nec molestie. Duis eu mattis nisl. Donec ut congue ligula. Etiam euismod eros vel dui euismod molestie. Sed sollicitudin augue mauris. Fusce consectetur a ligula et ornare. Nulla sagittis vulputate eros, id consequat nisi auctor at. Donec laoreet, quam dapibus varius tincidunt, felis nunc consectetur purus, vitae vehicula augue tellus at dolor. Nam tempor fermentum semper. Vestibulum ac luctus nunc, id consequat orci. Donec eleifend massa a finibus porta. Vestibulum id consectetur orci. Ut non pulvinar mauris, non finibus quam.
                    </div>
                </div>
            </div>

            {/* Status Bar */}
            <div className="w-full bg-[#21222c] h-5 text-[#7a7b7f] border-t border-[#313340] flex items-center shrink-0">
                <div className="flex flex-row justify-between w-full px-2 text-xs">
                    <div className='flex items-center gap-2'>
                        <span className="flex items-center gap-1">
                            <FontAwesomeIcon 
                                icon={faCircleXmark}
                            />
                            0
                        </span>
                        <span className="flex items-center gap-1">
                            <FontAwesomeIcon 
                                icon={faTriangleExclamation}
                            />
                            0
                        </span>
                    </div>
                    <div>
                        <span>@2026 All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Frame;