import { facebook, instagram, linkedin, twitter, star  } from "../assets";
import * as pic from "../assets";
export const navLinks = [
  {
    id: "home",
    title: "主页",
  },
  {
    id: "business",
    title: "业务",
  },
  {
    id: "product",
    title: "产品",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "LTCC/HTCC生产设备",
    content:
      "流延机、打孔机、冲孔机、干燥炉、叠片机、温水等静压机、生瓷切割机、烧结炉",
  },
  {
    id: "feature-2",
    icon: star,
    title: "LTCC后道工艺设备",
    content:
      "激光开腔机、激光切割机、激光打标机、砂轮划片机、激光调阻机",
  },
  {
    id: "feature-3",
    icon: star,
    title: "检测设备",
    content:
      "AOI，3D厚膜测试仪、三坐标轮廓仪、超景深显微镜、超声波扫描、飞针检测",
  },
  {
    id: "feature-4",
    icon: star,
    title: "微组装设备",
    content:
        "全自动/半自动金丝键合机、粗铝丝键合机、精密植球设备、全自动/半自动贴片机、精密点焊机、激光封焊机、真空回流焊炉、等离子清洗设备",
  },
  {
    id: "feature-5",
    icon: star,
    title: "Microwave Design",
    content:
        "MODULE DESIGN 组件设计、CHIP DESIGN 芯片设计、Antenna Design 天线设计、LTCC Training LTCC培训",
  },
];

export const category = [
  {
    id: "category-1",
    name: "Electronic ceramics",
    products: [
      {
        id: "product-1",
        name:
            "流延机 Casting",
        brand: "UHT",
        type: [
          {
            id: "type-1",
            name:"CCS-710",
            img: pic.casting,
          }
        ]
      },
      {
        id: "product-2",
        name:
            "打孔机 Puncher",
        brand: "UHT",
        type: [
          {
            id: "type-1",
            name:"APP",
            img: pic.puncher_1,
          },
          {
            id: "type-2",
            name:"MP-Series",
            img: pic.puncher_2,
          },
        ]
      },
      {
        id: "product-3",
        name:
            "印刷机 Printer",
        brand: "Micro-tec",
        type: [
          {
            id: "type-1",
            name:"MT-320  Series",
            img: pic.printer_1,
          },
          {
            id: "type-2",
            name:"MT-650  Series",
            img: pic.printer_2,
          },
          {
            id: "type-3",
            name:"MTP-1100 Series",
            img: pic.printer_3,
          },
          {
            id: "type-4",
            name:"MTP-1300 Series",
            img: pic.printer_4,
          }
        ]
      },
      {
        id: "product-4",
        name:
            "叠片机 Stacker",
        brand: "Micro-tec",
        type: [
          {
            id: "type-1",
            name:"MTS",
            img: pic.stacker,
          }
        ]
      },
      {
        id: "product-5",
        name:
            "温水等静压机 Laminator",
        brand: "日新",
        type: [
          {
            id: "type-1",
            name:"WIP-45-50-50",
            img: pic.laminatior,
          }
        ]
      },
      {
        id: "product-6",
        name:
            "生瓷切割机 Green Cutter",
        brand: "UHT/Micro-Tec",
        type: [
          {
            id: "type-1",
            name:"G-CUT",
            img: pic.greenCutter_1,
          },
          {
            id: "type-2",
            name:"MTC-SP",
            img: pic.greenCutter_2,
          }
        ]
      },
      {
        id: "product-7",
        name:
            "箱式烧结炉 LTCC Box Furnace",
        brand: "SIERRATHERMAL",
        type: [
          {
            id: "type-1",
            name:"8K24-24-4A",
            img: pic.ltccBox,
          }
        ]
      },
      {
        id: "product-8",
        name:
            "链式烧结炉 LTCC Belt Furnace",
        brand: "SIERRATHERMAL",
        type: [
          {
            id: "type-1",
            name:"1K-150C72-10A",
            img: pic.ltccBelt,
          }
        ]
      },
      {
        id: "product-9",
        name:
            "端银机",
        brand: "Micro-tec",
        type: [
          {
            id: "type-1",
            name:"MTD",
            img: pic.mtd,
          }
        ]
      },
      {
        id: "product-10",
        name:
            "膜厚测试仪\n" +
            "Profilometer",
        brand: "Cyber",
        type: [
          {
            id: "type-1",
            name:"CT-350",
            img: pic.thickNessMeasurement,
          }
        ]
      },
      {
        id: "product-11",
        name:
            "三坐标轮廓仪",
        brand: "Nikon",
        type: [
          {
            id: "type-1",
            name:"VMZ-R3020",
            img: pic.VMR3020,
          }
        ]
      },
      {
        id: "product-12",
        name:
            "超景深显微镜\n" +
            "Microscope",
        brand: "HIROX",
        type: [
          {
            id: "type-1",
            name:"RH-2000",
            img: pic.microscope,
          }
        ]
      },
      {
        id: "product-13",
        name:
            "激光开腔机\n" +
            "Laser Cutter",
        brand: "LPKF",
        type: [
          {
            id: "type-1",
            name:"U4",
            img: pic.laserCutter,
          }
        ]
      },
      {
        id: "product-14",
        name:
            "激光调阻机 Laser Trimmer",
        brand: "Lasertek",
        type: [
          {
            id: "type-1",
            name:"TF-5900",
            img: pic.laserTrimmer,
          }
        ]
      },
      {
        id: "product-15",
        name:
            "划片机\n" +
            "Dicing Machine",
        brand: "东京精密",
        type: [
          {
            id: "type-1",
            name:"SS20/SS20 Plus",
            img: pic.dicingMachine,
          }
        ]
      }]
  },
      {
        id: "category-2",
        name: "Advanced Packaging",
        products: [
          {
            id: "product-1",
            name:
                "贴片机\n" +
                "Die Bond",
            brand: "Tresky",
            type: [
              {
                id: "type-1",
                name:"T6000",
                img: pic.dieBond_1,
              },
              {
                id: "type-2",
                name:"T8000",
                img: pic.dieBond_2,
              }
            ]
          },
          {
            id: "product-2",
            name:
                "键合机\n" +
                "Wire Bond",
            brand: "F&K",
            type: [
              {
                id: "type-1",
                name:"M17_D",
                img: pic.wireBond_1,
              },
              {
                id: "type-2",
                name:"M17_S",
                img: pic.wireBond_2,
              },
              {
                id: "type-3",
                name:"M17_L",
                img: pic.wireBond_3,
              },
              {
                id: "type-4",
                name:"M17_XL",
                img: pic.wireBond_4,
              },
            ]
          },
          {
            id: "product-3",
            name:
                "激光植球机\n" + "Laser Ball Placing Machine",
            brand: "Pactech",
            type: [
              {
                id: "type-1",
                name:"SB2-SM",
                img: pic.lacerBall,
              }
            ]
          },
          {
            id: "product-4",
            name:
                "精密植球机\n" +
                "Ball Placing Machine",
            brand: "Shinapex",
            type: [
              {
                id: "type-1",
                name:"STM-203FB",
                img: pic.ballPlacing,
              }
            ]
          },
          {
            id: "product-5",
            name:
                "真空烧结炉\n" +
                "Vacuum Furance",
            brand: "REK",
            type: [
              {
                id: "type-1",
                name:"SC-350",
                img: pic.vacuumFurance,
              }
            ]
          },
          {
            id: "product-6",
            name:
                "X光机",
            brand: "YXLON",
            type: [
              {
                id: "type-1",
                name:"CHEETAH EVO",
                img: pic.xray_1,
              },
              {
                id: "type-2",
                name:"COUGAR EVO",
                img: pic.xray_2,
              }
            ]
          },
          {
            id: "product-7",
            name:
                "超声波扫描仪 Scanning System",
            brand: "PVA",
            type: [
              {
                id: "type-1",
                name:"SAM301",
                img: pic.scan,
              }
            ]
          },
          {
            id: "product-8",
            name:
                "扫描电镜 Electronic Microscope",
            brand: "ThermoFisher",
            type: [
              {
                id: "type-1",
                name:"Apreo 2C",
                img: pic.electMicroscope,
              }
            ]
          },
          {
            id: "product-9",
            name:
                "推拉力剪切力测试仪 ",
            brand: "DAGE",
            type: [
              {
                id: "type-1",
                name:"4000Plus",
                img: pic.fourPlus,
              }
            ]
          },
        ]},
  {
    id: "category-3",
    name: "Semiconductor",
    products: [
      {
        id: "product-1",
        name:
            "减薄机 ",
        brand: "东京精密",
        type: [
          {
            id: "type-1",
            name: "PG3000",
            img: pic.jianbaoji_1,
          },
          {
            id: "type-2",
            name: "HRG-200X",
            img: pic.jianbaoji_2,
          }
        ]
      },
      {
        id: "product-2",
        name:
            "划片机\n" +
            "Dicing Machine ",
        brand: "东京精密",
        type: [
          {
            id: "type-1",
            name: "AD2000T",
            img: pic.dicingMachine_1,
          },
          {
            id: "type-2",
            name: "AD3000T PLUS",
            img: pic.dicingMachine_2,
          }
        ]
      },
      {
        id: "product-3",
        name:
            "膜厚测试仪 Profilometer",
        brand: "Cyber",
        type: [
          {
            id: "type-1",
            name: "CT-350",
            img: pic.thickNessMeasurement,
          }
        ]
      }]
  }
];

export const footerLinks = [
  {
    title: "联系我们",
    links: [
      {
        name: "电话：(010)68663420 / 15810207886",
        link: "",
      },
      {
        name: "地址：北京市石景山区银河南街2号院2号楼1607",
        link: "",
      },
      {
        name: "邮箱：xidong.wu@nybona-tec.com",
        link: "",
      },
    ],
  }
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

