import {Link} from "react-router-dom"

const Header = () => {
    return(
        <header className="w-[180px] h-full fixed right-0 top-0 bg-header-image bg-repeat-y z-[11] ">
            <strong className="absolute right-[35px] top-[75px]">
                <Link to="/">
                    <img 
                    className="w-[100px]"
                    src = "images/mainLogo.png" alt="이지스퍼블리싱"/>
                </Link>
            </strong>
            <nav className="w-full h-full">
                <ul className="w-full h-full flex flex-col justify-center">
                    <li className="group hover:after:bg-red mb-[10px] ml-[30px] pl-[15px] relative 
                    after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white after:absolute after:left-0 after:top-[13px]">
                        <Link to="/company"  className="group-hover:text-red text-base text-white leading-8 font-semibold">
                            회사소개
                        </Link>
                    </li>
                    <li className="group hover:after:bg-red mb-[10px] ml-[30px] pl-[15px] relative 
                    after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white after:absolute after:left-0 after:top-[13px]">
                        <Link to="/books" className="group-hover:text-red text-base text-white leading-8 font-semibold" href="#">
                            도서소개
                        </Link>
                    </li>
                    <li className="group hover:after:bg-red mb-[10px] ml-[30px] pl-[15px] relative 
                    after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white after:absolute after:left-0 after:top-[13px]">
                        <Link to="/faq" className="group-hover:text-red text-base text-white leading-8 font-semibold" href="#">
                            FAQ
                        </Link>
                    </li>
                    <li className="group hover:after:bg-red mb-[10px] ml-[30px] pl-[15px] relative 
                    after:block after:w-[5px] after:h-[5px] after:rounded-[50%] after:bg-white after:absolute after:left-0 after:top-[13px]">
                        <Link to="/contact" className="group-hover:text-red text-base text-white leading-8 font-semibold" href="#">
                            Contact Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;