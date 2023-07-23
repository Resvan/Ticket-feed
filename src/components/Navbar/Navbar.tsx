import { useEffect, useState } from "react";

interface NavbarProps {
    page: string;
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
    const [color, setColor] = useState(false);
    const [showMobileNav, setShowMobileNav] = useState(false);

    useEffect(() => {
        const changeColor = () => {
            const isColor = window.scrollY > 60;
            setColor(isColor);
        };
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const toggleMobileNav = () => {
        setShowMobileNav((prevShowMobileNav) => !prevShowMobileNav);
    };

    const navbarClasses = `${color ? "bg-customGray" : "bg-transparent"} hidden md:flex items-center justify-between min-w-full md:px-28 h-16 sticky top-0 px-4`;

    return (
        <>
        <div className={navbarClasses}>
            <div className="text-white">
                <h1 className="font-medium text-xl">TICKET FEED</h1>
            </div>
            <div className="hidden md:block">
                <ul className="flex gap-7 text-sm">
                    <li
                        className={`navlink hover:cursor-pointer hover:text-white ${page === "home" ? "text-white" : "text-gray-300"
                            }`}
                    >
                        Home
                    </li>
                    <li
                        className={`navlink hover:cursor-pointer hover:text-white ${page === "about" ? "text-white" : "text-gray-300"
                            }`}
                    >
                        About
                    </li>
                    <li
                        className={`navlink hover:cursor-pointer hover:text-white ${page === "packages" ? "text-white" : "text-gray-300"
                            }`}
                    >
                        Packages
                    </li>
                    <li
                        className={`navlink hover:cursor-pointer hover:text-white ${page === "services" ? "text-white" : "text-gray-300"
                            }`}
                    >
                        Services
                    </li>
                    <li
                        className={`navlink hover:cursor-pointer hover:text-white ${page === "contact" ? "text-white" : "text-gray-300"
                            }`}
                    >
                        Contact Us
                    </li>
                </ul>
            </div>
            </div>
            <div className="md:hidden flex justify-between p-5">
                <div className="text-white">
                    <h1 className="font-medium text-xl">TICKET FEED</h1>
                </div>
                <button
                    className="text-white focus:outline-none"
                    onClick={toggleMobileNav}
                >
                    <i className="fas fa-bars fa-xl"></i>
                </button>
            </div>
            {showMobileNav && (
                <div className="md:hidden bg-customGray">
                    <ul className="flex flex-col gap-4 text-sm p-4 text-white">
                        <li className="navlink">Home</li>
                        <li className="navlink">About</li>
                        <li className="navlink">Packages</li>
                        <li className="navlink">Services</li>
                        <li className="navlink">Contact Us</li>
                    </ul>
                </div>
            )}
        </>    
    );
};

export default Navbar;
