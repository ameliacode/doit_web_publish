import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return(
        <footer className="w-[180px] fixed right-0 bottom-0 pb-[30px] px-[20px] text-[11px] text-gray z-[12]">
        <div className="">
        <a className="hover:text-red hover:duration-500 text-base block w-[20px] h-[18px] absolute -top-[31px] right-[18px]"
        href="https://www.facebook.com/easyspub"  title="페이스북으로 이동">
            <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a className="hover:text-red hover:duration-500 text-base block w-[18px] h-[18px] absolute -top-[31px] right-[48px]"
        href="https://twitter.com/easyspub"  title="트위터로 이동">
            <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a className="hover:text-red hover:duration-500 text-base block w-[14px] h-[18px] absolute -top-[31px] right-[80px]"
        href="https://www.instagram.com/easyspub_book/"  title="인스타그램으로 이동">
            <FontAwesomeIcon icon={faInstagram} />
        </a>
        </div>
        <address className="pb-[15px] not-italic">
            (04003)서울특별시 마포구 잔다리로 109 TEL (02)325-1722 FAX (02)326-1723
        </address>
        <p>Copyright(c)2015 이지스퍼블리싱㈜ EasysPublishing Co., Ltd. All Rights Reserved</p>
        </footer>
    );
};

export default Footer;