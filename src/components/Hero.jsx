import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        {/*<div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">*/}
        {/*</div>*/}

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-sky-950 ss:leading-[100.8px] leading-[75px]">
              一站式<br className="sm:block hidden" />{" "}
            <span className="text-radial_gradient">LTCC/HTCC/微组装</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-sky-900 ss:leading-[100.8px] leading-[75px] w-full">
            解决方案
        </h1>
        <p className={`${styles.paragraph} text-gray-600 max-w-[470px] mt-5`}>
            北京宁远博纳电子科技有限责任公司主要致力于国内外低温共烧陶瓷、高温共烧陶瓷及后道微组装、检测设备等行业。给国内外客户提供单台或整线技术方案。
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 blue__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
