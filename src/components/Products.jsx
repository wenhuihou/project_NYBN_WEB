import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import styles, {layout} from "../style.js";
import ProductCard from "./ProductCard.jsx";
import {category} from "../constants/index.js";


function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Products = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <section id="product" className={layout.section}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16`}>
                <div className="font-poppins font-semibold min-w-[600px] ss:text-[46px] text-[28px] text-sky-900 ss:leading-[100.8px] leading-[75x]">
                    产品系列： <br className="sm:block hidden" />
                </div>
        <Box sx={{ width: '100%'}}>
            <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                <Tabs value={value}
                      onChange={handleChange}
                      textColor="primary"
                      aria-label="basic tabs" centered>
                    <Tab label="Electronic ceramics" {...a11yProps(0)}
                         sx={{fontSize:'30px', color:'#214d76'}}/>
                    <Tab label="Advanced Packaging" {...a11yProps(1)}
                         sx={{fontSize:'30px', color:'#214d76'}}/>
                    <Tab label="Semiconductor" {...a11yProps(2)}
                          sx={{fontSize:'30px', color:'#214d76'}}/>
                </Tabs>
            </Box>
            { category.map((c, index) => (
                <CustomTabPanel value={value} index={index}>
                    { c.products.map((product) => (
                        <ProductCard key={product.id} types={product.type} brand={product.brand} name={product.name} />
                    ))
                    }
                </CustomTabPanel>
            ))
            }
        </Box>
                </div>
        </section>
    );
};

export default Products;
