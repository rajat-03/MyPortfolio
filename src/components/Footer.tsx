import { Bio } from '@/data/constants';
import { FaGithub, FaLinkedin, FaInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="w-full py-8 flex justify-center bg-[#1C1C27]">
            <footer className="w-full max-w-[1200px] flex flex-col gap-3.5 items-center p-4 text-text_primary">
                <h1 className="font-semibold text-xl text-primary">Rajat Kumar</h1>
                <nav className="w-full max-w-screen-md mt-2 flex flex-row gap-8 justify-center max-[768px]:flex-wrap max-[768px]:gap-4 max-[768px]:justify-center max-[768px]:text-center max-[768px]:text-sm">
                    <a href="#about" className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary max-[768px]:text-base">About</a>
                    <a href="#skills" className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary max-[768px]:text-base">Skills</a>
                    <a href="#projects" className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary max-[768px]:text-base">Projects</a>
                    <a href="#education" className="text-text_primary no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-primary max-[768px]:text-base">Education</a>
                </nav>
                <div className="flex mt-4">
                    <a href={Bio.github} target="display" className="inline-block mx-4 text-2xl text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"><FaGithub /></a>
                    <a href={Bio.twitter} target="display" className="inline-block mx-4 text-2xl text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"><FaSquareXTwitter /></a>
                    <a href={Bio.linkedin} target="display" className="inline-block mx-4 text-2xl text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"><FaLinkedin /></a>
                    <a href={Bio.insta} target="display" className="inline-block mx-4 text-2xl text-text_primary transition-colors duration-200 ease-in-out hover:text-primary"><FaInstagram /></a>
                </div>
                <p className="mt-6 text-sm text-center">
                    &copy; {currentYear} Rajat Kumar. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Footer;
