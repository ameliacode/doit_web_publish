import PageTitle from "components/PageTitle";
import { motion } from "framer-motion";

const Company = () => {
    return(
        <motion.div 
            key="company"
            initial={{ x: "-100%"}}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: .8 }}
            className="font-noto bg-menu1-image bg-repeat h-full overflow-y-auto text-gray-text">
            <PageTitle title={"회사소개"}/>
            <section className="p-[50px] pt-[30px]">
            <h3 className="mb-[50px] text-[24px] relative text-white">이지스퍼블리싱
                <span className="block w-[30px] h-[8px] absolute left-0 bottom-[-10px] bg-red"/>
            </h3>
            <div className="flex flex-cols mb-[50px]">
                <div>
                    <h4 className="text-[40px] font-semibold text-gray-title">"사람을 구체적으로 도와주는 책"</h4>
                    <p>이지스퍼블리싱(주)의 책에는 '사람들에게 구체적으로 도움이 되는 책'을 만든다는 출판 가치가 담겨 있습니다. 2010년 5월 출범한 이지스퍼블리싱(주)는 크게 두 영역의 책을 출간합니다. IT 실용 도서와 학습 분야 도서입니다. IT 교재와 사진 책 등 실용서는 이지스퍼블리싱 브랜드로, 학습과 자녀교육 도서는 이지스에듀 브랜드로 출간하고 있습니다.</p>
                </div>
                <img src="images/content_img1.png" width={206}/>
            </div>
            <div className="mb-[50px]">
                <h4 className="text-[40px] flex justify-end align-end font-semibold text-gray-title">이지스퍼블리싱의 미션</h4>
                <p>사람에게 구체적으로 도움을 주는 책, 우리는 열심히 사는 사람들에게 도움이 되고 싶습니다. 우리는 책을 출간하기 전에 질문할 것입니다. "이 책이 사람들에게 도움이 됩니까?" 정보의 지름길을 만들어 빠르게 원하는 곳으로 가도록 도와주는 책. 손에 잡히는 이익을 얻을 수 있도록 도움이 되는 책을 만들고 싶습니다.</p>
            </div>
            <div className="mb-[50px]">
                <h4 className="text-[40px] font-semibold text-gray-title">조직관</h4>
                <p>이지스퍼블리싱(주)에 참여하는 모든 사람에게 도움을 주고 싶습니다. 함께 참여해서 만드는 기쁨, 세상에 도움을 주는 뿌듯함을 느끼며 책을 만들고, 우리의 미래를 원하는 대로 스스로 만드는 터전. 기여한 바, 공정한 분배가 이루어지고 영광을 함께 나누는 곳. 그곳이 바로 이지스퍼블리싱(주)입니다.</p>
            </div>
            <div className="mb-[50px]">
                <h4 className="text-[40px] flex justify-end align-end font-semibold text-gray-title">대표 시리즈</h4>
                <p>{`이지스퍼블리싱의 대표적인 시리즈는 <Do it! 시리즈>입니다. 특히 2012~2015년까지 ‘Do it! 안드로이드 앱 프로그래밍’은 IT 분야 1~2위에 오르며 많은 독자의 사랑을 받고 있습니다. 또한 2014년, 국립중앙도서관의 컴퓨터 IT 분야 대출 1위 도서는 바로 ‘Do it! html5+css3 웹 표준의 정석’이었습니다.`}</p>
            </div>
            <div className="flex flex-cols">
                <div>
                    <h4 className="text-[40px] font-semibold text-red">Do it! 시리즈 소개</h4>
                    <div className="flex flex-cols py-2">
                        <img src="images/content_img2.png" width={150} height={250}/>
                        <p className="px-10">이지스퍼블리싱(주)의 책에는 '사람들에게 구체적으로 도움이 되는 책'을 만든다는 출판 가치가 담겨 있습니다. 2010년 5월 출범한 이지스퍼블리싱(주)는 크게 두 영역의 책을 출간합니다. IT 실용 도서와 학습 분야 도서입니다. IT 교재와 사진 책 등 실용서는 이지스퍼블리싱 브랜드로, 학습과 자녀교육 도서는 이지스에듀 브랜드로 출간하고 있습니다.</p>
                    </div>
                </div>
                <img className="h-[280px] w-[170px]" src="images/content_img3.png" width={170} height={270}/>
            </div>
            </section>
        </motion.div>
    );
}

export default Company;