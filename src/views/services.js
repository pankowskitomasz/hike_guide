import React,{Component} from "react";
import Explore from "../components/explore";
import ServicesDesc from "../components/services_desc";
import ServicesExt from "../components/services_ext";
import ContactData from "../components/contact-data";

class Services extends Component{
    render(){
        return(          
            <main className="minh-100vh">    
                <Explore/>
                <ServicesDesc/>
                <ServicesExt/> 
                <ContactData/>
            </main>
        );
    }
}

export default Services;