import PageTitle from "components/PageTitle";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BookInfo } from "./BookInfo";
import { motion } from "framer-motion";
import { RouteTransition } from "components/RouteTransition";

const Books = ({location}) => {
    const [buttonMode, setButtonMode] = useState(null);
    const [bookIndex, setBookIndex] = useState(1);
    const [bookDetail, setBookDetail] = useState(BookInfo[0].detail)
    const bookRollRef = useRef(null)

    useEffect(() => {
        const firstChild = bookRollRef.current.children[0];
        const lastChild = bookRollRef.current.children[bookRollRef.current.children.length - 1];
        
        if(buttonMode === "left") {
            setButtonMode(null)
            bookRollRef.current.removeChild(firstChild);
            bookRollRef.current.appendChild(firstChild);
        } else if (buttonMode === "right") {
            setButtonMode(null)
            bookRollRef.current.removeChild(lastChild);
            bookRollRef.current.insertBefore(lastChild, firstChild);
        }
    }, [buttonMode])

    const handleClick = (index) => {
        setBookIndex(index)
        setBookDetail(BookInfo[index-1].detail)
    }

    console.log(BookInfo[bookIndex])

    return(
        <motion.div
            key={location.pathname}
            initial={{ opacity: 1, x: '-100%', y: "-2%"}}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{type: "tween", duration: .8}}
            className="font-noto bg-menu2-image bg-repeat h-full text-gray-text overflow-y-auto">
            <PageTitle title={'도서소개'}/>
            <div className="max-w-full bg-bookbg bg-no-repeat bg-[left_top_22rem]">
                <section className="p-[50px] pt-[30px]">
                    <div>
                        <article className="animate-notebook w-[954px] h-[650px] mx-auto mt-[100px] bg-macbook bg-no-repeat bg-contain relative">
                            <div className="w-[719px] h-[453px] absolute left-[117px] top-[38px] py-[30px]">
                                <div className="flex flex-rows">
                                    <img className="w-[270px] h-full" width={270}
                                     src={BookInfo[bookIndex].imgsrc} 
                                     alt={BookInfo[bookIndex].title}/>
                                    <section className="w-[449px] float-left p-[20px] pl-[40px]">
                                        <h4 className="text-[30px] font-bold leading-none text-[#f92d68]">
                                            {BookInfo[bookIndex].title}
                                        </h4>
                                        <ul className="mt-[20px] list-none">
                                            { bookDetail.map((item, index) => (
                                            <li key={index} className="mb-[5px] pl-[10px] text-[12px] text-[#3c4147] relative">
                                                <span className="rounded-full inline-block absolute left-0 top-[8px] bg-[#3c4147] w-[3px] h-[3px]"/>
                                                <em className="font-bold not-italic">{item.index}</em>{item.item}</li>
                                            ))}
                                        </ul>
                                        <p className="pt-[10px] pr-[30px] text-[12px] text-[#666]">
                                            <div className="flex flex-rows">
                                                <img src="images/point_bg.png" className="w-[40px] h-[40px]"/>
                                                <strong className="pl-[6px] pb-[10px] font-bold"> 
                                                    문과생도 컴맹도 아무 것도 몰라도 <br/>이 한권으로 OK! 
                                                </strong>
                                            </div>
											이 책으로 공부하면 기초 태그부터 반응형 웹까지 한 번에 배울 수 있습니다. 자세한 설명과
											간단명료한 많은 예제로 웹 표준의 정석을 익힐 수 있습니다.
                                        </p>
                                        <a href="http://easyspub.co.kr/20_Menu/BookView/119/PUB" 
                                        className="bg-[#f92d68] text-[15px] decoration-none text-white w-[150px] inline-block h-[35px] mt-[20px] rounded-[5px] text-center leading-[35px]" target="blank">
                                            구매사이트
                                        </a>
                                    </section>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="relative w-[954px] h-[150px] mt-[40px] mx-auto grid grid-cols-[max-content_1fr_max-content]">
                        <button 
                        onClick = {() => setButtonMode("left")}
                        className="absoulte w-[20px] h-full top-0">
                            <img src="images/btn_left.png"/>
                        </button>
                        <div className="w-full h-full overflow-hidden animate-fade">
                            <ul className="w-[1000%]" ref={bookRollRef}>
                                {BookInfo.map((item, index) => (
                                    <li className="float-left w-[152px] text-center"
                                        key={index}
                                        onClick={()=>handleClick(index)}>
                                        <img className="w-[100px] mx-auto"  
                                        src={item.imgsrc}
                                        alt={item.title} />
                                        {index}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <button 
                        onClick = {() => setButtonMode("right")}
                        className="absoulte w-[20px] h-full top-0 right-0">
                            <img src="images/btn_right.png"/>
                        </button>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}

export default Books;