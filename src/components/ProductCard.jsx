import styles from "../style.js";

const ProductCard = ({ name, brand, types }) => (
  <div className="flex border-gray-400 border-b-2 justify-between flex-col px-15 py-5 w-full md:mr-10 sm:mr-5 mr-0 my-1 product-card">
    <span className="flex-1 font-poppins font-normal text-[28px] leading-[30px] text-sky-900 py-3 my-1">
      {name}
    </span>
      <span className="font-poppins text-gray-700 text-[24px] leading-[3px] py-2 px-0.5 my-5">
          品牌：{brand}
      </span>
      <div className={`${styles.flexStart}  flex-row`}>
          {types.map((type) => (
              <div className="text-center mx-1 rounded-xl ">
                  <div className="px-10 pt-6 pb-4">
                      <p className="text-sky-900 sm:text-lg md:text-xl xl:text-2xl">
                          型号:{" "}
                          <span className="font-bold hover:text-primary transition ease-out">
                            {type.name}
                          </span>
                      </p>
                  </div>
                  <div className="aspect-w-16 aspect-h-9 pb-2 mb-2 ">
                      <img className="max-h-[400px] object-cover" src={type.img} alt=""/>
                  </div>
              </div>
          ))}
      </div>
    </div>
);

export default ProductCard;

