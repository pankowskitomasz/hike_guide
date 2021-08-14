import React,{Component} from "react";
import StoryDesc from "../components/story_desc copy";
import StoryExt from "../components/story_ext copy";
import ContactData from "../components/contact-data";

class About extends Component{
    render(){
        return(          
            <main className="minh-100vh">  
                <div className="py-5 border-bottom"></div>   
                <StoryDesc/>
                <StoryExt/>
                <ContactData/>
            </main>
        );
    }
}

export default About;