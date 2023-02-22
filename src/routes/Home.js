
import React from "react";
import { motion } from "framer-motion";

const Home = () => {

    return(
        <section className="font-noto w-full h-full relative max-w-[1200px] mx-auto">
            <section className="animate-item animation-delay-none fill-mode-forwards
             w-[25%] h-full absolute top-[-100%] left-0 bg-menu1-image bg-repeat border-r-[1px] border-black">
                <h2 className="absolute left-[30px] top-[180px] text-red text-[25px] font-bold z-[4]">회사소개</h2>
                <div><img className="absolute min-w-[350px] -right-[20px] top-[130px]"src="images/main_ico1.png"/></div>
            </section>
            <section className="animate-item animation-delay-300 fill-mode-forwards
            w-[25%] h-full absolute top-[-100%] left-[25%] bg-menu2-image bg-repeat border-r-[1px] border-black">
                <h2 className="absolute left-[30px] top-[180px] text-red text-[25px] font-bold z-[4]">도서소개</h2>
                <div><img className="absolute max-w-[180px]  -right-[30px] top-[180px]" src="images/main_ico2.png"/></div>
            </section>
            <section className="animate-item animation-delay-600 fill-mode-forwards
            w-[25%] h-full absolute top-[-100%] left-[50%] bg-menu3-image bg-repeat border-r-[1px] border-black">
                <h2 className="absolute left-[30px] top-[180px] text-red text-[25px] font-bold z-[4]">FAQ</h2>
                <div><img className="absolute max-w-[270px] max-h-[310px] -right-[60px] top-[30px]" src="images/main_ico3.png"/></div>
            </section>
            <section className="animate-item animation-delay-800 fill-mode-forwards
            w-[25%] h-full absolute top-[-100%] left-[75%] bg-menu4-image bg-repeat">
                <h2 className="absolute left-[30px] top-[180px] text-red text-[25px] font-bold z-[4]">Contact Us</h2>
                <div><img className="absolute min-w-[350px] max-h-[400px] -right-[170px] top-[100px]" src="images/main_ico4.png"/></div>
            </section>
        </section>
    );
};

export default Home;