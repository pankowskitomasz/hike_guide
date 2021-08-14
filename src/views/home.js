import React,{Component} from "react";
import HomeTop from "../components/home-top";
import ProductPromo from "../components/product_promo";
import ServicesDesc from "../components/services_desc";
import ServicesExt from "../components/services_ext";
import ExperienceShort from "../components/experience_short";
import Explore from "../components/explore";
import Review from "../components/review";
import ContactData from "../components/contact-data";

class Home extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <HomeTop/>
                <ProductPromo/>
                <ServicesDesc/>
                <ServicesExt/>
                <ExperienceShort/>
                <Explore/>
                <Review/>
                <ContactData/>
            </main>
        );
    }
}

export default Home;