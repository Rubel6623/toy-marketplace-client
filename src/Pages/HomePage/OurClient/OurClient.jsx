import { Link } from "react-router-dom";


const OurClient = () => {
    return (
        <div>
            <h2 className="text-5xl font-semibold text-center mt-12">Our Clients</h2>
            <div className="md:flex items-center justify-center space-x-20 mt-12 px-24">
                <Link>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo1_compact.png?v=1676127525" alt="" />
                </Link>
                <Link>
                    <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo2_compact.png?v=1676127525" alt="" />
                </Link>
                <Link>
                <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo3_compact.png?v=1676127524" alt="" />
                </Link>
                <Link>
                <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo5_compact.png?v=1676127524" alt="" />
                </Link>
                <Link>
                <img src="https://cdn.shopify.com/s/files/1/1152/4590/files/logo1_compact.png?v=1676127525" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default OurClient;