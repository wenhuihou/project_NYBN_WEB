import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-gray-600 text-[20px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-gray-900 text-[18px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="business" className={layout.section}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="font-poppins font-semibold min-w-[600px] ss:text-[46px] text-[28px] text-sky-900 ss:leading-[100.8px] leading-[75x]">
        主要业务： <br className="sm:block hidden" />
          <p className={`${styles.paragraph} text-[20px] text-gray-600 max-w-[470px] mb-20`}>
              LTCC/HTCC生产设备，LTCC后道工艺设备，检测设备，微组装设备
          </p>
          技术合作：<br className="sm:block hidden" />
          <p className={`${styles.paragraph} text-[20px] text-gray-600 max-w-[470px] mb-20`}>德国IMST微波组件、芯片设计、技术合作和引进 </p>
      </div>
    </div>

    <div className={`flex-col items-start max-w-[800px] xl:px-0 sm:px-16 px-6` }>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
