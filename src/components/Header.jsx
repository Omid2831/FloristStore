import { useState } from "react";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    {/** define the base line style */ }
    const lineStroke = "block w-6 h-0.5 transition-all duration-200 ease-in-out";

    {/** define the base divider line  */ }
    const divider = "border-b-1 border-gray-500 mt-2";

    return (
        <header className="w-full border-4 border-gray-100 shadow-md bg-white/90 px-4 py-4 z-50">
            <div className="flex justify-start gap-5 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                {/* Mobile Menu Button - Left side on mobile */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5"
                    aria-label="Toggle menu"
                >
                    {/* Top line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "rotate-45 translate-y-2" : ""
                            }`}
                    />

                    {/* Middle line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "opacity-0" : "opacity-100"
                            }`}
                    />

                    {/* Bottom line */}
                    <span
                        className={`${lineStroke} bg-black ${isOpen ? "-rotate-45 -translate-y-2" : ""
                            }`}
                    />
                </button>


                <span className="text-">
                    FloristStore
                </span>
                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex flex-row gap-6">
                        {/* Home  */}
                        <li className="list-none">
                            <a href="#home" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Home
                            </a>
                        </li>

                        {/* Roses */}
                        <li className="list-none">
                            <a href="#roses" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Roses
                            </a>
                        </li>

                        {/* Bouquets */}
                        <li className="list-none">
                            <a href="#bouquets" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Bouquets
                            </a>
                        </li>

                        {/* Plants */}
                        <li className="list-none">
                            <a href="#plants" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Plants
                            </a>
                        </li>
                            
                        {/* Gifts */}
                        <li className="list-none">
                            <a href="#gifts" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Gifts
                            </a>
                        </li>


                        {/* Location */}
                        <li className="list-none">
                            <a href="#location" className="text-black text-sm font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Location
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="px-4 pb-4">
                    <ul className="flex flex-col gap-4 border-t border-gray-200 pt-4">
                        {/* Home Dropdown - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#home" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Home
                            </a>
                        </li>

                        {/* Roses - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#roses" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Roses
                            </a>
                        </li>

                        {/* Bouquets - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#bouquets" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Bouquets
                            </a>
                        </li>

                        {/* Gifts  - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#gifts" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Gifts
                            </a>
                        </li>

                        {/* Plants - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#plants" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Plants
                            </a>
                        </li>


                        

                        {/* Location - Mobile */}
                        <li className={`${divider} list-none`}>
                            <a href="#location" className="text-black text-base font-semibold cursor-pointer hover:text-cyan-400 transition-all duration-200">
                                Location
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
