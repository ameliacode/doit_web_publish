import PageTitle from "components/PageTitle";
import { FAQInfo } from "./FAQInfo";

const FAQItem = ({item, index}) => {
    const {question, link, linkalt, answer, imgsrc, top} = item
    return(
        <>
        <h4 className="text-[#3c4147] font-medium pr-[20px] pb-[20px] mt-[20px] mr-[20px] ml-[30px] cursor-pointer">
            <span className="inline-block mr-[10px] font-black">Q{index}</span>{question}
        </h4>
        <p className="h-auto bg-[#eee] bg-no-repeat">
            <div>
                <img src={imgsrc} className={`w-[100px] float-left relative left-[40px] ${top}`}/>
                <div className="pt-[30px] pr-[100px] pb-[70px] pl-[200px] text-[#737373]">
                    { link ? 
                    <a href={link} className="text-[#919090]"
                       target="_blank">
                       {linkalt}
                    </a> : null }
                    {answer}
                </div>
            </div>
        </p>
        </>
    );
}

const FAQ = () => {
    return (
        <section className="font-noto bg-menu3-image bg-repeat h-full overflow-y-auto text-gray-text">
            <PageTitle title={"FAQ"}/>
            <div className="max-w-[1100px] m-auto"> 
                <section className="p-[50px] pt-[30px]">
                    <h3 className="text-white">
                        <strong className="text-[25px] pr-[10px]">자주 묻는 질문</strong>
                        <span className="text-[14px] font-normal">이지스퍼블리싱의 자주 묻는 질문을 모았습니다.</span>
                    </h3>
                    <img className="float-right clear-right" src="images/faq_boy.png"/>
                  <div className="mt-[170px]">
                    <ol>
                        { FAQInfo.map((item, index) => (
                        <li className="w-full bg-white border-t-[4px] border-[#ea657b]">
                            <FAQItem item={item} index={index+1} />
                       </li>
                        ))}
                 
                    </ol>
                    </div>
                </section>
            </div>
        </section>
    );
}

export default FAQ;