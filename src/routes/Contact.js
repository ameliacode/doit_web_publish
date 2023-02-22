import PageTitle from "components/PageTitle";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
    const [show, setShow] = useState(false);

    const handleSend = () => {
        setShow(true);
    }

    const handleClose = () => {
        setShow(false);
    }

    return (
        <motion.div
            key="contact"
            initial={{ x: "-100%"}}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: .8 }}
        >
        <section className="font-noto bg-menu4-image bg-repeat h-full overflow-y-auto text-gray-text">
            <PageTitle title={"Contact Us"}/>
            <section className="w-[800px] mt-[100px] mx-auto p-[30px] bg-white/70 rounded-[5px] ">
                <h3 className="mb-[40px] text-[24px] font-bold text-[#ea657b]">지금 이지스퍼블리싱에 물어보세요!!</h3>
                <form method="post" action="" name="contactus">
                    <fieldset>
                        <legend className="hidden">Contact Us</legend>
                        <div className="bg-contactbg bg-no-repeat bg-right-bottom pb-[150px] bg-[length:200px]">
                            <ul>
                                <li className="mb-[15px] relative pl-[150px]">
                                    <label for="name" className="block w-[150px] absolute left-0 top-0 text-[14px] text-[#555]">
                                        이름 <sup className="text-[#ea657b]">*</sup></label>
                                    <span className="block w-full h-[40px] border-[1px] border-[#ddd] bg-white">
                                        <input className="w-full h-full" type="text" name="name" required placeholder="이름을 입력하여 주세요"/>
                                    </span>
                                </li>
                                <li className="mb-[15px] relative pl-[150px]">
                                    <label for="email" className="block w-[150px] absolute left-0 top-0 text-[14px] text-[#555]"> 
                                        답변 받을 이메일 <sup className="text-[#ea657b]">*</sup></label>
                                    <span className="block w-full h-[40px] border-[1px] border-[#ddd] bg-white">
                                        <input className="w-full h-full" type="inputbox" name="email" required placeholder="sample@mail.com"/>
                                    </span>
                                </li>
                                <li className="mb-[15px] relative pl-[150px]">
                                    <label for="message" className="block w-[150px] absolute left-0 top-0 text-[14px] text-[#555]">
                                        문의내용 <sup className="text-[#ea657b]">*</sup></label>
                                    <span className="block w-full h-[200px] border-[1px] border-[#ddd] bg-white">
                                        <textarea className="w-full h-full " type="message" name="message" required placeholder="궁금한 사항을 작성해주세요."/>
                                    </span>
                                </li>
                            </ul>
                            <div className="w-full mt-[20px] text-center">
                                <button className="bg-[#3c4147] text-[15px] decoration-none text-white w-[150px] inline-block h-[35px] mt-[20px] rounded-[5px] text-center leading-[35px]" 
                                type="submit"
                                onClick={handleSend}>문의하기</button>
                            </div>
                        </div>
                        <div className={`fixed top-0 bottom-0 left-0 right-0 bg-black/70 z-50 ${show ? "block" : "hidden"}`}>
                            <section className="w-[550px] my-[10%] mx-auto p-[20px] rounded-[5px] bg-contactpop bg-no-repeat bg-right-bottom bg-white bg-[length:240px]">
                                <h1 className="text-[#59c3c3] text-[25px] font-bold mb-[20px] text-start">작성 완료되었습니다.</h1>
                                <p className="text-start text-[#3c4147]">확인 후 빠르게 답변 드리겠습니다.</p>
                                <div className="w-full mt-[20px] text-center">
                                    <a href="#" 
                                    onClick={handleClose}
                                    className="bg-[#3c4147] text-[15px] decoration-none text-white w-[150px] inline-block h-[35px] mt-[20px] rounded-[5px] text-center leading-[35px]">
                                        닫기</a>
                                </div>
                            </section>
                        </div>
                    </fieldset>
                </form>
            </section>
        </section>
        </motion.div>
    );
}

export default Contact;