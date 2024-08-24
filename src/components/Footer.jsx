import styles from "../style";
import { logo } from "../assets";
import { footerLinks } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="nybn"
          className="w-[400px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} text-gray-600 mt-4 ml-16 max-w-[312px]`}>
            北京宁远博纳电子科技有限责任公司,成立于2016年，公司位于北京市石景山区，并在江苏昆山市设有办事处。
        </p>
      </div>

      <div className="flex-[0.5] w-full flex flex-row flex-wrap md:mt-0 mt-20">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-4 my-4 min-w-[350px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-gray-800">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-sky-900 hover:text-sky-600 cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full pt-6 border-t-[1px] border-t-[#024A6E]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-sky-900">
        北京宁远博纳电子科技有限责任公司 Ⓒ版权所有  <br className="sm:block hidden" />
        Copyright Ⓒ 2024 Beijing Ningyuan Bona Electronic Technology Co., Ltd.  All Rights Reserved.
      </p>
    </div>
  </section>
);

export default Footer;
