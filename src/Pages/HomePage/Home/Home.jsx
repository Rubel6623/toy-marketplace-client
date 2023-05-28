import Banner from "../Banner/Banner";
import CustomerReview from "../CustomersReview/CustomerReview";
import Gallery from "../Gallery/Gallery";
import OurClient from "../OurClient/OurClient";
import ShopByCategory from "../ShopByCategory/ShopByCategory";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <OurClient></OurClient>
            <CustomerReview></CustomerReview>
        </div>
    );
};

export default Home;