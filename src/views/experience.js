import React,{Component} from "react";
import ExperienceShort from "../components/experience_short";
import Review from "../components/review";
import ContactData from "../components/contact-data";


class Experience extends Component{
    render(){
        return(          
            <main className="minh-100vh">     
                <ExperienceShort/>
                <Review/>
                <ContactData/>
            </main>
        );
    }
}

export default Experience;