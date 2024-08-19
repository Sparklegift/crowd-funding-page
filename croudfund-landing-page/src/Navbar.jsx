import { Link, useNavigate } from "react-router-dom";


const Navbar = ({ toggleMenu, isOpen, isOpen1, hoverClick  }) => {
    
    const navigate = useNavigate();

    const handleNavigation = (targetId) => {
        navigate('/');
        setTimeout(() => {
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        }, 10);
};


    return ( 
        <div>
            <div className="relative">
                <img className={`md:hidden ${isOpen ? 'brightness-30' : 'brightness-100'} ${isOpen1 ? 'brightness-50' : 'brightness-100'}`} src="/image/image-hero-mobile.jpg" alt="hero" />
                <img className="md:block hidden" src="/image/image-hero-desktop.jpg" />
                <div className="absolute inset-0">
                    <div className="relative">
                        <Link to={`/`}>
                        <div className="absolute left-5 md:left-36 top-7 cursor-pointer">
                            <img src="/image/logo.svg" />
                        </div>
                        </Link>
                        <div className="hidden md:block absolute top-11 right-24 text-white">
                            <ul className="text-lg font-Commissioner flex gap-4 cursor-pointer">
                                <li onClick={() => handleNavigation('about')} className="">About</li><hr/>
                                <li onClick={() => handleNavigation('discover')} className="">Discover</li><hr/>
                                <li onClick={() => hoverClick('Started')} className="">Get Started</li>
                            </ul>
                        </div>
                        <div onClick={toggleMenu} className={`absolute right-6 top-7 md:hidden ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
                            <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
                        </div>

                        <div onClick={toggleMenu} className={`absolute right-6 top-7 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z"/><path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z"/></g></svg>
                        </div>

                        <div className="flex justify-center relative top-20">
                            <div className={`transition-all duration-1000 ease-in-out w-10/12 rounded-lg bg-white z-20 fixed ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                                <div className="">
                                    <ul className="text-lg font-Commissioner font-semibold grid gap-5 mt-5 pb-5">
                                        <li className="ml-6">About</li><hr/>
                                        <li className="ml-6">Discover</li><hr/>
                                        <li className="ml-6">Get Started</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Navbar;