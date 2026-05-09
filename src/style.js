const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-sky-900 xs:leading-[76.8px] leading-[66.8px] w-full",
  heading3: "font-poppins font-semibold ss:text-[46px] text-[28px] text-sky-900 ss:leading-[100.8px] leading-[75px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-12 py-4",

  sectionPadding: "xl:px-0 sm:px-16 px-6",
  descriptionMax: "max-w-[470px]",
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
};

export default styles;
